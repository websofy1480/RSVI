"use client";
import { ToastProps } from "@/types/toastProps";
import { useEffect } from "react";

const Toast = ({ message, type = "success", onClose }: ToastProps) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div
                className={`px-5 py-3 rounded-lg shadow-lg text-white text-sm font-medium ${type === "success" ? "bg-success" : "bg-error"}`}
            >
                {message}
            </div>
        </div>

    );
};

export default Toast;
