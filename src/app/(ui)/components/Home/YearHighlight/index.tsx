"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { statsData } from "@/app/api/data";
import { Cta } from "../../Common/Cta";

export const YearHighlight: React.FC = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    statsData.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const speed = 2
      const counter = setInterval(() => {
        start += Math.ceil(end / 100);
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start >= end ? end : start;
          return updated;
        });
        if (start >= end) clearInterval(counter);
      }, speed);
    });
  }, []);

  return (
    <section className="relative bg-formbg/20 overflow-hidden">
      <div className="container relative z-10"
        data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
        <div className="text-center mb-4 sm:mb-11">
          <h2 className="text-primary md:text-40 text-28 pb-4 font-bold uppercase">
            Beyond sight, toward insight:{" "}<span className="text-secondary">Empowering independence</span>
          </h2>
          <p className="text-lg font-normal text-primary">
            For more than 20 years, RSVI has been dedicated to restoring independence, dignity, and opportunity
            for visually impaired individuals in Lucknow.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {statsData?.map((stat, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="relative group p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-3 border border-secondary/30"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary rounded-t-3xl" />
              <div className="mb-6 relative w-full aspect-square overflow-hidden rounded-lg">
                <Image
                  src={stat.imageUrl!}
                  alt="RSVI Impact"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="group-hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className={`text-4xl text-center font-bold ${stat.stateTextCol}`}>
                {counts[index]}
                {stat.suffix}
              </h3>
              <p className={`mt-3 text-center ${stat.stateTextCol} font-medium`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <Cta nevigateUrl="about-us" title="“True empowerment begins when ability is seen beyond disability.”" description=" — Rehabilitation Society of the Visually Impaired" buttonText="Discover Our Journey" />
      </div>
    </section>
  );
};