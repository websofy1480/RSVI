"use client"
import { dynamicTheme } from "@/app/api/data";
import { useData } from "@/app/context/DataContext";
import React, { useEffect, useRef, useState } from "react";
import { IoColorPaletteOutline } from "react-icons/io5";

export const ThemeMode: React.FC = () => {
  const { changeColor, color } = useData();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
        className={`sm:w-8 sm:h-8 w-6 h-6 flex items-center justify-center rounded-full border ${color === "dark" ? "border-black" : "border-primary"}  bg-white shadow-sm hover:shadow-md transition`}
      >
        <IoColorPaletteOutline className={` ${color === "dark" ? "text-black" : "text-primary"} text-sm`} />
      </button>
      {open && (
        <div className="absolute sm:-right-20 -right-16 top-full mt-1 flex flex-co w-auto gap-1 p-2  items-center bg-white border border-primary rounded-xl shadow-xl  z-50 animate-fadeIn">
          {dynamicTheme?.map((item: any, index: number) => (
            <button
              key={index}
              onClick={() => {
                changeColor(item.value);
                setOpen(false);
              }}
              className="sm:w-6 sm:h-6 w-5 h-5 rounded-full border border-gray-200 hover:scale-110 transition-transform"
              style={{ backgroundColor: item.color }}
            />
          ))}
        </div>
      )}
    </div>
  )
}