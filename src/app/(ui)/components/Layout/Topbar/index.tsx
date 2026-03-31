"use client";
import { dynamicFont, dynamicTheme, footer } from "@/app/api/data";
import { useData } from "@/app/context/DataContext";
import Link from "next/link";

export const TopBar = () => {
  const { fontSize, setFontSize, theme, setTheme } = useData();
  const changeFont = (size: number) => {
    setFontSize(size);
  };

  return (
    <div className="w-full flex fixed top-0 lg:h-12 sm:h-18 md:h-10 bg-formbg text-sm z-50">
      <div className="container flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex flex-wrap  items-center gap-4 justify-center sm:justify-start">
          {
            footer?.contactDetails.slice(1).map((item, index) => (
              <div key={index}>
                {
                  index == 0 ?
                    <div
                      className="flex items-center gap-4"
                    >
                      <div className="flex items-center hover:animate-pulse gap-2">
                        {item.icon}
                        <Link
                          href={item.url}
                          className="hover:text-secondary text-primary font-semibold mb-0"
                        >
                          {item.title}
                        </Link>
                      </div>
                      <div className="h-5 w-px bg-black" />
                    </div>
                    :
                    <div
                      className="flex items-center gap-2 hover:animate-pulse"
                    >
                      {item.icon}
                      <Link
                        href={item.url}
                        className="hover:text-secondary text-primary font-semibold mb-0"
                      >
                        {item.title}
                      </Link>
                    </div>
                }
              </div>
            ))
          }
        </div>
        <div className="hidden sm:flex items-center justify-center sm:justify-end gap-4">
          {
            footer?.socialMedia.map((item, index) => (
              <Link key={index} href={item.url} target="_blank" className="w-7 h-7 flex items-center justify-center bg-white rounded-full shadow hover:bg-secondary hover:text-white hover:animate-pulse transition">
                {item.icon}
              </Link>
            ))
          }
        </div>

        <div className="flex flex-wrap  items-center gap-4 justify-center sm:justify-start">
          {
            dynamicFont?.map((item: any, index: number) => (
              <button key={index} onClick={() => changeFont(item.value)} className="w-7 h-7 text-[12px]
                 flex items-center justify-center bg-white rounded-full shadow hover:bg-secondary hover:text-white transition">{item.key}</button>
            ))
          }
        </div>

      </div>
    </div>
  );
};

