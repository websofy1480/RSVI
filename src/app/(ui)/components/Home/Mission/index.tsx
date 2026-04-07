"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Mission: React.FC = () => {
    const router = useRouter();
    return (
        <section>
            <div className="container">
                <div className="md:pb-12 text-center pb-8" data-aos="fade-up">
                    <h2 className="md:text-40 text-28 font-bold uppercase text-primary">
                        Our{" "}<span className="text-secondary">Mission</span>
                    </h2>
                </div>
                <div className="bg-formbg/20 shadow-lg border border-secondary/20 text-lg rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6 text-SlateBlueText leading-relaxed text-justify" data-aos="fade-up">
                    <p>
                        At RSVI, our mission is to empower visually impaired individuals
                        through comprehensive educational, social, economic, and
                        psychological rehabilitation. We strive to equip them with the
                        confidence, skills, and independence needed not only to lead
                        fulfilling lives but also to contribute meaningfully to society.
                    </p>
                    <p>
                        We are committed to eliminating barriers to accessible reading
                        materials by ensuring the availability of high-quality content in
                        formats designed specifically for the visually challenged.
                    </p>
                    <p>
                        RSVI’s ultimate goal goes beyond independence — we aim to nurture
                        empowered individuals who, after transforming their own lives,
                        dedicate themselves to uplifting and supporting others.
                    </p>
                </div>
            </div>

            <div className="w-full py-14 container">
                <div className="max-w-7xl space-y-14">
                    <HighlightBlock
                        title="Success Stories"
                        description="RSVI has given many beautiful gems whose success stories are inspiring. They have proved that a dream doesn’t need vision — it needs determination and passion."
                        borderColor="#dc2626"
                        images={["/images/hero/rsvi-hero-1.jpg", "/images/hero/rsvi-hero-1.jpg"]}
                        link="/success-story"
                    />

                    <HighlightBlock
                        title="Media Coverage"
                        description="RSVI has been featured in newspapers, news channels, and social platforms. Its impactful initiatives continue to inspire communities."
                        borderColor="#429b5e"
                        images={["/images/hero/rsvi-hero-1.jpg", "/images/hero/rsvi-hero-1.jpg"]}
                        reverse
                    />
                </div>
            </div>
            <div className="w-full container">
                <div className="max-w-7xl space-y-14">
                    <InfoCapsule
                        title="RVSI INFO-CAPSULE"
                        description="RSVI aims to establish its presence and awareness through digital platforms, launched RSVI Info Capsule, which is an audio initiative to spread learning and development through digital platforms like WhatsApp where Visually Impaired across the globe are connected."
                        image="/images/hero/rsvi-hero-1.jpg"
                    />

                    <InfoCapsule
                        title="Collaborations at RSVI"
                        description="RSVI has been successful in humungous collaborations till date for its visibility and reach. Majorly being Rehabilitation Council Of India (RCI) New Delhi , NIVH for the distribution of Aids & Appliances, Agency of advocacy cell in Uttar Pradesh being run by All India Confederation of the Blind (AICB).Besides receiving support and technical expertise from a number of Organizations, RSVI joins hands with SAKSHAM New Delhi, NAB (Along with its various States and district branches), Arushi Bhopal, Score Foundation New Delhi and very recently collaborated with Uber India."
                        image="/images/hero/rsvi-hero-1.jpg"
                        reverse
                    />
                </div>
            </div>
        </section>
    );
};


interface HighlightBlockProps {
    title: string;
    description: string;
    borderColor: string;
    images: string[];
    reverse?: boolean;
    link?: string;
}

const HighlightBlock: React.FC<HighlightBlockProps> = ({
    title,
    description,
    borderColor,
    images,
    reverse = false,
    link,
}) => {
    return (
        <div
            data-aos={reverse ? "fade-left" : "fade-right"}
            className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-center ${reverse ? "lg:grid-flow-dense" : ""
                }`}>
            <div
                data-aos="zoom-in"
                className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${reverse ? "lg:col-start-2 lg:col-span-2" : "lg:col-span-2"
                    }`}
            >
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="relative h-64 w-full rounded-xl overflow-hidden shadow-md"
                    >
                        <Image
                            src={img}
                            alt={title}
                            fill
                            className="hover:scale-105 transition duration-300"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                ))}
            </div>

            {/* Text Content */}
            <div
                data-aos="fade-up"
                className="relative bg-formbg/20  p-6 sm:h-64 h-68 rounded-xl shadow-md">
                <div className="absolute left-0 top-0 h-full w-2 rounded-l-xl" style={{ backgroundColor: borderColor }} />

                <h3 className="text-2xl font-semibold text-primary sm:text-3xl mb-4">
                    {title}
                </h3>
                <p className="text-SlateBlueText text-justify text-lg">
                    {description}
                </p>

                {link && (
                    <Link
                        href={link}
                        className="block text-right bg-slate- text-learning hover:underline">
                        Know More
                    </Link>
                )}
            </div>
        </div>
    );
};


interface InfoCapsuleProps {
    title: string;
    description: string;
    image: string;
    comingSoon?: boolean;
    reverse?: boolean;
}

const InfoCapsule: React.FC<InfoCapsuleProps> = ({
    title,
    description,
    image,
    comingSoon = true,
    reverse = false,
}) => {


    return (

        <section className="bg-formbg/20 shadow-lg border border-secondary/20 text-lg rounded-2xl p-6 sm:p-8 lg:p-10 ">
            <div
                className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 ${reverse ? "lg:flex-row-reverse" : ""
                    }`}
            >
                {/* Image */}
                <div
                    data-aos={reverse ? "fade-left" : "fade-right"}
                    className={`${reverse ? "lg:order-2" : ""} flex justify-center`}>
                    <Image
                        src={image}
                        alt={title}
                        width={500}
                        height={500}
                        className="rounded-xl hover:scale-105 transition duration-300"
                    />
                </div>
                <div
                    data-aos={reverse ? "fade-right" : "fade-left"}
                    className={`${reverse ? "lg:order-1" : ""}`}
                >
                    <h3 className="text-2xl font-semibold text-primary sm:text-3xl mb-4">
                        {title}
                    </h3>
                    <p className="text-SlateBlueText text-justify text-lg">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
};
