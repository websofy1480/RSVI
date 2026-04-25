"use client"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderItem } from '@/types/menu';

export const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const path = usePathname()

  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  const isActive = path === item.href;
  const isActiveSubmenu = item.submenu?.some(
    (subItem) => subItem.href === path
  );

  return (
    <li
      className={`${item.submenu ? "relative" : ""} ${item.label === "Speakers" ? 'xl:block hidden' : "block"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={item.href} className={`text-[16px] !text-primary py-3  flex font-semibold hover:!text-secondary  ${isActive || isActiveSubmenu ? '!text-primaryPink' : '!text-primary'} ${path.startsWith(`/${item.label.toLowerCase()}`) ? '!text-primary' : null}`}>

        {item.label}
        {item.submenu && (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </Link>

      {submenuOpen && (
        <div
          className={`absolute py-2 left-0 mt-0.5 top-9 w-72 bg-white shadow-lg rounded-lg `}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {item.submenu?.map((subItem, index) => (
            <Link
              key={index}
              href={`${subItem.href}`}
              className={`block px-4 py-2 text-[15px]  ${path === subItem.href
                ? "bg-primary text-white"
                : "text-black hover:bg-secondary/10 hover:text-dark"
                }`}
            >
              {subItem.label}
            </Link>


          ))}
        </div>
      )}
    </li>
  );
};

