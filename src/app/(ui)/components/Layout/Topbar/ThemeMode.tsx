import { dynamicTheme } from "@/app/api/data";
import { useData } from "@/app/context/DataContext";
import React from "react";

export const ThemeMode: React.FC<{ isMobile?: boolean }> = ({ isMobile }) => {
  const { changeColor, color } = useData();
  return (
    <>
      {
        isMobile ?
          <div>
            {
              <select
                onChange={(e) => changeColor(e.target.value)}
                className="px-2 capitalize py-1 rounded-lg border border-primary bg-white shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-secondary w-20 cursor-pointer"
              >
                <option value={16}>Theme</option>
                {dynamicTheme?.map((item: any, index: number) => (
                  <option key={index} className="capitalize" value={item.value}>
                    {item.value}
                  </option>
                ))}
              </select>
            }
          </div>
          :
          <div className="flex gap-1">
            {
              dynamicTheme?.map((item, index) => (
                <button key={index} onClick={() => changeColor(`${item.value}`)} style={{ backgroundColor: item.color }} className={`sm:w-5 sm:h-5 w-3 h-3  rounded-full`} />
              ))
            }
          </div>
      }
    </>

  )
}