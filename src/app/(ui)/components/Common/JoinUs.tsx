"use client"
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FiSend } from "react-icons/fi";
import { RiLoader2Fill } from "react-icons/ri";
import Toast from "./Toast";

export const JoinUs = () => {
    const [toast, setToast] = useState<{
        message: string;
        type: "success" | "error";
    } | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        department: "",
        message: "",
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
            if (value.length > 20) {
                setErrors((prev) => ({
                    ...prev,
                    name: "Maximum 20 characters allowed.",
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
                    phone: "Phone number must be 10 digits",
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
            setToast({ message: "Please verify the CAPTCHA before submitting your Join Us request...!", type: "error" });
            setProcessing(false);
            return;
        }

        try {
            const res = await fetch("/api/auth/join-us", {
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
            setToast({ message: "Internal server error....", type: "error" });
        } finally {
            captchaRef.current?.reset();
            setCaptchaValue(null);
            setProcessing(false);
            setFormData({ name: "", phone: "", department: "", message: "" });
            setErrors({
                name: "",
                phone: "",
            });
        }
    };

    return (
        <>
            <div>
                <div className="container"
                    data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                    <div className="text-center mb-4 sm:mb-11">
                        <h2 className="text-primary md:text-40 text-28 pb-4 font-bold uppercase">
                            Want to{" "}<span className="text-secondary">join us</span>
                        </h2>
                        <p className="text-lg font-normal text-primary">
                            Fill the form below and we'll get in touch
                        </p>
                    </div>
                </div>
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
                        <div>
                            <select
                                name="department"
                                className="w-full p-3 border rounded-md outline-none text-MidnightNavyText cursor-pointer"
                                value={formData.department}
                                onChange={handleOnchange}
                            >
                                <option value="">Select Department</option>
                                {
                                    ["Work From Home", "Part-Time", "Flexible Hours", "Develop Marketing Skills", "Social Media Shotout", "Letter Of Reccommendation", "Internship Certificate"].map((item: string, index: number) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Your Message..."
                                rows={6}
                                value={formData.message}
                                onChange={handleOnchange}
                                required
                                className="w-full p-3 border rounded-md outline-none resize-none text-MidnightNavyText"
                            />
                        </div>
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