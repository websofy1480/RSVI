"use client"
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FiSend } from "react-icons/fi";
import { RiLoader2Fill } from "react-icons/ri";
import { Toast } from "../Common/Toast";
import { ImageUploader } from "@/app/admin/components/common/ImageUploader";
import { TooltipProps } from "@/app/admin/components/common/Tooltip";

export const CollaborationsForm = () => {
    const [toast, setToast] = useState<TooltipProps | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        collaborationsType: "",
        message: "",
        image: "",
        image_publicId: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        phone: "",
    });

    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const captchaRef = useRef<ReCAPTCHA | null>(null);
    const [processing, setProcessing] = useState<boolean>(false)

    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        if (name === "name") {
            if (!/^[A-Za-z\s]*$/.test(value)) {
                setErrors((prev) => ({
                    ...prev,
                    name: "Only characters are allowed.",
                }));
                return;
            }
            if (value.length > 30) {
                setErrors((prev) => ({
                    ...prev,
                    name: "Maximum 30 characters allowed.",
                }));
                return;
            }
            setErrors((prev) => ({ ...prev, name: "" }));
        }
        if (name === "phone") {
            if (!/^\d*$/.test(value)) {
                setErrors((prev) => ({
                    ...prev,
                    phone: "Only numbers are allowed.",
                }));
                return;
            }
            if (value.length > 10) {
                setErrors((prev) => ({
                    ...prev,
                    phone: "Phone number must be 10 digits.",
                }));
                return;
            }
            setErrors((prev) => ({ ...prev, phone: "" }));
        }
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setProcessing(true);
        if (!captchaValue) {
            setToast({ "message": "Please verify the CAPTCHA before submitting your collaboration request.", "type": "error" });
            setProcessing(false);
            return;
        }

        try {
            const res = await fetch("/api/auth/collaborate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, captcha: captchaValue }),
            });
            const data = await res.json();
            if (res.ok) {
                setToast({ message: data.message, type: "success" });
            } else {
                setToast({ message: data.message, type: "error" });
            }
        } catch (error) {
            setToast({ message: "Internal server error...", type: "error" });
        } finally {
            captchaRef.current?.reset();
            setCaptchaValue(null);
            setProcessing(false);
            setFormData({
                name: "",
                phone: "",
                email: "",
                collaborationsType: "",
                message: "",
                image: "",
                image_publicId: ""
            });
            setErrors({
                name: "",
                phone: "",
            });
        }
    };

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}
                    className="bg-formbg/20 p-8 rounded-xl shadow-lg space-y-4" data-aos="fade-right">
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleOnchange}
                            required
                            className="w-full p-3 border rounded-md outline-none text-MidnightNavyText"
                        />
                        {errors.name && (
                            <p className="text-primary text-xs mt-1">{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleOnchange}
                            required
                            className="w-full p-3 border rounded-md outline-none text-MidnightNavyText"
                        />
                        {errors.phone && (
                            <p className="text-primary text-xs mt-1">{errors.phone}</p>
                        )}
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleOnchange}
                        required
                        className="w-full p-3 border rounded-md outline-none text-primary"
                    />
                    <select
                        name="collaborationsType"
                        className="w-full p-3 border rounded-md outline-none text-MidnightNavyText cursor-pointer"
                        value={formData.collaborationsType}
                        onChange={handleOnchange}
                        required
                    >
                        <option value="">Select Collaborations Type</option>
                        {
                            ["Individual", "Organization"].map((item: string, index: number) => (
                                <option key={index} value={item}>{item}</option>
                            ))
                        }
                    </select>
                    <textarea
                        name="message"
                        placeholder="Your Message..."
                        rows={6}
                        value={formData.message}
                        onChange={handleOnchange}
                        required
                        className="w-full p-3 border rounded-md outline-none resize-none text-MidnightNavyText"
                    />
                    <ImageUploader
                        label="Collaboration Image"
                        folder="collaboration"
                        onUpload={(url, public_Id) => setFormData({ ...formData, image: url || "", image_publicId: public_Id || "" })}
                        defaultPreview={formData.image}
                    />
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                        <div className="sm:w-[230px] w-[100%]  origin-left scale-[90%] sm:scale-75">
                            <ReCAPTCHA
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                                onChange={(value) => setCaptchaValue(value)}
                                ref={captchaRef}
                            />
                        </div>
                        <button type="submit" className="sm:w-[230px] w-full font-semibold btn btn-1 hover-filled-slide-down rounded-lg">
                            {
                                processing ? <span className="!flex items-center justify-center gap-2">

                                    Submitting... <RiLoader2Fill className="animate-spin" />
                                </span>
                                    : <span className="!flex items-center justify-center gap-2">
                                        Submit Now <FiSend />
                                    </span>
                            }
                        </button>
                    </div>
                </form>
            </div>
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </>
    )
}