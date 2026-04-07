"use client";
import { useState } from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { PreLoader } from "../Common/PreLoader";
import { initiatives } from "@/types/initiativesContext";

export const EducationalPrograms: React.FC<{ educations: initiatives[] }> = ({ educations }) => {
    const [active, setActive] = useState<number | null>(null);

    return (
        <>
            {
                educations?.length === 0 ? <PreLoader /> :
                    educations && <div className="px-6 md:px-16 relative overflow-hidden">
                        <div className="flex flex-wrap gap-10 justify-center items-center">
                            {educations?.map((edu, index) => (
                                <div
                                    key={edu._id}
                                    onClick={() => setActive(index)}
                                    className="relative group cursor-pointer">
                                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full cursor-pointer overflow-hidden shadow-xl transition duration-500 group-hover:scale-110">
                                        <Image
                                            src={edu.image}
                                            alt={`Image of ${edu.title}`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <p className="mt-4 text-center font-semibold  text-primary">
                                        {edu.title}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div
                            className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-white shadow-2xl transform transition-transform duration-500 z-50 ${active !== null ? "translate-x-0" : "translate-x-full"}`}>
                            {active !== null && (
                                <div className="p-8 h-full flex flex-col">
                                    <button onClick={() => setActive(null)} className="mb-6">
                                        <RxCross2 size={10}
                                            className="cursor-pointer text-primary bg-primary/20 p-1 w-8 h-8 rounded-full hover:border hover:border-secondary/30 hover:bg-transparent" />
                                    </button>
                                    <div className="relative w-full h-60 rounded-2xl overflow-hidden mb-6">
                                        <Image
                                            src={educations[active].image}
                                            alt={`Image of ${educations[active].title}`}
                                            width={200}
                                            height={200}
                                            className="h-60 w-full"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-primary mb-4">
                                        {educations[active].title}
                                    </h3>
                                    <p className="text-SlateBlueText text-lg text-justify overflow-y-auto leading-relaxed">
                                        {educations[active].description}
                                    </p>
                                </div>
                            )}
                        </div>
                        {active !== null && (
                            <div
                                onClick={() => setActive(null)}
                                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                            />
                        )}
                    </div>}
        </>
    );
}
