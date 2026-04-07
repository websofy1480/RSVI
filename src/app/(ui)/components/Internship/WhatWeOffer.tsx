"use client";
import Image from "next/image";
import { PreLoader } from "../Common/PreLoader";
import { InternshipProps } from "@/types/internshipContext";

export const WhatWeOffer: React.FC<InternshipProps> = ({ internshipData }) => {

  return (
    <>
      {
        internshipData?.length === 0 ? <PreLoader /> :
          internshipData &&
          <div className="relative">
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-formbg transform -translate-x-1/2"></div>
              <div className="space-y-24">
                {internshipData?.map((item, index) => (
                  <div
                    key={item._id}
                    className={`relative flex flex-col md:flex-row items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                    <div
                      className="w-full md:w-1/2"
                      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    >
                      <div className="relative w-full rounded-xl h-72 shadow-xl group overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="transition-transform  duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div
                      className="w-full md:w-1/2 mx-6 mt-8 md:mt-0"
                      data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                      <div className="bg-white p-8 shadow-xl rounded-xl hover:-translate-y-2 transition-all duration-500">
                        <h3 className="text-lg text-primary font-bold mb-4">
                          {item.title}
                        </h3>
                        <p className="text-SlateBlueText text-justify leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      }
    </>
  );
}
