"use client";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function InicioSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
              src="/400x400.svg" 
              alt="Background" 
              className="w-96 h-96 object-contain opacity-20 select-none pointer-events-none"
            />
          </div>

          {/* Left Side - Text Content */}
          <div className={`transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Seguros que crean 
              <span className="block text-blue-600">tranquilidad.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Solo Corredores NF te da una póliza de seguro de vida que no tiene costo adicional y crea valor para tu futuro.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#nosotros"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 text-lg hover:scale-105 transform shadow-lg"
              >
                <ArrowRight size={20} />
                Comenzar
              </a>
              <a
                href="#contacto"
                className=" bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 text-lg hover:scale-105 transform"
              >
                Contactanos
              </a>
            </div>
          </div>

          {/* Right Side - Placeholder (Only visible on large screens) */}
          <div className={`transition-all duration-1000 delay-300 hidden lg:block ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="flex justify-center">
              <img 
                src="/400x400.svg" 
                alt="Placeholder" 
                className="w-80 h-80 object-contain opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}