"use client";
import Slider from "react-slick";
import Image from "next/image";

export const Hero = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    pauseOnHover: false,
  };

  const carouselImages = [
    "/images/hero/rsvi-hero-1.jpg",
    "/images/hero/rsvi-hero-2.jpg",
  ];

  return (
    <section className="relative text-white overflow-hidden mt-8 sm:mt-4 lg:mt-[3em]">
      <div className="relative h-[12vh] sm:h-[65vh] md:h-[22vh] lg:h-[73vh] w-full -z-10">
        <Slider {...settings} className="h-full">
          {carouselImages.map((src, index) => (
            <div
              key={index}
              className="relative h-[18vh] sm:h-[65vh] md:h-[37vh] lg:h-[87vh] w-full"            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                sizes="100vw"
                priority={index === 0}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

