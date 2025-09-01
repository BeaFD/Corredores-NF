"use client";
import React, { useRef, useEffect, useState } from "react";

const INSURANCE_COMPANIES = [
  {
    name: "BCI Seguros",
    logo: "/logobci.svg"
  },
  {
    name: "Chubb",
    logo: "/logo_chubb.png"
  },
  {
    name: "Consorcio",
    logo: "/logo_consorcio.png"
  },
  {
    name: "FID",
    logo: "/logo_fid.png"
  },
  {
    name: "HDI/Liberty",
    logo: "/logo_hdi.png"
  },
  {
    name: "Mapfre",
    logo: "/logo_mapfre.png"
  },
  {
    name: "Reale",
    logo: "/logo_reale.png"
  },
  {
    name: "Southbridge",
    logo: "/logo_southbridge.png"
  },
  {
    name: "Sura",
    logo: "/logo_sura.png"
  },
  {
    name: "Zurich",
    logo: "/logo_zurich.png"
  }
];

export default function EmpresasConfianzaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Empresas que
            <span className="text-red-600"> confían en nosotros</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Trabajamos con las principales compañías de seguros del país para ofrecerte 
            las mejores opciones y coberturas adaptadas a tus necesidades.
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className={`hidden md:block transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {INSURANCE_COMPANIES.map((company, index) => (
                <div
                  key={index}
                  className="group relative border-r border-b border-gray-200 last:border-r-0 xl:nth-child(5n):border-r-0 lg:nth-child(4n):border-r-0 sm:nth-child(3n):border-r-0 nth-child(2n):border-r-0"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`
                    relative p-4 h-20 flex items-center justify-center
                    transition-all duration-300 cursor-pointer
                    ${hoveredIndex === index 
                      ? 'bg-red-50 scale-105 z-10' 
                      : 'bg-white grayscale hover:grayscale-0'
                    }
                  `}>
                    {/* Logo */}
                    <img 
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className={`max-w-24 max-h-16 object-contain transition-all duration-300 ${
                        hoveredIndex === index ? 'scale-110' : ''
                      }`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-24 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white shadow-md';
                          fallback.innerHTML = '<div class="text-base font-bold">' + company.name.substring(0, 2).toUpperCase() + '</div>';
                          parent.insertBefore(fallback, target);
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Scrolling Carousel */}
        <div className={`md:hidden transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative overflow-hidden bg-white rounded-3xl shadow-xl border border-gray-200 py-6">
            <div className="carousel-track">
              {/* Create enough copies for smooth infinite scroll */}
              {[...Array(6)].map((_, setIndex) => 
                INSURANCE_COMPANIES.map((company, index) => (
                  <div
                    key={`set-${setIndex}-${index}`}
                    className="carousel-item"
                  >
                    <img 
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="max-w-20 max-h-12 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-20 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center text-white text-xs font-bold';
                          fallback.textContent = company.name.substring(0, 2).toUpperCase();
                          parent.insertBefore(fallback, target);
                        }
                      }}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nuestra amplia red de aseguradoras nos permite comparar opciones y 
            <span className="text-red-600 font-semibold"> encontrar la mejor cobertura al mejor precio</span> para ti.
          </p>
        </div>
      </div>

      <style jsx>{`
        .carousel-track {
          display: flex;
          width: max-content;
          animation: slide 25s linear infinite;
        }
        
        .carousel-item {
          flex: 0 0 auto;
          width: 120px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
        }
        
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${100 / 6}%); }
        }
        
        /* Grid border selectors for desktop */
        .xl\\:nth-child\\(5n\\)\\:border-r-0:nth-child(5n) {
          border-right: none;
        }
        @media (max-width: 1279px) {
          .lg\\:nth-child\\(4n\\)\\:border-r-0:nth-child(4n) {
            border-right: none;
          }
        }
        @media (max-width: 1023px) {
          .sm\\:nth-child\\(3n\\)\\:border-r-0:nth-child(3n) {
            border-right: none;
          }
        }
        @media (max-width: 639px) {
          .nth-child\\(2n\\)\\:border-r-0:nth-child(2n) {
            border-right: none;
          }
        }
      `}</style>
    </section>
  );
}
