"use client";
import React, { useRef, useEffect, useState } from "react";
import { Building, Shield, Users, Briefcase, Factory, Truck, ChevronDown } from "lucide-react";

const CARDS = [
  {
    title: "Seguro de Responsabilidad Civil",
    icon: <Shield className="w-8 h-8" />,
    description: [
      "Protección integral contra daños a terceros en el ejercicio de tu actividad comercial.",
      "Cobertura de daños materiales, personales y perjuicios económicos.",
      "Asesoramiento especializado en gestión de riesgos empresariales.",
    ],
    color: "from-emerald-400/20 to-teal-400/30"
  },
  {
    title: "Seguro de Patrimonio",
    icon: <Building className="w-8 h-8" />,
    description: [
      "Protege los bienes de tu empresa contra incendio, robo y daños accidentales.",
      "Cobertura de maquinaria, equipos, mobiliario y mercaderías.",
      "Valuación profesional y actualización automática de sumas aseguradas.",
    ],
    color: "from-blue-400/20 to-indigo-400/30"
  },
  {
    title: "Seguro de Vida Laboral",
    icon: <Users className="w-8 h-8" />,
    description: [
      "Cobertura de vida y accidentes personales para empleados y directivos.",
      "Indemnizaciones por invalidez permanente y gastos médicos.",
      "Programas flexibles adaptados al tamaño de tu empresa.",
    ],
    color: "from-rose-400/20 to-pink-400/30"
  },
  {
    title: "Seguro de Flota de Vehículos",
    icon: <Truck className="w-8 h-8" />,
    description: [
      "Cobertura integral para flotas comerciales y vehículos de trabajo.",
      "Gestión centralizada de pólizas y siniestros de toda tu flota.",
      "Descuentos especiales por volumen y buen historial de manejo.",
    ],
    color: "from-orange-400/20 to-amber-400/30"
  },
  {
    title: "Seguro de Riesgos del Trabajo",
    icon: <Briefcase className="w-8 h-8" />,
    description: [
      "Cumplimiento de la Ley de Riesgos del Trabajo para todos tus empleados.",
      "Cobertura médica y rehabilitación por accidentes laborales.",
      "Programas de prevención y capacitación en seguridad laboral.",
    ],
    color: "from-purple-400/20 to-violet-400/30"
  },
  {
    title: "Seguro de Industria",
    icon: <Factory className="w-8 h-8" />,
    description: [
      "Protección específica para actividades industriales y manufactureras.",
      "Cobertura de interrupción de negocio y pérdida de beneficios.",
      "Evaluación especializada de riesgos industriales complejos.",
    ],
    color: "from-cyan-400/20 to-teal-400/30"
  },
];

export default function EmpresasSection() {
  const [selectedCard, setSelectedCard] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-advance cards only on desktop
  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setSelectedCard((prev) => (prev + 1) % CARDS.length);
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <section
      id="empresas"
      ref={sectionRef}
      className="py-24 px-8 bg-gradient-to-b from-slate-50/50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-8">
              <div className="inline-block px-4 py-2 bg-emerald-100/80 text-emerald-700 rounded-full text-sm font-medium mb-4">
                EMPRESAS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Protección integral para 
                <span className="text-emerald-600"> tu negocio</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Soluciones de seguros empresariales diseñadas para cubrir todos los riesgos 
                de tu actividad comercial e industrial.
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
                        ? 'border-emerald-200 bg-emerald-50/80 shadow-md'
                        : 'border-gray-100 bg-white/50 hover:border-emerald-100 hover:bg-emerald-25'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        selectedCard === index 
                          ? 'bg-emerald-500 text-white' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {card.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold ${
                          selectedCard === index ? 'text-emerald-700' : 'text-gray-700'
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
                              <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
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
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-blue-200/40 to-indigo-200/40 rounded-full blur-2xl"></div>
              
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
                        <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
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
                        ? 'bg-emerald-600 scale-125' 
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