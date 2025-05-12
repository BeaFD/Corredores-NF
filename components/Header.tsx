"use client";
import Image from "next/image";
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

    if (href === "/blog") {
      router.push(href);
      return;
    }

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
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 transition-all duration-300 z-50
        ${scrolled ? "bg-white text-gray-800 shadow" : "bg-transparent text-gray-300"}
      `}
    >
      <Image
        src="/next.svg"
        alt="Logo"
        width={40}
        height={40}
        className="hidden opacity-0 transition-opacity duration-300"
        id="header-logo"
        style={{ filter: "invert(0)" }}
      />
      <nav className="ml-auto flex gap-6">
        {[
          { name: "Inicio", href: "/#inicio" },
          { name: "Nosotros", href: "/#nosotros" },
          { name: "Personas", href: "/#personas" },
          { name: "Empresas", href: "/#empresas" },
          { name: "Preguntas", href: "/#preguntas" },
          { name: "Contacto", href: "/#contacto" },
          { name: "Blog", href: "/blog" },
        ].map((link, index) => (
          <Link
            key={index}
            href={link.href}
            scroll={false}
            onClick={(e) => handleScroll(e, link.href)}
            className={`
              transition-colors
              ${scrolled
                ? "text-gray-500 hover:text-black focus:text-gray-700"
                : "text-gray-300 hover:text-white focus:text-white"}
            `}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}