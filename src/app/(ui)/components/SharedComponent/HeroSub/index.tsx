"use client"
import { FC, useEffect, useState } from "react";
import Image from "next/image";

import { BreadcrumbLink } from "@/types/breadcrumb";
import Breadcrumb from "../../Breadcrumb";

interface HeroSubProps {
    title?: string;
    description?: string;
    imageSrc?: string;
    breadcrumbLinks: BreadcrumbLink[];
}

const HeroSub: FC<HeroSubProps> = ({
    title,
    description,
    breadcrumbLinks,
    imageSrc = "about-us/about-us-banner.png"
}) => {

    const [imgSrc, setImgSrc] = useState<string | null>(null);

    useEffect(() => {
        setImgSrc(`/images/${imageSrc}`);
    }, [imageSrc]);
    return (
        <section className="relative sm:pt-36 pt-5  overflow-hidden sm:h-80 mt-20 h-28">
            <div className="absolute inset-0">
                {
                    imgSrc && <Image
                        src={imgSrc}
                        alt="Page Banner"
                        fill
                        priority
                    />
                }
            </div>

            <div className="container">
                <div className={`flex flex-wrap sm:mt-0 mt-5 items-center justify-between gap-2`}>
                    <div
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <h2 className={` ${title?.includes("PCC") ? "text-sm" : "text-xl"} md:text-[40px] font-bold text-white leading-tight`}>
                            {title} 
                        </h2>

                        {/* <p className="text-lg text-white/80 font-normal max-w-[506px] mt-3">
                            {description}
                        </p> */}
                    </div>
                    
                    <div
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <Breadcrumb links={breadcrumbLinks} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSub;
