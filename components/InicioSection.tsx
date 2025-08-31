"use client";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function InicioSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen bg-white px-8 py-20 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          {/* Background Placeholder - Only visible on single column layout */}
          <div className="absolute inset-0 flex items-center justify-center lg:hidden">
            <img 
              src="/logo.png" 
              alt="NF Corredores Logo" 
              className="w-96 h-96 object-contain opacity-20 select-none pointer-events-none"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/400x400.svg";
              }}
            />
          </div>

          {/* Left Side - Text Content */}
          <div className={`transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Seguros que crean 
              <span className="block text-red-600">tranquilidad.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              <strong>NF Corredores</strong>, tu <strong>corredora de seguros</strong> de confianza en <strong>Concepción</strong>. 
              Especialistas en <strong>seguros personales</strong>, <strong>seguros automotrices</strong> y <strong>seguros para empresas</strong>.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Protege lo que más valoras con nuestros <strong>seguros en Concepción</strong>. 
              Somos <strong>corredores de seguros</strong> especializados en brindar la mejor cobertura para personas y empresas.
            </p>

            {/* Keywords for SEO - Hidden but indexable */}
            <div className="sr-only">
              Seguros Concepción, Corredora de seguros Concepción, Seguros personales Concepción, 
              Seguros para empresas Concepción, Seguros automotrices Concepción, NF Corredores, 
              Corredores NF, Corredora NF, Seguros de vida Concepción, Seguros de hogar Concepción
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#nosotros"
                onClick={(e) => handleSmoothScroll(e, "nosotros")}
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2 text-lg hover:scale-105 transform shadow-lg"
              >
                <ArrowRight size={20} />
                Comenzar
              </a>
              <a
                href="#contacto"
                onClick={(e) => handleSmoothScroll(e, "contacto")}
                className=" bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 text-lg hover:scale-105 transform"
              >
                Contactanos
              </a>
            </div>
          </div>

          {/* Right Side - Logo (Only visible on large screens) */}
          <div className={`transition-all duration-1000 delay-300 hidden lg:block ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="flex justify-center">
              <img 
                src="/logo.png" 
                alt="NF Corredores Logo" 
                className="w-100 h-100 object-contain opacity-100"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/400x400.svg";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}