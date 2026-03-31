"use client";
import { useState } from "react";
import Image from "next/image";
import PreLoader from "../Common/PreLoader";
import { initiatives } from "@/types/initiativesContext";

export const AdditionalSupport = ({ additionalSupports }: { additionalSupports: initiatives[] }) => {
    const [activeSupport, setActiveSupport] = useState<string>("Rail Concession");
    const [index, setIndex] = useState<number>(0);

    const category = additionalSupports.map(item => item.category);

    return (
        <div id="additional-support">
            <div className="md:pb-12 text-center pb-8">
                <h2 className="text-4xl font-bold uppercase text-center text-primary">
                    Additional{" "}
                    <span className="text-secondary">Support</span>
                </h2>
            </div>

            {
                additionalSupports?.length === 0 ? <PreLoader /> :
                    additionalSupports &&
                    <div>
                        <div
                            className="flex flex-wrap justify-center gap-4 mb-14"
                            data-aos="fade-up"
                        >
                            {category?.map((support, ind) => (
                                <button
                                    key={support}
                                    onClick={() => { setActiveSupport(support), setIndex(ind) }}
                                    className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${activeSupport === support
                                        ? "bg-primary text-white scale-105"
                                        : "border border-secondary/50 text-primary hover:bg-primary hover:text-white"
                                        }`}
                                >
                                    {support}
                                </button>
                            ))}
                        </div>

                        <div
                            key={activeSupport}
                            className="bg-formbg/20 text-black rounded-2xl shadow-xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center"
                            data-aos="zoom-in"
                        >
                            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                                <Image
                                    src={additionalSupports[index].image}
                                    alt="Achievement"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-lg text-SlateBlueText text-justify">{additionalSupports[index].description}</p>
                            </div>
                        </div>
                    </div>
            }

        </div>
    );
}
