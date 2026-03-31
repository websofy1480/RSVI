import { CiGlobe } from "react-icons/ci";
import { FaHome, FaLongArrowAltRight, FaPhoneAlt, FaRegUser } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "Identify Needs",
    description:
      "Understanding challenges faced by visually impaired individuals in our community.",
    icon: <FaHome size={22} />,
    color: "border-error",
    badge: "bg-error",
  },
  {
    number: "02",
    title: "Program Design",
    description:
      "Creating structured programs focused on empowerment and inclusion.",
    icon: <FiSend size={22} />,
    color: "border-success",
    badge: "bg-success",
  },
  {
    number: "03",
    title: "Digital Training",
    description:
      "Providing assistive technology and digital skill development training.",
    icon: <CiGlobe size={22} />,
    color: "border-burntOrange",
    badge: "bg-burntOrange",
  },
  {
    number: "04",
    title: "Support & Mentorship",
    description:
      "Continuous guidance and mentorship for sustainable growth.",
    icon: <FaPhoneAlt size={18} />,
    color: "border-goldenOrange",
    badge: "bg-goldenOrange",
  },
  {
    number: "05",
    title: "Community Impact",
    description:
      "Building inclusive communities with long-term measurable impact.",
    icon: <FaRegUser size={22} />,
    color: "border-primaryPink",
    badge: "bg-primaryPink",
  },
];

export const CoreFeatures = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 relative">
      {steps.map((step, index) => (
        <div
          key={index}
          className="relative w-64"
          data-aos="fade-up"
          data-aos-delay={index * 150}
        >
          <div
            className={`relative pt-16 pb-10 px-6 bg-white rounded-3xl border-2 ${step.color} shadow-md text-center`}
          >
            <div
              className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center text-white font-bold text-lg rounded-full ${step.badge}`}
            >
              {step.number}
            </div>

            <h3 className="font-semibold text-primary text-lg mt-4 mb-3">
              {step.title}
            </h3>

            <p className="text-sm text-SlateBlueText mb-6 text-justify">
              {step.description}
            </p>

            <div className="flex justify-center text-secondary">
              {step.icon}
            </div>
          </div>
          {index !== steps.length - 1 && (
            <div
              className="hidden lg:block absolute top-1/2 -right-8 text-2xl text-primary"
              data-aos="fade-right"
              data-aos-delay={index * 150 + 200}
            >
              <FaLongArrowAltRight />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}