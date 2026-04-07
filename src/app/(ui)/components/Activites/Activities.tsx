"use client"

import Image from "next/image";
import { PreLoader } from "../Common/PreLoader";
import { SuccessStoryProps } from "@/types/successStoryContext";

export const Activities: React.FC<SuccessStoryProps> = ({ activitiesData }) => {

    return (
        <section>
            <div className="container">
                <div className="mb-12 text-center "
                    data-aos="fade-up">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight uppercase text-primary">
                        Our{" "}
                        <span className="text-secondary">Activities</span>
                    </h1>
                    <p className="mt-5 sm:text-19 text-primary sm:text-center text-justify ">
                        Engaging activities for visually impaired individuals to support learning and overall growth</p>
                </div>

                {
                    activitiesData?.length === 0 ?
                        <PreLoader />
                        :
                        activitiesData && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {activitiesData?.map((activity) => (
                                <div
                                    key={activity._id}
                                    className="group perspective h-80 cursor-pointer">
                                    <div className="relative  w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                                        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg">
                                            <Image
                                                src={activity.image}
                                                alt={activity.title!}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="absolute w-full h-full bg-white rounded-xl shadow-lg backface-hidden rotate-y-180 p-6 flex flex-col justify-center items-center text-center">
                                            <h3 className="text-xl font-semibold mb-4 text-primary">
                                                {activity.title}
                                            </h3>
                                            <p className="text-secondary text-sm leading-relaxed">
                                                {activity.description}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                }
            </div>
        </section>
    );
};
