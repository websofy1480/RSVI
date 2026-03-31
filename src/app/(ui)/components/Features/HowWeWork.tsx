import { CiCloud, CiGlobe } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";

const steps = [
    {
        id: 1,
        color: "#f4b400",
        title: "Research",
        desc: "Understanding real-world challenges faced by beneficiaries.",
        icon: <CiGlobe size={18} />,
    },
    {
        id: 2,
        color: "#429b5e",
        title: "Planning",
        desc: "Designing inclusive programs and strategic implementation.",
        icon: <FiMapPin size={18} />,
    },
    {
        id: 3,
        color: "#c02c68",
        title: "Execution",
        desc: "Delivering structured training and empowerment workshops.",
        icon: <IoShareSocialOutline size={18} />,
    },
    {
        id: 4,
        color: "#ef914e",
        title: "Sustainability",
        desc: "Ensuring long-term impact and community development.",
        icon: <CiCloud size={18} />,
    },
];

export const HowWeWork = () => {

    return (
        <section className="bg-formbg/20 py-16">
            <div
                className="md:pb-12 text-center pb-8"
                data-aos="fade-down"
            >
                <h2 className="text-4xl font-bold uppercase text-center text-primary">
                    Step By Step{" "}
                    <span className="text-secondary">Impact Process</span>
                </h2>
            </div>

            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-20">
                <div
                    className="relative w-[350px] h-[350px]"
                    data-aos="zoom-in"
                >
                    <div className="absolute inset-0 rounded-full border-[18px] border-formbg/80"></div>
                    <svg
                        viewBox="0 0 200 200"
                        className="absolute inset-0 w-full h-full rotate-[-90deg]"
                    >
                        {steps.map((step, index) => {
                            const radius = 85;
                            const circumference = 2 * Math.PI * radius;
                            const segment = circumference / steps.length;
                            return (
                                <circle
                                    key={index}
                                    cx="100"
                                    cy="100"
                                    r={radius}
                                    fill="transparent"
                                    stroke={step.color}
                                    strokeWidth="18"
                                    strokeDasharray={`${segment} ${circumference}`}
                                    strokeDashoffset={-segment * index}
                                />
                            );
                        })}
                    </svg>
                    <div className="absolute inset-10 bg-white rounded-full flex items-center justify-center text-center shadow-inner">
                        <div>
                            <p className="text-md text-primary uppercase">
                                Step by Step
                            </p>
                            <h3 className="font-semibold text-lg text-secondary">
                                Impact Process
                            </h3>
                        </div>
                    </div>
                    {steps.map((step, index) => {
                        const angle = (360 / steps.length) * index;
                        const radius = 140;
                        const x =
                            175 + radius * Math.cos(((angle - 90) * Math.PI) / 180);
                        const y =
                            175 + radius * Math.sin(((angle - 90) * Math.PI) / 180);

                        return (
                            <div
                                key={index}
                                className="absolute w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold shadow-md"
                                style={{
                                    backgroundColor: step.color,
                                    left: x - 20,
                                    top: y - 20,
                                }}
                                data-aos="zoom-in"
                                data-aos-delay={index * 150}
                            >
                                {step.id}
                            </div>
                        );
                    })}
                </div>
                <div className="space-y-10 max-w-md">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className="relative bg-white p-6 rounded-2xl shadow-lg border-l-8"
                            style={{ borderColor: step.color }}
                            data-aos="fade-left"
                            data-aos-delay={index * 200}
                        >
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="font-semibold text-lg text-primary">
                                    {step.title}
                                </h4>

                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                                    style={{ backgroundColor: step.color }}
                                >
                                    {step.icon}
                                </div>
                            </div>

                            <p className="text-sm text-SlateBlueText">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}