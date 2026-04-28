"use client"
import { dynamicFont } from "@/app/api/data";
import { useData } from "@/app/context/DataContext";
import { useEffect, useRef, useState } from "react";
import { IoTextOutline } from "react-icons/io5";

export const FontMode = () => {
  const { setFontSize, fontSize, color } = useData();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const changeFont = (size: number) => {
    setFontSize(size);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="w-8 h-8 flex items-center justify-center rounded-full border border-primary bg-white shadow-sm hover:shadow-md transition">
        <IoTextOutline className={`${color === "dark" ? "text-black" : "text-primary"} text-sm`} />
      </button>

      {open && (
        <div className={`absolute ${fontSize === 16 ? "-right-9":"right-0"}  top-[calc(100%+8px)] z-40 w-24 p-2 bg-white border border-gray-200 rounded-xl shadow-xl flex flex-col gap-1`}>
          <button
            onClick={() => changeFont(16)}
            className={`px-3 py-1 text-sm text-left rounded-md hover:bg-secondary/20 
              ${fontSize === 16 ? "bg-secondary/10 font-medium" : ""}`}
          >
            Default
          </button>
          {dynamicFont?.map((item: any, index: number) => (
            <button
              key={index}
              onClick={() => changeFont(item.value)}
              className={`px-3 py-1 text-sm text-left rounded-md hover:bg-secondary/20 
                ${fontSize === item.value ? "bg-secondary/10 font-medium" : ""}`}
            >
              {item.key}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}