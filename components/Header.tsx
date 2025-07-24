"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const targetId = href.split("#")[1];

    if (pathname === "/") {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push('/#' + targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 transition-all duration-500 z-50 backdrop-blur-md
        ${scrolled 
          ? "bg-[#DBEAFE]/95 text-gray-700 shadow-lg border-b border-[#BFDBFE]/50" 
          : "bg-white/10 text-black border-b border-white/20"
        }
      `}
    >
      <div className="flex items-center">
        <div className={`flex items-center gap-3 transition-colors duration-300`}>
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
            scrolled ? "bg-[#93C5FD] text-[#1E3A8A]" : "bg-white/20 text-black"
          }`}>
            CN
          </div>
          <h1 className={`text-xl font-bold transition-colors duration-300 ${
            scrolled ? "text-[#1E40AF]" : "text-black"
          }`}>
            Corredores NF
          </h1>
        </div>
      </div>
      <nav className="flex gap-8">
        {[
          { name: "Inicio", href: "/#inicio" },
          { name: "Nosotros", href: "/#nosotros" },
          { name: "Personas", href: "/#personas" },
          { name: "Empresas", href: "/#empresas" },
          { name: "Preguntas", href: "/#preguntas" },
          { name: "Contacto", href: "/#contacto" },
        ].map((link, index) => (
          <Link
            key={index}
            href={link.href}
            scroll={false}
            onClick={(e) => handleScroll(e, link.href)}
            className={`
              text-sm font-medium transition-all duration-300 hover:scale-105 relative group py-2
              ${scrolled
                ? "text-[#374151] hover:text-[#1E40AF]"
                : "text-gray-800 hover:text-black"}
            `}
          >
            {link.name}
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${scrolled ? "bg-[#1E40AF]" : "bg-black"} transition-all duration-300 group-hover:w-full`} />
          </Link>
        ))}
      </nav>
    </header>
  );
}