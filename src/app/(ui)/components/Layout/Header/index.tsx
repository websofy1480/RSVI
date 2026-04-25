"use client";
import { useEffect, useRef, useState } from "react";
import { useData } from "@/app/context/DataContext";
import { Logo } from "../Navbar/Logo";

export const Header: React.FC = () => {

    const { navbarOpen, setNavbarOpen } = useData();

    const [sticky, setSticky] = useState(false);

    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        setSticky(window.scrollY >= 80);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            mobileMenuRef.current &&
            !mobileMenuRef.current.contains(event.target as Node) &&
            navbarOpen
        ) {
            setNavbarOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navbarOpen]);

    return (
        <>
            <header
                className={`fixed sm:h-16 h-12  mt-2 top-5 sm:top-6 lg:top-8 border border-b-formbg bg-white z-50 w-full  transition-all  ${sticky ? "shadow-lg" : "shadow-none"
                    }`}
            >
                <div className="container">
                    <div className="flex items-center justify-between  sm:py-2 ">
                        <Logo />
                        <div>For Theme</div>
                    </div>
                </div>
            </header>
        </>
    );
};


