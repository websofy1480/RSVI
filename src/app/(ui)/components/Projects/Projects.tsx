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
import { PreLoader } from "../Common/PreLoader";
import { InitiativeProps } from "@/types/initiativesContext";
import { Pagination } from "@/app/admin/components/common/Pagination";

export const Projects: React.FC<InitiativeProps> = ({ initiativesData }) => {
    const [filter, setFilter] = useState<"all" | "Upcoming" | "Udaan">("all");
    const [openModal, setOpenModal] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const recordsPerPage = 6;

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [filter]);

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

    const projects = initiativesData.filter(item => item.initiativesType === "Projects");

    const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);

    const totalPages = Math.ceil(filteredProjects.length / recordsPerPage);
    const currentData = filteredProjects.slice(
        (currentPage - 1) * recordsPerPage,
        currentPage * recordsPerPage
    );

    return (
        <section className="pt-14" id="project">
            <div className="container">
                <div className="text-center mb-4 sm:mb-11"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <h2 className="text-primary md:text-40 text-28 pb-4 font-bold uppercase">
                        Projects That{" "}
                        <span className="text-secondary">Make a Difference</span>
                    </h2>
                    <p className="text-lg font-normal text-primary">
                        Our projects are designed to empower, support, and uplift visually impaired individuals in every aspect of life
                    </p>
                </div>
            </div>
            <div>
                {
                    currentData?.length === 0 ? <PreLoader /> :
                        <div className="container">
                            <div
                                className="text-center mb-4 sm:mb-11"
                                data-aos="fade-up"
                            >
                                <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
                                    {["all", "Upcoming", "Udaan"].map((type, index) => (
                                        <button
                                            key={type}
                                            onClick={() => setFilter(type as any)}
                                            data-aos="zoom-in"
                                            data-aos-delay={index * 100}
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
                                className="flex-1 scroll-smooth"
                            >
                                {currentData.map((project, index) => {
                                    const udaanProjects = filteredProjects.filter(
                                        (p) => p.category === "Udaan"
                                    );

                                    const isLastUdaan =
                                        project.category === "Udaan" &&
                                        project._id === udaanProjects[udaanProjects.length - 1]?._id;

                                    return (
                                        <div
                                            key={project._id}
                                            className="snap-start min-h-full flex items-center justify-center"
                                            data-aos="fade-up"
                                            data-aos-delay={index * 150}
                                        >
                                            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
                                                <div
                                                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                                                    data-aos-delay="100"
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
                                                <div
                                                    data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                                                    data-aos-delay="200"
                                                    className={`text-center md:text-left ${index % 2 !== 0 ? "md:order-1" : ""
                                                        }`}
                                                >
                                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 sm:mb-4">
                                                        {project.title}
                                                    </h3>

                                                    <p className="text-sm sm:text-base md:text-lg text-SlateBlueText mb-5 sm:mb-8">
                                                        {project.description}
                                                    </p>
                                                    {isLastUdaan && (
                                                        <button
                                                            onClick={() => setOpenModal(true)}
                                                            data-aos="zoom-in"
                                                            data-aos-delay="300"
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
            </div>
            {
                totalPages > 1 &&
                <div className={`${totalPages > 1 ? "mt-12" : "mt-0"}`}>
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
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











