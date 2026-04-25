"use client";
import { useEffect, useState } from "react";

import Link from "next/link";
import { Logo } from "../Layout/Navbar/Logo";

export const UnderDevelopment = () => {
    const launchDate = new Date("2026-07-01T00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(launchDate - new Date().getTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(launchDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
    const hours = Math.max(0, Math.floor((timeLeft / (1000 * 60 * 60)) % 24));
    const minutes = Math.max(0, Math.floor((timeLeft / (1000 * 60)) % 60));
    const seconds = Math.max(0, Math.floor((timeLeft / 1000) % 60));

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 px-4 text-center">

            {/* Logo */}
            <Logo/>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
                🚧 Page Under Development
            </h1>

            {/* Subtitle */}
            <p className="text-SlateBlueText max-w-xl mb-6">
                We’re working hard to bring this page to life. Stay tuned — something amazing is coming soon!
            </p>

            {/* Countdown */}
            <div className="flex gap-4 mb-8">
                {[{ label: "Days", value: days },
                { label: "Hours", value: hours },
                { label: "Min", value: minutes },
                { label: "Sec", value: seconds }
                ].map((item, i) => (
                    <div key={i} className="bg-white shadow-lg rounded-xl px-4 py-3 w-20">
                        <p className="text-xl font-bold text-primary">{item.value}</p>
                        <p className="text-xs text-gray-500">{item.label}</p>
                    </div>
                ))}
            </div>

            {/* Button */}
            <Link
                href="/"
                className="px-6 py-3 bg-primary text-white rounded-full shadow hover:bg-secondary transition"
            >
                Back to Home
            </Link>

            {/* Footer */}
            <p className="text-xs text-gray-400 mt-6">
                © {new Date().getFullYear()} RSVI. All rights reserved.
            </p>
        </div>
    );
}
