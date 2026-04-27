"use client";
import { useState } from "react";
import { PreLoader } from "../../Common/PreLoader";
import { Pagination } from "@/app/admin/components/common/Pagination";
import { DeviceCard } from "./DeviceCard";
import { DeviceCategoryFilter } from "./DeviceCategoryFilter";
import { DeviceProcess } from "./DeviceProcess";

export const devices = [
    {
        id: 1,
        title: "Smart Cane",
        category: "Mobility",
        description: "Helps detect obstacles using sensors.",
        image: "/images/trending-courses/training-about-us.jpg",
    },
    {
        id: 2,
        title: "Screen Reader Software",
        category: "Digital",
        description: "Converts text into speech for accessibility.",
        image: "/images/trending-courses/training-about-us.jpg",
    },
    {
        id: 3,
        title: "Braille Kit",
        category: "Learning",
        description: "Basic Braille learning tools.",
        image: "/images/trending-courses/training-about-us.jpg",
    },
    {
        id: 4,
        title: "Talking Watch",
        category: "Daily",
        description: "Audio time announcements.",
        image: "/images/trending-courses/training-about-us.jpg",
    },
];

export const StoreHouseofAssistiveDevices = () => {

    const [selected, setSelected] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const recordsPerPage = 6;

    const filteredDevices = devices?.filter(device => {
        const selectedDevices = selected === "All" || device.category === selected;
        return selectedDevices;
    });

    const totalPages = Math.ceil(filteredDevices.length / recordsPerPage);
    const currentData = filteredDevices.slice(
        (currentPage - 1) * recordsPerPage,
        currentPage * recordsPerPage
    );

    return (
        <section className='pt-14 pb-0'>
            <div className="container">
                <div className="text-center mb-4 sm:mb-11"
                    data-aos="fade-up">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight uppercase text-primary">
                        Assistive{" "}
                        <span className="text-secondary">Devices</span>
                    </h1>
                    <p className="mt-5 sm:text-19 text-secondary sm:text-center text-justify m-auto">
                        Explore tools designed to improve independence and accessibility
                    </p>
                </div>
                
                <div className={`${totalPages > 1 ? "my-0" : "mb-20"}`}>
                    <DeviceCategoryFilter selected={selected} setSelected={setSelected} />
                    {
                        currentData?.length === 0 ? <PreLoader /> :
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {currentData.map((device, index) => (
                                    <DeviceCard key={device.id} device={device} index={index} />
                                ))}
                            </div>
                    }
                </div>
                {
                    totalPages > 1 &&
                    <div className={`${totalPages > 1 ? "my-12" : "mt-0"}`}>
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                    </div>
                }
            </div>
            <DeviceProcess />
        </section>
    )
}







