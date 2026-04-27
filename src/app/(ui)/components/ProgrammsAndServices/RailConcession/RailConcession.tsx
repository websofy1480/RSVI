"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RailInfoStep } from "./RailInfoStep";
import { useState } from "react";
import { RailCamp } from "./RailCamp";
import { RailCampForm } from "./RailCampForm";

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
                    <div className="col-span-7  hidden sm:block"
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
            <RailCampForm open={open} onClose={() => setOpen(false)} />
        </section>
    )
}

