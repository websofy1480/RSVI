import Image from "next/image";
import { Cta } from "../Common/Cta";
import { TbHandFingerRight } from "react-icons/tb";
import { rsviMagnitudeProblem } from "@/app/api/data";

export const AboutUs: React.FC = () => {
    return (
        <section>
            <div>
                <div className="mb-12 text-center container"
                    data-aos="fade-up">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight uppercase text-primary">
                        About Rehabilitation Society{" "}
                        <span className="text-secondary">of the Visually Impaired</span>
                    </h1>

                    <p className="mt-5 sm:text-19 text-secondary sm:text-center text-justify m-auto">
                        <span className="font-semibold text-primary">“Let the blind hold the torch” - </span>
                        empowering lives through structured rehabilitation and support.
                    </p>
                </div>

                <div className="grid mb-10  container md:grid-cols-2 sm:gap-12 gap-5 items-center ">
                    <div data-aos="fade-right">
                        <Image
                            src="/images/hero/rsvi-hero-1.jpg"
                            alt="About Stintwol"
                            width={200}
                            height={300}
                            className="w-full h-full sm:h-[380px] rounded-2xl shadow-md"
                        />
                    </div>
                    <div data-aos="fade-left">
                        <h2 className="text-2xl md:text-[40px] font-bold text-primary mb-4">
                            Who{" "}<span className="text-secondary">We Are</span>
                        </h2>
                        <p className="text-SlateBlueText text-lg leading-relaxed text-justify">
                            RSVI started its journey in the year{" "}
                            <span className="font-semibold">2005 and has successfully completed more than 15 years,{" "}</span>
                            of its successful mission.
                        </p>
                        <p className="text-SlateBlueText mt-4 text-lg leading-relaxed text-justify">
                            RSVI is a{" "}
                            <span className="font-semibold">charitable organization professionally managed by a team of committed social workers having experience of more than 20 years and technical expertise in the field of education, training, research, employment, networking, advocacy and consultancy{" "}</span>services pertaining to the social, psychological and economic rehabilitation of the visually impaired. It aims at achieving perfection to the satisfaction of both the beneficiary and the benefactor.
                        </p>

                    </div>
                </div>

                <div className="mb-10 container">
                    <p className="text-SlateBlueText text-lg leading-relaxed text-justify">
                        We at{" "}
                        <span className="font-semibold">RSVI (Rehabilitation Society of The Visually Impaired){" "}</span>have joined hands together to help you if for any reason or by birth you are affected by one or the other problem of eyesight. You may have lost your eyesight completely or in the process of losing the same, you can always count on us for all kinds of problems that you face due to the partial or total loss of eyesight.
                    </p>
                    <p className="text-SlateBlueText  text-lg mt-4 leading-relaxed text-justify">
                        In fact, we also extend our services to people with other types of{" "}
                        <span className="font-semibold">physical and mental disabilities, including hearing impairment, dyslexia, muscular dystrophy or even people suffering from more than one disability.{" "}</span>
                        Our services are designed to serve persons of all ages and sexes. We also help parents and siblings of persons with disabilities and teach them how to overcome the mental trauma they undergo because of having a person with a disability in their family.
                    </p>
                    <p className="text-SlateBlueText text-lg mt-4 leading-relaxed text-justify">
                        Our efforts are directed towards creating an inclusive and barrier-free environment,{" "}
                        <span className="font-semibold">we build a common platform for uncommon people.{" "}</span>
                        We provide{" "}
                        <span className="font-semibold">educational facilities, emotional strength, psychological counseling, social integration, Economic Rehabilitation{" "}</span>
                        and all that is needed for a person suffering from a disability to be a respectable member of society. From giving advice to providing emotional dock and assisting you to choose the appropriate technology for your educational needs or for your workplace, we are at your beck and call.
                    </p>
                    <p className="text-primary text-lg mt-4 leading-relaxed text-justify">
                        <span className="font-semibold">RSVI{" "}</span>
                        <span className="font-semibold text-secondary">- Rehabilitation Society of the Visually Impaired</span>
                    </p>
                </div>
                <div className="mb-10 container">
                    <h2
                        className="text-2xl md:text-[40px] text-center font-bold uppercase text-primary"
                        data-aos="fade-up"
                    >Why We{" "}
                        <span className="text-secondary">Started RSVI</span>
                    </h2>

                    <p className="text-SlateBlueText text-lg my-4 leading-relaxed text-justify">
                        It is important to mention here that there is a dearth of reading material and information in accessible formats (Audio, Braille, E-Text) for the visually impaired resulting in creating an insurmountable problem for the students and other professionals requiring constant updating of their knowledge. It is estimated that less than 0.5% of books printed in India are converted into audio and Braille formats, let alone international publications. As a matter of fact, rehabilitation services are available to less than 5% of people suffering from blindness and low vision.
                    </p>
                    <p className="text-SlateBlueText text-lg mb-4 leading-relaxed font-semibold text-justify">
                        The magnitude of the problem may be assessed from the following :
                    </p>
                    <div className="gap-8 items-stretch">
                        <div className="flex flex-col space-y-2 text-SlateBlueText">
                            {rsviMagnitudeProblem?.map((point, index) => (
                                <div key={index} className="flex gap-2 items-center"
                                    data-aos="fade-up" data-aos-delay={index * 80}
                                >
                                    <TbHandFingerRight
                                        size={20}
                                        className={`${index % 2 === 0 ? "text-error" : "text-success"}`}
                                    />
                                    <p className="text-lg">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative mb-10 sm:h-screen h-96 flex items-center justify-center text-white overflow-hidden">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover">
                        <source src="/videos/ngo-video.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-black/60" />
                    <div className="relative z-10 text-center px-6">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Lighting the Path to Independence
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-200">
                            Empowering the visually impaired to live with dignity,
                            confidence and opportunity.
                        </p>
                    </div>
                </div>

                <div className="mb-10 container">
                    <p className="text-SlateBlueText my-4 text-lg leading-relaxed text-justify">
                        Besides there are other issues to be addressed, such as availability of Aids & Appliances (Assistive Devices) for the blind students and professionals, availability of assistive technology, information & communication technology, community services, awareness, advocacy services, skill development & Vocational Training, Psychological and Social Adjustments, Availability of Sports & Entertainment Facilities, Training in Daily Living Skills, resource crunch etc.
                    </p>
                    <p className="text-SlateBlueText mb-4 text-lg leading-relaxed text-justify">
                        As a matter of fact, the disability sector in the state of Uttar Pradesh requires more attention from the government and the people than in many other States and Union Territories of Our Country. The picture appears to be quite bleak. Hence, RSVI is a ray of hope for the above-mentioned challenges with respect to Visual Impairment.
                    </p>
                    <CircleFeatures />
                </div>
            </div>
            <div className="container">
                <Cta style="container" title="Affiliations & Collaborations" description="Collaborations with RSVI are a very easy process. We extend collaboration 
          to all the organizations that complement our cause and help uplift the lives of the visually impaired. Major highlights include Uber India, 
          Enactus, NSS Society of various colleges, Yoga Sessions, and Mental Wellness professionals." buttonText="Become a Partner" nevigateUrl="collaborate" />
            </div>
        </section>
    );
};



const features = [
    {
        image: "/images/hero/rsvi-hero-1.jpg",
        subtitle: "3rd Eye Exibition in Lucknow, Chief Guest Ms. Jaya Prada",
    },
    {
        image: "/images/hero/rsvi-hero-2.jpg",
        subtitle: "Inclusive Education Awareness by RSVI",
    },
    {
        image: "/images/hero/rsvi-hero-1.jpg",
        subtitle: "RSVI and It's students in annual marathon in Lucknow",
    },
    {
        image: "/images/hero/rsvi-hero-2.jpg",
        title: "Founder",
        subtitle: "Dr. Rakesh Jain",
    },
    {
        image: "/images/hero/rsvi-hero-1.jpg",
        title: "CEO",
        subtitle: "Ms. Shraddha Srivastava",
    },
    {
        image: "/images/hero/rsvi-hero-1.jpg",
        title: "Roots",
        subtitle: "Ms. Satakshi Gupta",
    },
];

export default function CircleFeatures() {
    return (
        <div >
            <div className="">
                <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-8 justify-items-center">

                    {features.map((item, index) => {
                        return (
                            <div key={index} className="relative w-64 h-64 group">

                                {/* SVG Rings */}
                                <svg
                                    viewBox="0 0 200 200"
                                    className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:rotate-180"
                                >

                                    {/* Dotted Circle */}
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r="85"
                                        fill="none"
                                        stroke="#d4a94f"
                                        strokeWidth="2"
                                        strokeDasharray="2 8"
                                    />

                                    {/* Golden Arc */}
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r="85"
                                        fill="none"
                                        stroke="#e0b04b"
                                        strokeWidth="8"
                                        strokeDasharray="160 400"
                                        strokeLinecap="round"
                                        transform="rotate(-40 100 100)"
                                    />
                                </svg>


                                {/* Inner Circular Image */}
                                <div className="absolute inset-6  rounded-full overflow-hidden shadow-xl group">
                                    {/* Background Image */}
                                    <Image
                                        src={item.image}
                                        alt={`Image of ${item.subtitle}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 250px"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Dark Overlay (Hidden Initially) */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500" />
                                    {/* Text (Hidden Initially) */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white
                  opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                                        {
                                            item.title && <h3 className="text-sm md:text-base font-semibold leading-snug">
                                                {item.title}
                                            </h3>
                                        }
                                        <p className="text-xs md:text-sm mt-2">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>

            </div>
        </div>
    );
}


