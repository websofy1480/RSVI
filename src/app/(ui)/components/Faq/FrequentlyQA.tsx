"use client";
import { FC, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import PreLoader from "../Common/PreLoader";
import { FaqProps } from "@/types/faqContext";

export const FAQSection: FC<FaqProps> = ({ faqData }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-formbg/20 relative">
            {
                faqData?.length === 0 ? <PreLoader /> :
                    faqData && <div className="mx-auto relative">

                        <div className="absolute left-4 md:left-1/2 top-0 w-1 h-full bg-formbg -translate-x-1/2 hidden md:block"></div>
                        <div className="space-y-12 container">
                            {faqData?.map((item, index) => (
                                <div key={item._id} className="relative">
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                                        <div className="w-6 h-6 bg-success rounded-full border-4 border-white shadow-md"></div>
                                    </div>
                                    <div className="bg-white rounded-xl shadow-lg p-6   mx-auto transition-all duration-300">
                                        <button
                                            onMouseEnter={() => toggle(index)}
                                            onMouseLeave={() => toggle(index)}
                                            className="w-full flex justify-between items-center text-left"
                                        >
                                            <h3 className="text-lg font-semibold text-primary">
                                                {item.question}
                                            </h3>
                                            <span className="text-black">
                                                {openIndex === index ? <FaMinus /> : <FaPlus />}
                                            </span>
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-500 ${openIndex === index ? "max-h-96 mt-4" : "max-h-0"
                                                }`}
                                        >
                                            <ul className="list-disc pl-5 text-SlateBlueText space-y-2">
                                                {item.answer.map((ans: string, i: number) => (
                                                    <li key={i}>{ans}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>}
        </section>
    );
}
