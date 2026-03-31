"use client";
import { useEffect, useState } from "react";

export const ScrollToTop = () =>{
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`dp_backto_top fixed z-10 md:bottom-[6%] bottom-[4%]  md:right-[3%] right-[8%] p-5 cursor-pointer ${isVisible ? "visible" : "hidden"
        }`}
      onClick={scrollToTop}
      aria-hidden={!isVisible}
    >
      <div className="before:content-[''] before:absolute before:w-10 before:h-10 before:bg-[url('/images/footer/arrow.png')] before:bg-no-repeat before:bg-cover"></div>
    </div>
  );
}