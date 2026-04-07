"use client";
import { RiLoader2Fill } from "react-icons/ri";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { Toast } from "../Common/Toast";
import { TooltipProps } from "@/app/admin/components/common/Tooltip";
import { GoogleMap } from "./GoogleMap";
import { FollowOurJournyCta } from "./FollowOurJournyCta";
import { ContactInfo } from "./ContactInfo";

export const ContactPage: React.FC = () => {
  const [toast, setToast] = useState<TooltipProps | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const captchaRef = useRef<ReCAPTCHA | null>(null);
  const [processing, setProcessing] = useState<boolean>(false)

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      setToast({ message: "Please verify the CAPTCHA before contact to Stintwol!.", type: "error" });
      return;
    }

    try {
      const res = await fetch("/api/auth/contact-us", {
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
      setFormData({ name: "", phone: "", email: "", message: "" });
      setErrors({
        name: "",
        phone: "",
      });
    }
  };

  return (
    <>
      <section>
        <div>
          <div
            className="mb-12 text-center container"
            data-aos="fade-up"
          >
            <h1 className="text-3xl md:text-4xl font-bold leading-tight uppercase text-primary">
              Get In{" "}
              <span className="text-secondary">Touch</span>
            </h1>
            <p className="mt-5 sm:text-19 text-secondary sm:text-center text-justify m-auto">
              <span className="font-semibold text-primary">We value your feedback.{" "}</span>
              Share your thoughts to help us serve you better.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10 container items-stretch">
            <form onSubmit={handleSubmit} className="bg-formbg/20 p-8 rounded-xl shadow-lg space-y-4" data-aos="fade-right">
              <h2 className="text-2xl uppercase text-primary mb-4 font-semibold"
                data-aos="fade-up">
                Send Us{" "}
                <span className="text-secondary">a Message</span>
              </h2>

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleOnchange}
                  required
                  className="w-full p-3 border rounded-md outline-none text-primary"
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
                  className="w-full p-3 border rounded-md outline-none text-primary"
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
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleOnchange}
                required
                className="w-full p-3 border rounded-md outline-none resize-none text-primary"
              />
              <div className="flex flex-col sm:flex-row  gap-2 items-center">
                <div className="sm:w-[230px] w-[100%]  origin-left scale-[90%] sm:scale-75">
                  <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={(value) => setCaptchaValue(value)}
                    ref={captchaRef}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-semibold btn btn-1 hover-filled-slide-down rounded-lg"
                >
                  {
                    processing ? <span className="!flex items-center justify-center gap-2">
                      Sending... <RiLoader2Fill className="animate-spin" />
                    </span>
                      : <span className="!flex items-center justify-center gap-2">
                        Send Message <FiSend />
                      </span>
                  }
                </button>
              </div>
            </form>
            <ContactInfo />
          </div>
          <GoogleMap />
          <FollowOurJournyCta />
        </div>
      </section>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}

