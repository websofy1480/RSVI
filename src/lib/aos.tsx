"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";

export const Aoscompo = () => {
  useEffect(() => {
    import("aos").then(AOS => {
      AOS.init({ once: true });
    });
  }, []);


  return null;
}
