"use client";
import { useRouter } from "next/navigation";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Cta: React.FC<{ style?: string, title: string, description: string, buttonText: string, nevigateUrl: string }> = ({ style, title, description, buttonText, nevigateUrl }) => {
    const router = useRouter();

    return (
        <div className="mt-20 bg-ctaBg text-white rounded-3xl p-12 text-center shadow-2xl">
            <p className="text-xl md:text-3xl  font-semibold leading-relaxed">
                {title}
            </p>
            <p className="mt-6 text-lg text-justify sm:text-center opacity-80">
                {description}
            </p>
            <button onClick={() => router.push(`/${nevigateUrl}`)} className="mt-10 sm:px-10 px-4 py-4 bg-navBg  border border-secondary/30 text-primary font-semibold rounded-xl
                    hover:bg-secondary hover:text-navBg transition duration-300 shadow-lg">

                <span className="flex items-center gap-2">{buttonText}
                    <FaLongArrowAltRight size={25} />
                </span>
            </button>
        </div>
    );
};

