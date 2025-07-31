"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

    // Close mobile menu when navigating
    setMobileMenuOpen(false);

    if (pathname === "/") {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push('/#' + targetId);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 transition-all duration-500 z-50 backdrop-blur-md
        ${scrolled 
          ? "bg-gray-900/95 text-gray-100 shadow-lg border-b border-gray-700/50" 
          : "bg-white/95 text-gray-900 border-b border-gray-200/50"
        }
      `}
    >
      <div className="flex items-center">
        <div className={`flex items-center gap-3 transition-colors duration-300`}>
          <img 
            src="/logo.png" 
            alt="NF Corredores Logo" 
            className="w-10 h-10 object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                const fallback = document.createElement('div');
                fallback.className = 'w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm bg-red-600 text-white';
                fallback.innerHTML = 'NF';
                parent.insertBefore(fallback, target);
              }
            }}
          />
          <h1 className={`text-xl font-bold transition-colors duration-300 ${
            scrolled ? "text-gray-100" : "text-gray-900"
          }`}>
            NF Corredores
          </h1>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-8">
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
                ? "text-gray-300 hover:text-red-400"
                : "text-gray-700 hover:text-red-600"}
            `}
          >
            {link.name}
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${scrolled ? "bg-red-500" : "bg-red-600"} transition-all duration-300 group-hover:w-full`} />
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setMobileMenuOpen(!mobileMenuOpen);
        }}
        className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
          scrolled
            ? "text-gray-300 hover:bg-gray-800/50"
            : "text-gray-700 hover:bg-gray-100/50"
        }`}
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Navigation Dropdown */}
      <div className={`
        lg:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out
        ${mobileMenuOpen 
          ? "opacity-100 visible transform translate-y-0" 
          : "opacity-0 invisible transform -translate-y-2"
        }
        ${scrolled 
          ? "bg-gray-900/95 border-b border-gray-700/50" 
          : "bg-white/95 border-b border-gray-200/50"
        }
        backdrop-blur-md shadow-lg
      `}>
        <nav 
          className="px-8 py-6 space-y-4"
          onClick={(e) => e.stopPropagation()}
        >
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
                block text-base font-medium transition-all duration-300 py-2 px-4 rounded-lg
                ${scrolled
                  ? "text-gray-300 hover:text-red-400 hover:bg-gray-800/30"
                  : "text-gray-700 hover:text-red-600 hover:bg-gray-100/30"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}