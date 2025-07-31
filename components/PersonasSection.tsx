"use client";
import React, { useRef, useEffect, useState } from "react";
import { Heart, Home, Car, Plane, Shield, Users, ChevronDown } from "lucide-react";

const CARDS = [
  {
    title: "Seguro de Vida",
    icon: <Heart className="w-8 h-8" />,
    description: [
      "Protección financiera para tu familia en caso de fallecimiento o invalidez total.",
      "Cobertura adicional por enfermedades graves y accidentes.",
      "Planes flexibles con opciones de ahorro e inversión.",
    ],
    color: "from-red-500/20 to-red-600/30"
  },
  {
    title: "Seguro de Salud",
    icon: <Shield className="w-8 h-8" />,
    description: [
      "Atención médica privada con la mejor red de prestadores del país.",
      "Cobertura ambulatoria, hospitalaria y medicamentos.",
      "Planes familiares e individuales con copagos preferenciales.",
    ],
    color: "from-emerald-500/20 to-emerald-600/30"
  },
  {
    title: "Seguro de Hogar",
    icon: <Home className="w-8 h-8" />,
    description: [
      "Protege tu vivienda y contenido contra incendio, robo y daños naturales.",
      "Cobertura de responsabilidad civil familiar.",
      "Servicios de emergencia 24/7 y reparaciones a domicilio.",
    ],
    color: "from-amber-500/20 to-amber-600/30"
  },
  {
    title: "Seguro de Auto",
    icon: <Car className="w-8 h-8" />,
    description: [
      "Cobertura completa contra todo riesgo con franquicia reducida.",
      "Asistencia en viaje 24/7 en todo el territorio nacional.",
      "Vehículo de reemplazo y gestión integral de siniestros.",
    ],
    color: "from-slate-500/20 to-slate-600/30"
  },
  {
    title: "Seguro de Viaje",
    icon: <Plane className="w-8 h-8" />,
    description: [
      "Protección integral para viajes nacionales e internacionales.",
      "Cobertura médica de emergencia y repatriación sanitaria.",
      "Compensación por cancelación de viaje y pérdida de equipaje.",
    ],
    color: "from-orange-500/20 to-orange-600/30"
  },
  {
    title: "Seguro de Accidentes Personales",
    icon: <Users className="w-8 h-8" />,
    description: [
      "Indemnización por muerte e invalidez permanente por accidentes.",
      "Cobertura de gastos médicos y hospitalarios.",
      "Extensión familiar con tarifas preferenciales.",
    ],
    color: "from-gray-500/20 to-gray-600/30"
  },
];

export default function PersonasSection() {
  const [selectedCard, setSelectedCard] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
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
      id="personas"
      ref={sectionRef}
      className="py-24 px-8 bg-gradient-to-b from-white to-slate-50/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-8">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl text-lg font-bold mb-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                PERSONAS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Seguros que se adaptan a 
                <span className="text-red-600"> tu vida</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Protección integral para vos y tu familia en cada etapa de la vida, 
                con coberturas flexibles y el mejor servicio.
              </p>
            </div>

            {/* Interactive Card List */}
            <div className="space-y-3">
              {CARDS.map((card, index) => (
                <div key={index} className="w-full">
                  <button
                    onClick={() => {
                      // Desktop behavior
                      setSelectedCard(index);
                      // Mobile accordion behavior
                      setExpandedCard(expandedCard === index ? null : index);
                    }}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] ${
                      selectedCard === index
                        ? 'border-red-200 bg-red-50/80 shadow-md'
                        : 'border-gray-100 bg-white/50 hover:border-red-100 hover:bg-red-25'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        selectedCard === index 
                          ? 'bg-red-600 text-white' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {card.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold ${
                          selectedCard === index ? 'text-red-700' : 'text-gray-700'
                        }`}>
                          {card.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {card.description[0].substring(0, 60)}...
                        </p>
                      </div>
                      {/* Mobile dropdown indicator - only show on small screens */}
                      <div className="lg:hidden">
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                            expandedCard === index ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </button>
                  
                  {/* Mobile Dropdown Content */}
                  <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
                    expandedCard === index ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                  }`}>
                    <div className={`bg-gradient-to-br ${card.color} backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg mx-4`}>
                      <div className="space-y-3 mb-6">
                        {card.description.map((paragraph, paragraphIndex) => (
                          <div key={paragraphIndex} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-white/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-red-600"></div>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">{paragraph}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="flex-1 bg-white/80 hover:bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                          Más información
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Selected Card Detail (Desktop Only) */}
          <div className={`transition-all duration-1000 delay-300 hidden lg:block ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-pink-200/40 to-orange-200/40 rounded-full blur-2xl"></div>
              
              {/* Main Card */}
              <div className={`relative bg-gradient-to-br ${CARDS[selectedCard].color} backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-gray-700 shadow-lg">
                    {CARDS[selectedCard].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {CARDS[selectedCard].title}
                  </h3>
                </div>

                <div className="space-y-4 mb-8">
                  {CARDS[selectedCard].description.map((paragraph, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{paragraph}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-white/80 hover:bg-white text-gray-700 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-md">
                    Más información
                  </button>
                </div>
              </div>

              {/* Card indicator dots */}
              <div className="flex justify-center gap-2 mt-6">
                {CARDS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCard(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      selectedCard === index 
                        ? 'bg-red-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}