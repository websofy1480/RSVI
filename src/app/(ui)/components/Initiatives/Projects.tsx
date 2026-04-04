"use client";

const Infotainment = [
    {
        title: "Gyaan",
        description:
            "Customised Study plan for students to make them well equipped with basic spectrums of knowledge. Also, this involves special classes for preparation of Competative Exams like Banking, SSC, IAS, etc.",
        image: "/images/hero/rsvi-hero-1.jpg",
    },
    {
        title: "Tech-Guru Sessions",
        description:
            "A series of update on latest technology, computer usage, updating with latest Mobile Applications and other digital and social platforms.",
        image: "/images/hero/rsvi-hero-1.jpg",
    },
    {
        title: "Interview Preparation Strategies",
        description:
            "An interview to learn about all the tips to crack the interview.",
        image: "/images/hero/rsvi-hero-1.jpg",
    },
    {
        title: "Mentor-Mentee Programme",
        description:
            "To meet the coaching requirements of students through online classes.",
        image: "/images/hero/rsvi-hero-1.jpg",
    },
    {
        title: "Chai Pe Charcha",
        description:
            "A series of talk sessions to know the views of students on every latest and general aspects.",
        image: "/images/hero/rsvi-hero-1.jpg",
    },
    {
        title: "RSVI Got Talent",
        description:
            "A platform to unleash hidden talent of the students of RSVI.",
        image: "/images/hero/rsvi-hero-1.jpg",
    },
    {
        title: "Movie Review Sessions (Audio) by RSVI",
        description:
            "Sharing a detailed Movie Review Session to the Visually Impaired in form of an accessible audio capsule.",
        image: "/images/hero/rsvi-hero-1.jpg",
    },
    {
        title: "Web Series (Audio) by RSVI",
        description:
            "An initiative to share audio capsules of most preferred web series to its Visually Impaired students for their leisure and entertainment.",
        image: "/images/hero/rsvi-hero-1.jpg",
    },
    {
        title: "Utsav",
        description:
            "Celebrating every occasion in form of fun and Learn.",
        image: "/images/hero/rsvi-hero-1.jpg",
    },
    {
        title: "Aaina",
        description:
            `Grooming sessions for the Visually Impaired are organized with emphasis on "Beauty doesn't need a vision". Everyone is beautiful and worth appreciation.`,
        image: "/images/hero/rsvi-hero-1.jpg",
    },
    {
        title: "Rozgaar Samachaar Capsule",
        description:
            `A platform to provide suitable career opportunities for students of RSVI.`,
        image: "/images/hero/rsvi-hero-1.jpg",
    },
];

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import PreLoader from "../Common/PreLoader";
import { initiatives } from "@/types/initiativesContext";


export const Projects = ({ projetcs }: { projetcs: initiatives[] }) => {

    const [filter, setFilter] = useState<"all" | "Upcoming" | "Udaan">("all");
    const [openModal, setOpenModal] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        const container = scrollRef.current;
        container.scrollBy({
            left:
                direction === "left"
                    ? -container.offsetWidth
                    : container.offsetWidth,
            behavior: "smooth",
        });
    };

    const filteredProjects = filter === "all" ? projetcs : projetcs.filter((p) => p.category === filter);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [filter]);

    return (
        <section className="bg-formbg/20  pb-0 " id="project">
            <div className="md:pb-12 text-center pb-8">
                <h2 className="text-4xl font-bold uppercase text-center text-primary">
                    Our Transformative{" "}
                    <span className="text-secondary">Projects</span>
                </h2>
            </div>

            {
                projetcs?.length === 0 ? <PreLoader /> :
                    <div className="h-[50vh] sm:h-[85vh] md:h-[60vh] overflow-hidden flex flex-col container">

                        {/* Filters */}
                        <div className="text-center mb-6">
                            <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
                                {["all", "Upcoming", "Udaan"].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setFilter(type as any)}
                                        className={`px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-md font-semibold transition-all duration-300 ${filter === type
                                                ? "bg-primary text-white scale-105"
                                                : "border border-secondary/50 text-primary hover:bg-primary hover:text-white"
                                            }`}
                                    >
                                        {type === "all" ? "All" : type}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto snap-y snap-mandatory scroll-smooth"
                        >
                            {filteredProjects.map((project, index) => {
                                const udaanProjects = filteredProjects.filter(
                                    (p) => p.category === "Udaan"
                                );

                                const isLastUdaan =
                                    project.category === "Udaan" &&
                                    project._id === udaanProjects[udaanProjects.length - 1]?._id;

                                return (
                                    <div
                                        key={project._id}
                                        className="snap-start min-h-full flex items-center justify-center py-6">
                                        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
                                            <div
                                                className={`relative h-[30vh] sm:h-[35vh] md:h-[40vh] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl ${index % 2 !== 0 ? "md:order-2" : ""
                                                    }`}
                                            >
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className={`text-center md:text-left ${index % 2 !== 0 ? "md:order-1" : ""
                                                }`}>
                                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 sm:mb-4">
                                                    {project.title}
                                                </h3>

                                                <p className="text-sm sm:text-base md:text-lg text-SlateBlueText mb-5 sm:mb-8">
                                                    {project.description}
                                                </p>

                                                {isLastUdaan && (
                                                    <button
                                                        onClick={() => setOpenModal(true)}
                                                        className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-md font-semibold border border-secondary/50 text-primary hover:bg-primary hover:text-white"
                                                    >
                                                        Learn More
                                                    </button>
                                                )}
                                            </div>

                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
            }

            {openModal && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4" onClick={() => setOpenModal(false)}>
                    <div className="w-full p-8 rounded-2xl relative" >
                        <button
                            onClick={() => setOpenModal(false)}
                            className="absolute top-4 right-4 text-xl">
                            <RxCross2 size={10}
                                className="cursor-pointer text-white bg-white/30 p-1 w-8 h-8 rounded-full hover:border hover:border-white hover:bg-transparent"
                            />
                        </button>
                        <div className="flex items-center gap-4 container">
                            <button
                                onClick={(e) => { scroll("left"), e.stopPropagation() }}
                                className="hidden sm:flex bg-white shadow-lg p-3 rounded-full hover:scale-110 transition flex-shrink-0"
                            >
                                <FaChevronLeft className="text-secondary" size={20} />
                            </button>


                            <div
                                ref={scrollRef}
                                className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory rounded-2xl"
                                onClick={(e) => e.stopPropagation()}>
                                {Infotainment?.map((item, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex-shrink-0 snap-center bg-formbg rounded-2xl shadow-xl overflow-hidden">
                                        <div className="relative h-48 sm:h-80 md:h-64 w-full">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-6 md:p-8">
                                            <h3 className="text-2xl font-semibold text-primary">
                                                {item.title}
                                            </h3>
                                            <p className="text-SlateBlueText text-lg mt-4 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={(e) => { scroll("right"), e.stopPropagation() }}
                                className="hidden sm:flex bg-white shadow-lg p-3 rounded-full hover:scale-110 transition flex-shrink-0"
                            >
                                <FaChevronRight size={20} className="text-[#262017]" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}











