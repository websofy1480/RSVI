"use client";
import { dynamicFont, footer } from "@/app/api/data";
import { useData } from "@/app/context/DataContext";
import Link from "next/link";

export const TopBar: React.FC = () => {
  const { setFontSize } = useData();

  const changeFont = (size: number) => {
    setFontSize(size);
  };

  return (
    <div className="w-full flex fixed top-0 sm:h-10  h-8  bg-formbg text-sm z-50">
      <div className="flex  h-full container items-center justify-between gap-2">
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
                      <div className="h-4 w-px bg-black" />
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
              <Link key={index} href={item.url} target="_blank" className="lg:w-7 lg:h-7 sm:w-6 sm:h-6 flex items-center justify-center bg-white rounded-full shadow hover:bg-secondary hover:text-white hover:animate-pulse transition">
                {item.icon}
              </Link>
            ))
          }
        </div>

        <div className="hidden sm:flex flex-wrap  items-center gap-4 justify-center sm:justify-start">
          {
            dynamicFont?.map((item: any, index: number) => (
              <button key={index} onClick={() => changeFont(item.value)} className="lg:w-7 lg:h-7 sm:w-6 sm:h-6 sm:text-[12px] text-[10px]
                 flex items-center justify-center bg-white rounded-full shadow hover:bg-secondary hover:text-white transition">{item.key}</button>
            ))
          }
        </div>

      </div>
    </div>
  );
};

