"use client";
import Image from "next/image";
import PreLoader from "../Common/PreLoader";
import { FC } from "react";
import { InternshipProps } from "@/types/internshipContext";

export const OurPerks: FC<InternshipProps> = ({ perksData }) => {

  return (
    <section className="bg-formbg/20 relative overflow-hidden">
      <div className="container">
        <h2 className="text-4xl font-bold uppercase text-center text-primary mb-16">
          Perks of{" "}
          <span className="text-secondary">Joining Us</span>
        </h2>
        {
          perksData?.length === 0 ? <PreLoader /> :
            perksData &&
            <div className="flex flex-wrap  justify-center gap-8 con">
              {perksData?.map((perk, index) => (
                <div
                  key={perk._id}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="group text-center"
                >
                  <div className="relative w-28 h-28 mx-auto mb-6">
                    <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-lg transition-all duration-500  group-hover:scale-110">
                      <Image
                        src={perk.image}
                        alt={`Image of ${perk.title}`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        fill
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {perk.title}
                  </h3>
                  <p className="text- text-SlateBlueText leading-relaxed max-w-xs mx-auto">
                    {perk.description}
                  </p>
                </div>
              ))}
            </div>
        }
      </div>
    </section>
  );
}
