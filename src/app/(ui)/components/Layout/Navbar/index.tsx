"use client";
import { useEffect, useRef, useState } from "react";
import { headerData } from "./Navigation/menuData";
import { HeaderLink } from "./Navigation/HeaderLink";
import { MobileHeaderLink } from "./Navigation/MobileHeaderLink";
import { IoMdMenu } from "react-icons/io";
import { useData } from "@/app/context/DataContext";
import { Logo } from "./Logo";

export const Navbar: React.FC = () => {

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
        className={`fixed h-12 mt-2 top-5 sm:top-6 lg:top-[4.5em] bg-navBg  z-50 w-full  transition-all  ${sticky ? "shadow-lg" : "shadow-none"
          }`}
      > 
        <div className="container">
          <div className="flex items-center justify-between ">
            <div className="sm:hidden block"><Logo/></div>
          
            <ul className="hidden lg:flex flex-grow items-center justify-end space-x-6">
              {headerData.map((item, index) => (
                <HeaderLink key={index} item={item} />
              ))}
            </ul>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="block lg:hidden p-2 rounded-lg"
                aria-label="Toggle mobile menu">
                <IoMdMenu size={30} className="text-secondary" />
              </button>
            </div>
          </div>
        </div>
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" />
        )}

        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-64 ${navbarOpen ? "translate-x-0" : "translate-x-full"
            } z-50`}
        >
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-bold text-black">
              Menu
            </h2>
            <button
              onClick={() => setNavbarOpen(false)}
              aria-label="Close mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-start p-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};


