"use client";
import { dynamicFont, dynamicTheme, footer } from "@/app/api/data";
import { useData } from "@/app/context/DataContext";
import Link from "next/link";
import { Logo } from "../Navbar/Logo";

export const TopBar: React.FC = () => {
  const { setFontSize, fontSize, changeColor } = useData();
  const changeFont = (size: number) => {
    setFontSize(size);
  };


  return (
    <div className="w-full flex fixed top-0 sm:h-20 h-8 bg-formbg  text-sm z-50">
      <div className="flex  h-full container items-center sm:justify-between justify-center gap-2">
        <div className="sm:block hidden">
          <Logo />
        </div>

        <div className="flex gap-4 justify-center">
          <div className="flex flex-wrap  items-center gap-4  justify-center  sm:justify-start">
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
                        <div className="h-4 w-px bg-varLine" />
                      </div>
                      :
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
                        <div className="h-4 w-px bg-varLine sm:block hidden" />
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
        </div>

        <div className="hidden sm:flex flex-wrap  items-center gap-2 justify-center sm:justify-start">
          <div className="flex gap-1">

   

            {
              dynamicTheme?.map((item, index) => (
                <button key={index} onClick={() => changeColor(`${item.value}`)} style={{ backgroundColor: item.color }} className={`w-5 h-5 rounded-full`} />
              ))
            }
          </div>



          <div className="h-8 w-px bg-varLine"/>

          <div>

            {
              <select
                onChange={(e) => changeFont(Number(e.target.value))}
                className="px-2 py-2 rounded-lg border border-primary bg-white shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-secondary w-28 cursor-pointer"
              >
                <option value={16}>{fontSize === 18 || fontSize === 20 || fontSize === 22 || fontSize === 24 || fontSize === 26 ? "Default size" : "Text size"}</option>
                {dynamicFont?.map((item: any, index: number) => (
                  <option key={index} value={item.value}>
                    {item.key}
                  </option>
                ))}
              </select>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

