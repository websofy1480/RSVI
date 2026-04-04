"use client";
import { contactPageDetails, footer } from "@/app/api/data";
import { RiLoader2Fill } from "react-icons/ri";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import Link from "next/link";
import Toast from "../Common/Toast";


export default function ContactPage() {
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

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
            <div className="bg-formbg/20 p-8 rounded-xl shadow-lg space-y-4">
              <h2
                className="text-2xl uppercase text-primary mb-4 font-semibold"
                data-aos="fade-up">
                Contact{" "}
                <span className="text-secondary">Information</span>
              </h2>
              <div className="space-y-6">
                {
                  contactPageDetails?.map((item, i) => (
                    <div key={i}>
                      {
                        i !== 3 ?
                          <Link
                            target={item.newTab}
                            href={item.url}
                            className="bg-white hover:bg-transparent flex border  shadow-md shadow-MidnightNavyText/50  p-6 items-center gap-4 rounded-2xl">

                            <div className={`${i % 2 === 0 ? "text-primary" : "text-secondary"}`}>
                              {item.icon}
                            </div>
                            <div className={`flex justify-center ${i !== 3 ? "flex-row" : "flex-col"} items-center gap-5 text-center`}>
                              <h3 className="font-semibold bg-slat  text-sta">{item.title}</h3>
                              <p className="text-SlateBlueText break-all sm:break-normal">
                                {item.value}
                              </p>
                            </div>
                          </Link>
                          :
                          <Link
                            target={item.newTab}
                            href={item.url}
                            key={i}
                            className="bg-white hover:bg-transparent flex border  shadow-md shadow-MidnightNavyText/50  p-6 items-center rounded-2xl">
                            <div className="flex justify-center flex-col items-center gap-3 text-center">
                              <div className="flex gap-4">
                                <div className="text-secondary">
                                  {item.icon}
                                </div>
                                <h3 className="font-semibold ">{item.title}</h3>
                              </div>
                              <p className="text-SlateBlueText break-all sm:break-normal">
                                {item.value}
                              </p>
                            </div>
                          </Link>
                      }
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="container mb-10">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3559.725241992749!2d80.950946!3d26.84869!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdd302534c0d%3A0x6618eecac0f2ad60!2sRehabilitation%20Society%20of%20the%20Visually%20Impaired!5e0!3m2!1sen!2sin!4v1771320152894!5m2!1sen!2sin"
                width="100%"
                height="400"
                loading="lazy"
                className="w-full"
              ></iframe>
            </div>
          </div>

          <div className="container">
            <div className="bg-primary rounded-2xl text-white py-10 px-10">
              <div className="flex flex-col items-center gap-6">
                <h3 className="text-lg font-medium">
                  Follow our journey. Spread awareness.
                </h3>
                <div className="flex gap-5">
                  {footer?.socialMedia.map((item, index) => (
                    <Link key={index}
                      title={item.title}
                      href={item.url}
                      target="_blank"
                      className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full shadow hover:bg-transparent hover:border transition"
                    >
                      {item.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

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

