"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import PreLoader from "../Common/PreLoader";
import { initiatives } from "@/types/initiativesContext";


export const TrainingPrograms = ({ trainings }: { trainings: initiatives[] }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        const container = scrollRef.current;

        container.scrollBy({
            left: direction === "left" ? -container.offsetWidth : container.offsetWidth,
            behavior: "smooth",
        });
    };

    return (
        <section className="bg-formbg/20" id="training-programme">
            <div className="mx-auto px-6">
                <div className="md:pb-12 text-center pb-8">
                    <h2 className="text-4xl font-bold uppercase text-center text-primary">
                        Training{" "}
                        <span className="text-secondary">Programs</span>
                    </h2>
                    <p className="text-primary font-normal sm:text-19 mt-5  text-center m-auto">
                        Structured learning initiatives designed to build confidence,
                        independence, and future-ready skills.
                    </p>
                </div>
                {
                    trainings?.length === 0 ? <PreLoader /> :
                        trainings &&
                        <div className="flex items-center gap-4 container">
                            <button
                                onClick={() => scroll("left")}
                                className="hidden sm:flex bg-white shadow-lg p-3 rounded-full hover:scale-110 transition flex-shrink-0"
                            >
                                <FaChevronLeft size={20} className="text-primary" />
                            </button>
                            <div
                                ref={scrollRef}
                                className="flex  overflow-x-auto scroll-smooth snap-x snap-mandatory rounded-2xl">
                                {trainings?.map((training, index) => (
                                    <div
                                        key={training._id}
                                        className="w-full flex-shrink-0 snap-center bg-white rounded-2xl shadow-xl overflow-hidden">
                                        <div className="relative h-80 w-full">
                                            <Image
                                                src={training.image}
                                                alt={`Image of ${training.title}`}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-6 md:p-8">
                                            <h3 className="text-2xl font-semibold text-primary">
                                                {training.title}
                                            </h3>
                                            <p className="text-SlateBlueText text-lg mt-4 leading-relaxed sm:text-justify">
                                                {training.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => scroll("right")}
                                className="hidden sm:flex bg-white shadow-lg p-3 rounded-full hover:scale-110 transition flex-shrink-0"
                            >
                                <FaChevronRight size={20} className="text-primary" />
                            </button>
                        </div>
                }
            </div>
        </section>
    );
}
