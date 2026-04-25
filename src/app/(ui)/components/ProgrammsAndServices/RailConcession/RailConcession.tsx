"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RailInfoStep } from "./RailInfoStep";
import { useEffect, useState } from "react";

export const RailConcession: React.FC = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <section className="pb-0 pt-14">
            <div className="container">
                <div className="text-center"
                    data-aos="fade-up">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight uppercase text-primary">
                        Railway Concession for{" "}
                        <span className="text-secondary">Visually Impaired</span>
                    </h1>
                    <p className="mt-5 sm:text-19 text-secondary sm:text-center text-justify m-auto">
                        Get certified by RSVI to avail railway travel concessions for visually impaired persons
                    </p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 items-center mb-20 gap-4 mx-auto">
                    <div
                        className="col-span-5 py-0"
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <div>

                            <h2 className="text-2xl md:text-[40px] font-bold text-primary">
                                About{" "}<span className="text-secondary">the Service</span>
                            </h2>

                            <p className="text-lg  text-SlateBlueText text-justify max-w-404 pt-7 pb-4 sm:pb-10">
                                RSVI issues Railway Concession Certificates for visually impaired individuals with 100% vision loss. People from anywhere in India can directly approach RSVI for certification.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={() => router.push("#")}
                                className="mt-2 inline-block px-6 py-3 bg-learning text-white rounded-md font-semibold hover:bg-learning/80 transition"
                            >
                                Apply Now
                            </button>

                            <button
                                onClick={() => router.push("#")}
                                className="mt-2 inline-block px-6 py-3 text-primary rounded-md font-semibold border border-secondary/50  transition hover:bg-formbg/20"
                            >
                                Request a Camp
                            </button>
                        </div>
                    </div>
                    <div
                        className="col-span-7  hidden sm:block"
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <div className="mt-14 relative">
                            <Image
                                src="/images/rail-concession/rail-concession-about-us.jpg"
                                alt="Product"
                                width={800}
                                height={600}
                                quality={100}
                                sizes="100vw"
                                className="rounded-22 w-full h-80 hover:scale-105 transition duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <RailInfoStep />
            <RailCamp onOpen={() => setOpen(true)} />
            <RailForm
                open={open}
                onClose={() => setOpen(false)}
            />
        </section>
    )
}


export function RailCamp({ onOpen }: { onOpen: () => void }) {
    return (
        <section
            className="py-14 px-4 md:px-10 bg-primary text-white"
            data-aos="fade-up"
            data-aos-duration="800"
        >
            <div className="container text-center max-w-4xl mx-auto">
                <h2
                    className="md:text-40 text-28 font-bold mb-4"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Organize a Railway Concession Camp
                </h2>
                <p
                    className="text-lg mb-6 text-white/90"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    RSVI organizes camps at schools, NGOs, and community locations
                    to help visually impaired individuals obtain Railway Concession Certificates.
                </p>
                <button
                    onClick={onOpen}
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    className="bg-white text-primary font-semibold px-8 py-3 rounded-full  transition hover:scale-105 focus:outline-none focus:ring-2"
                >
                    Request a Camp
                </button>

            </div>
        </section>
    );
}

export const RailForm = ({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (open) {
            setShow(true);
        } else {
            const timeout = setTimeout(() => setShow(false), 200);
            return () => clearTimeout(timeout);
        }
    }, [open]);

    if (!show) return null;

    return (
        <div
            onClick={onClose}
            className={`fixed inset-0 flex items-center justify-center z-50 px-4 transition-all duration-200
                ${open ? "bg-black/60 opacity-100" : "bg-black/0 opacity-0"}
            `}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white w-full max-w-lg rounded-2xl p-6 relative transform transition-all duration-200
                    ${open
                        ? "scale-100 translate-y-0 opacity-100"
                        : "scale-95 translate-y-6 opacity-0"}
                `}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-xl"
                    aria-label="Close form"
                >
                    ✕
                </button>

                {/* Heading */}
                <h2
                    className="text-2xl font-bold text-primary mb-6"
                    data-aos="fade-up"
                >
                    Apply or Request a Camp
                </h2>

                {/* Form */}
                <form className="space-y-4">
                    <input
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="w-full border p-3 rounded"
                        placeholder="Name"
                    />

                    <input
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="w-full border p-3 rounded"
                        placeholder="Phone"
                    />

                    <select
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="w-full border p-3 rounded"
                    >
                        <option>Individual Application</option>
                        <option>Camp Request</option>
                    </select>

                    <button
                        data-aos="zoom-in"
                        data-aos-delay="250"
                        className="bg-learning text-white px-6 py-3 rounded-lg w-full"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
