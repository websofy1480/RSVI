import Image from "next/image";
import { PreLoader } from "../../Common/PreLoader";
import { initiatives } from "@/types/initiativesContext";
import { useState } from "react";
import { Pagination } from "@/app/admin/components/common/Pagination";

export const TrainingPrograms: React.FC<{ trainings: initiatives[] }> = ({ trainings }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 6;

    const totalPages = Math.ceil(trainings.length / recordsPerPage);
    const currentData = trainings.slice(
        (currentPage - 1) * recordsPerPage,
        currentPage * recordsPerPage
    );

    return (
        <section id="training-programme">
            <div className="container">


                <div className="text-center mb-4 sm:mb-11">
                    <h2 className="text-primary md:text-40 text-28 pb-4 font-bold uppercase">
                        Training{" "}<span className="text-secondary">Programs</span>
                    </h2>
                    <p className="text-lg font-normal text-primary">
                        Structured learning initiatives designed to build confidence, independence, and future-ready skills.
                    </p>
                </div>

                <div>
                    {
                        currentData?.length === 0 ? <PreLoader /> :

                            <div
                                role="list"
                                aria-label="Available training courses"
                                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                            >
                                {currentData?.map((item, index) => (
                                    <article
                                        key={item._id}
                                        role="listitem"
                                        tabIndex={0}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                        className="group bg-navBg rounded-2xl border border-secondary overflow-hidden
                         transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-formbg" aria-labelledby={`course-title-${item._id}`}
                                    >
                                        <div className="relative w-full h-48">
                                            <Image
                                                src={item.image}
                                                alt={`${item.title} training illustration`}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                priority={index === 0}
                                            />
                                        </div>
                                        <div className="p-5">
                                            <h3
                                                id={`course-title-${item._id}`}
                                                className="text-lg font-semibold mb-2 min-h-14"
                                            >
                                                {item.title}
                                            </h3>

                                            <p className="text-SlateBlueText text-justify min-h-36 mb-4">
                                                {item.description}
                                            </p>
                                            <button
                                                className="mt-2 px-5 py-2 bg-learning text-navBg rounded-lg hover:bg-learning/80 transition focus:outline-none"
                                                aria-label={`Apply for ${item.title}`}>
                                                Apply Now
                                            </button>
                                        </div>
                                    </article>
                                ))}
                            </div>
                    }
                </div>
            </div>
            {
                totalPages > 1 &&
                <div className={`${totalPages > 1 ? "mt-12" : "mt-0"}`}>
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                </div>
            }

        </section>
    );
}