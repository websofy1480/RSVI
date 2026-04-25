"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { whatWeDo } from "@/app/api/data";


export const WhatWeDo: React.FC = () => {
  const router = useRouter();

  return (
    <section>
      <div className="container">
        <div className="md:pb-12 text-center pb-8" data-aos="fade-up">
          <h2 className="pb-4 md:text-40 text-28 font-bold uppercase text-primary">
            Empowering the{" "}<span className="text-secondary">Visually Impaired</span>
          </h2>
          <p className="text-primary font-normal
            sm:text-19  text-center m-auto">
            We are not just empowering the visually impaired we are empowering the society, the nation and the world
          </p>
        </div>
        <div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4"
          data-aos="fade-up"
        >
          {whatWeDo?.map((item, index) => (
            <div
              key={index}
              className="bg-white h-68 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 px-4 pt-4 cursor-pointer border hover:border-secondary/30"
              data-aos="zoom-in"
              onClick={() => router.push(`/initiatives#${item.slug}`)}
            >
              <div className="relative w-full h-52 mb-3">
                <Image
                  src={`/images${item.image}`}
                  alt={`Image of ${item.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-lg hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="font-semibold h-12 text-primary hover:text-secondary text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="my-8">
        </div>
      </div>
    </section>
  );
};
