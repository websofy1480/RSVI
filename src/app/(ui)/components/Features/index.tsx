"use client"

import { FaLightbulb } from "react-icons/fa6";
import { CoreFeatures } from "./CoreFeatures";
import { HowWeWork } from "./HowWeWork";

export const Features: React.FC = () => {
  return (
    <section className="pb-0">
      <div className="container">
        <div className="mb-16 text-center"
          data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight uppercase text-primary">
            Our{" "}<span className="text-secondary">Features</span>
          </h1>
          <p className="mt-5 sm:text-19 text-secondary sm:text-center text-justify m-auto">
            Interactive programs designed to empower and educate the visually impaired community
          </p>
        </div>
        <div className="mb-10"><CoreFeatures /></div>
      </div>
      <div className="mb-">
        <HowWeWork />
      </div>
    </section>
  )
}


const step1 = [
  { id: "01", title: "Awareness", color: "#55c0c9" },
  { id: "02", title: "Education", color: "#2fa8d6" },
  { id: "03", title: "Training", color: "#175e86" },
  { id: "04", title: "Empower", color: "#a60d3b" },
  { id: "05", title: "Support", color: "#e64a4a" },
];

export function SemiCircleInfographic() {
  const radius = 300;
  const center = 250;

  return (
    <div className="bg-[#e6f0f2]">
      <div className="mx-auto px-6  flex justify-center">
        <div className="relative w-[500px] h-[500px]">
          {/* SVG Semi Circle */}
          <svg viewBox="0 0 500 300" className="w-full h-full">
            {step1.map((step, index) => {
              const angle = (180 / step1.length) * index;
              const nextAngle = (180 / step1.length) * (index + 1);
              const startX =
                center + radius * Math.cos((Math.PI * (180 - angle)) / 180);
              const startY =
                250 - radius * Math.sin((Math.PI * (180 - angle)) / 180);
              const endX =
                center + radius * Math.cos((Math.PI * (180 - nextAngle)) / 180);
              const endY =
                250 - radius * Math.sin((Math.PI * (180 - nextAngle)) / 180);
              const largeArc = 0;

              const pathData = `
                M ${center} 250
                L ${startX} ${startY}
                A ${radius} ${radius} 0 ${largeArc} 0 ${endX} ${endY}
                Z
              `;

              return (
                <g key={index}>
                  <path d={pathData} fill={step.color} />

                  {/* Text Position */}
                  <text
                    x={(startX + endX) / 2}
                    y={(startY + endY) / 2 + 20}
                    textAnchor="middle"
                    fill="white"
                    fontSize="18"
                    fontWeight="bold"
                  >
                    {step.id}
                  </text>

                  <text
                    x={(startX + endX) / 2}
                    y={(startY + endY) / 2 + 40}
                    textAnchor="middle"
                    // fill="white"
                    fontSize="14"
                    className="text-primary"
                  >
                    {step.title}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Center Bulb */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-white w-28 h-28 rounded-full flex items-center justify-center shadow-xl">
            <FaLightbulb size={50} className="text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
}




const milestones = [
  {
    year: "1990",
    title: "Start",
    color: "#2fa8d6",
    position: "bottom-left",
  },
  {
    year: "2000",
    title: "Growing",
    color: "#e83e8c",
    position: "left",
  },
  {
    year: "2005",
    title: "Scaling",
    color: "#4caf50",
    position: "top",
  },
  {
    year: "2010",
    title: "New Opening",
    color: "#ff7f32",
    position: "right",
  },
  {
    year: "2018",
    title: "Today",
    color: "#1f4fa3",
    position: "bottom-right",
  },
];

export default function CircularMilestones() {

  return (
    <section
      className="bg-gradient-to-br from-slate-200 to-slate-300 py-24"
      data-aos="fade-up"
    >
      <div className="container mx-auto flex justify-center">
        <div
          className="relative w-[650px] h-[650px]"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div
            className="absolute inset-0 rounded-full border-[8px] border-white shadow-inner"
            data-aos="zoom-in"
            data-aos-delay="300"
          ></div>
          <div
            className="absolute inset-[120px] bg-white rounded-full flex items-center justify-center shadow-xl text-center p-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-700">
                Our Impact
              </h2>
              <p className="text-gray-500 mt-2">
                Milestones of Growth & Empowerment
              </p>
            </div>
          </div>
          {milestones.map((item, index) => {
            const positionStyles: Record<string, string> = {
              top: "top-[-30px] left-1/2 -translate-x-1/2",
              left: "left-[-40px] top-1/2 -translate-y-1/2",
              right: "right-[-40px] top-1/2 -translate-y-1/2",
              "bottom-left": "bottom-[18px] left-[120px]",
              "bottom-right": "bottom-[18px] right-[120px]",
            };

            return (
              <div
                key={index}
                className={`absolute ${positionStyles[item.position]}`}
                data-aos="zoom-in-up"
                data-aos-delay={500 + index * 200}
              >
                <div
                  className="py-4 w-20 h-20 rounded-full text-white shadow-lg flex flex-col items-center justify-center"
                  style={{ backgroundColor: item.color }}
                >
                  <p className="text-sm font-medium text-center">
                    {item.year}
                  </p>
                  <p className="text-xs uppercase text-center tracking-wide">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
