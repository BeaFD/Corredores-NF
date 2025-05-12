"use client";
import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const logo = document.getElementById("header-logo");
      const parallaxImage = document.getElementById("parallax-image");

      if (window.scrollY > 50) {
        header?.classList.add("scrolled");
        logo?.classList.remove("hidden");
        logo?.classList.add("opacity-100");
      } else {
        header?.classList.remove("scrolled");
        logo?.classList.add("hidden");
        logo?.classList.remove("opacity-100");
      }

      if (parallaxImage) {
        const scrollPosition = window.scrollY;
        parallaxImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}