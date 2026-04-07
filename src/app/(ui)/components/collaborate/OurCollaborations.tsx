"use client"
import Slider from "react-slick";
import Image from "next/image";
import { PreLoader } from "../Common/PreLoader";
import { CollaborateProps } from "@/types/collaborateContext";

export const OurCollaborations: React.FC<CollaborateProps> = ({ collaborateData }) => {
  const verifiedCollab = collaborateData?.filter(item => item.isVerified);

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-formbg/20">
      <div className="mb-12 text-center"
        data-aos="fade-up">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight uppercase text-primary">
          Our {" "}
          <span className="text-secondary">Collaborations</span>
        </h1>
      </div>

      {
        verifiedCollab.length === 0 ? <PreLoader /> :
          verifiedCollab &&
          <Slider {...settings} className="text-center sm:container">
            {verifiedCollab?.map(collab => (
              <div
                key={collab._id}
                className="py-5 rounded-lg text-center group"
              >
                <div className="w-48 flex flex-col gap-4 items-center justify-center">
                  <Image
                    src={collab.image}
                    alt={`Image of ${collab.name}`}
                    width={64}
                    height={64}
                    quality={100}
                    sizes="100vh"
                    className="!w-40 !h-40 rounded-full object-cover border-2 border-primary/50 "
                  />

                  <h3 className="text-center font-medium text-primary ">
                    {collab.name}
                  </h3>
                  <p className="text-sm p-3 sm:p-0 text-justify font-medium text-SlateBlueText ">
                    {collab.message}
                  </p>

                </div>
              </div>
            ))}

            {verifiedCollab?.map(collab => (
              <div
                key={collab._id}
                className="py-5 rounded-lg text-center group"
              >
                <div className="w-48 flex flex-col gap-4 items-center justify-center">
                  <Image
                    src={collab.image}
                    alt={`Image of ${collab.name}`}
                    width={64}
                    height={64}
                    quality={100}
                    sizes="100vh"
                    className="!w-40 !h-40 rounded-full object-cover border-2 border-primary/50 "
                  />
                  <h3 className="text-center font-medium text-primary ">
                    {collab.name}
                  </h3>
                  <p className="text-sm p-3 sm:p-0 text-justify font-medium text-SlateBlueText ">
                    {collab.message}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
      }
    </section>
  );
};


