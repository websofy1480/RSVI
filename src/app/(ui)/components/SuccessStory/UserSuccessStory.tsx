"use client"
import Image from 'next/image';
import { FC, useEffect, useRef } from 'react';
import PreLoader from '../Common/PreLoader';
import { SuccessStoryProps } from '@/types/successStoryContext';

export const UserSuccessStory: FC<SuccessStoryProps> = ({ successStoryData }) => {
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            imageRefs.current.forEach((el) => {
                if (!el) return;

                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    el.classList.add("show");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={` ${successStoryData?.length === 0 ? "" : "pb-0"} `}>
            <div>
                <div className="mb-12 text-center container"
                    data-aos="fade-up">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight uppercase text-primary">
                        Success{" "}
                        <span className="text-secondary">Stories</span>
                    </h1>
                    <p className="mt-5 sm:text-19 text-secondary sm:text-center text-justify m-auto">
                        A Journey From Dependence to Digital Confidence.
                    </p>
                </div>
                {
                    successStoryData?.length === 0 ? <PreLoader /> :

                        successStoryData &&
                        successStoryData?.map((successStory, index) => (
                            <div key={successStory._id} className="relative min-h-screen flex items-center" >
                                <div
                                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                                    style={{ backgroundImage: `url(${successStory.image})` }}
                                />
                                <div className="absolute inset-0 bg-black/60" />

                                <div className="relative z-10  grid md:grid-cols-2 gap-12 items-center container">
                                    <div>
                                        <h2 className="text-2xl md:text-[35px] font-bold text-white mb-4">
                                            {successStory.name}
                                        </h2>
                                        <p className="text-lg text-white/80 text-justify">
                                            {successStory.description}
                                        </p>
                                    </div>
                                    <div
                                        ref={(el) => {
                                            imageRefs.current[index] = el;
                                        }}
                                        className="mask-reveal relative h-[300px] rounded-2xl overflow-hidden shadow-2xl"
                                    >
                                        <Image
                                            src={successStory.image}
                                            alt={successStory.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                }
            </div>
        </section>
    )
}

