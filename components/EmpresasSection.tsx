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
    color: "from-red-600/20 to-red-700/30",
    comparison: {
      title: "Planes de Responsabilidad Civil",
      subtitle: "Protege tu empresa ante reclamos de terceros",
      types: [
        {
          name: "Plan Básico",
          description: "Cobertura esencial para PyMEs",
          coverage: [
            "Daños materiales a terceros",
            "Lesiones corporales",
            "Gastos de defensa legal",
            "Cobertura hasta $50 millones"
          ],
          price: "Desde $35.000/mes",
          recommended: false
        },
        {
          name: "Plan Completo",
          description: "Protección integral para empresas",
          coverage: [
            "Cobertura ampliada hasta $200 millones",
            "Perjuicios económicos",
            "Productos defectuosos",
            "Responsabilidad profesional"
          ],
          price: "Desde $75.000/mes",
          recommended: true
        },
        {
          name: "Plan Premium",
          description: "Máxima protección para grandes empresas",
          coverage: [
            "Cobertura hasta $500 millones",
            "Responsabilidad ambiental",
            "Ciberriesgos empresariales",
            "Cobertura internacional"
          ],
          price: "Desde $150.000/mes",
          recommended: false
        }
      ]
    }
  },
  {
    title: "Seguro de Patrimonio",
    icon: <Building className="w-8 h-8" />,
    description: [
      "Protege los bienes de tu empresa contra incendio, robo y daños accidentales.",
      "Cobertura de maquinaria, equipos, mobiliario y mercaderías.",
      "Valuación profesional y actualización automática de sumas aseguradas.",
    ],
    color: "from-teal-600/20 to-teal-700/30",
    comparison: {
      title: "Coberturas de Patrimonio Empresarial",
      subtitle: "Protege los activos de tu empresa",
      types: [
        {
          name: "Cobertura Básica",
          description: "Protección esencial de bienes",
          coverage: [
            "Incendio y explosión",
            "Robo y hurto",
            "Daños por agua",
            "Equipos de oficina"
          ],
          price: "Desde $25.000/mes",
          recommended: false
        },
        {
          name: "Cobertura Completa",
          description: "Protección integral de activos",
          coverage: [
            "Todo riesgo operativo",
            "Maquinaria y equipos",
            "Interrupción de negocio",
            "Gastos adicionales"
          ],
          price: "Desde $60.000/mes",
          recommended: true
        },
        {
          name: "Cobertura Premium",
          description: "Máxima protección patrimonial",
          coverage: [
            "Catástrofes naturales",
            "Equipos electrónicos",
            "Pérdida de beneficios",
            "Actualización automática"
          ],
          price: "Desde $120.000/mes",
          recommended: false
        }
      ]
    }
  },
  {
    title: "Seguro de Vida Laboral",
    icon: <Users className="w-8 h-8" />,
    description: [
      "Cobertura de vida y accidentes personales para empleados y directivos.",
      "Indemnizaciones por invalidez permanente y gastos médicos.",
      "Programas flexibles adaptados al tamaño de tu empresa.",
    ],
    color: "from-amber-600/20 to-amber-700/30",
    comparison: {
      title: "Planes de Vida Laboral",
      subtitle: "Protege a tu equipo de trabajo",
      types: [
        {
          name: "Plan PyME",
          description: "Para empresas de hasta 50 empleados",
          coverage: [
            "Muerte natural o accidental",
            "Invalidez total permanente",
            "Gastos médicos básicos",
            "Cobertura 24 horas"
          ],
          price: "Desde $8.000/empleado/mes",
          recommended: false
        },
        {
          name: "Plan Corporativo",
          description: "Para empresas medianas y grandes",
          coverage: [
            "Coberturas ampliadas",
            "Invalidez parcial permanente",
            "Gastos de sepelio",
            "Asistencia familiar"
          ],
          price: "Desde $15.000/empleado/mes",
          recommended: true
        },
        {
          name: "Plan Ejecutivo",
          description: "Para directivos y altos cargos",
          coverage: [
            "Sumas aseguradas elevadas",
            "Cobertura internacional",
            "Servicios médicos premium",
            "Beneficios adicionales"
          ],
          price: "Desde $30.000/empleado/mes",
          recommended: false
        }
      ]
    }
  },
  {
    title: "Seguro de Flota de Vehículos",
    icon: <Truck className="w-8 h-8" />,
    description: [
      "Cobertura integral para flotas comerciales y vehículos de trabajo.",
      "Gestión centralizada de pólizas y siniestros de toda tu flota.",
      "Descuentos especiales por volumen y buen historial de manejo.",
    ],
    color: "from-slate-600/20 to-slate-700/30",
    comparison: {
      title: "Planes de Seguro de Flota",
      subtitle: "Protege todos los vehículos de tu empresa",
      types: [
        {
          name: "Flota Básica",
          description: "Para flotas de hasta 10 vehículos",
          coverage: [
            "Responsabilidad civil",
            "Robo total del vehículo",
            "Incendio y explosión",
            "Asistencia en ruta"
          ],
          price: "Desde $45.000/vehículo/mes",
          recommended: false
        },
        {
          name: "Flota Completa",
          description: "Para flotas medianas y grandes",
          coverage: [
            "Todo riesgo con franquicia",
            "Daños a terceros ampliado",
            "Vehículo de reemplazo",
            "Gestión integral de siniestros"
          ],
          price: "Desde $75.000/vehículo/mes",
          recommended: true
        },
        {
          name: "Flota Premium",
          description: "Para flotas especializadas",
          coverage: [
            "Cobertura internacional",
            "Equipos y accesorios",
            "Pérdida de uso comercial",
            "Monitoreo GPS incluido"
          ],
          price: "Desde $120.000/vehículo/mes",
          recommended: false
        }
      ]
    }
  },
  {
    title: "Seguro de Riesgos del Trabajo",
    icon: <Briefcase className="w-8 h-8" />,
    description: [
      "Cumplimiento de la Ley de Riesgos del Trabajo para todos tus empleados.",
      "Cobertura médica y rehabilitación por accidentes laborales.",
      "Programas de prevención y capacitación en seguridad laboral.",
    ],
    color: "from-orange-600/20 to-orange-700/30",
    comparison: {
      title: "Planes de Riesgos del Trabajo",
      subtitle: "Cumple con la legislación laboral",
      types: [
        {
          name: "Plan Básico",
          description: "Cumplimiento mínimo legal",
          coverage: [
            "Accidentes de trabajo",
            "Enfermedades profesionales",
            "Prestaciones médicas",
            "Incapacidad laboral temporal"
          ],
          price: "Desde $12.000/empleado/mes",
          recommended: false
        },
        {
          name: "Plan Completo",
          description: "Cobertura integral ART",
          coverage: [
            "Rehabilitación integral",
            "Prestaciones económicas",
            "Capacitación preventiva",
            "Asesoramiento especializado"
          ],
          price: "Desde $18.000/empleado/mes",
          recommended: true
        },
        {
          name: "Plan Premium",
          description: "Máxima protección laboral",
          coverage: [
            "Servicios médicos ampliados",
            "Programas de bienestar",
            "Gestión avanzada de riesgos",
            "Tecnología de prevención"
          ],
          price: "Desde $25.000/empleado/mes",
          recommended: false
        }
      ]
    }
  },
  {
    title: "Seguro de Industria",
    icon: <Factory className="w-8 h-8" />,
    description: [
      "Protección específica para actividades industriales y manufactureras.",
      "Cobertura de interrupción de negocio y pérdida de beneficios.",
      "Evaluación especializada de riesgos industriales complejos.",
    ],
    color: "from-gray-600/20 to-gray-700/30",
    comparison: {
      title: "Seguros Industriales Especializados",
      subtitle: "Protección para actividades manufactureras",
      types: [
        {
          name: "Industria Básica",
          description: "Para pequeñas manufacturas",
          coverage: [
            "Daños a maquinaria",
            "Interrupción básica",
            "Responsabilidad del producto",
            "Riesgos operativos"
          ],
          price: "Desde $80.000/mes",
          recommended: false
        },
        {
          name: "Industria Completa",
          description: "Para medianas industrias",
          coverage: [
            "Todo riesgo industrial",
            "Pérdida de beneficios",
            "Equipos electrónicos",
            "Contaminación accidental"
          ],
          price: "Desde $180.000/mes",
          recommended: true
        },
        {
          name: "Industria Premium",
          description: "Para grandes complejos industriales",
          coverage: [
            "Riesgos catastróficos",
            "Investigación y desarrollo",
            "Responsabilidad ambiental",
            "Cobertura internacional"
          ],
          price: "Desde $350.000/mes",
          recommended: false
        }
      ]
    }
  },
];

export default function EmpresasSection() {
  const [selectedCard, setSelectedCard] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [comparisonCard, setComparisonCard] = useState<number | null>(null);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
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

  const handleMoreInfo = (cardIndex: number) => {
    setComparisonCard(cardIndex);
    setShowComparison(true);
    setCurrentCarouselIndex(0); // Reset carousel to first item
    // Scroll to top of section when comparison view opens
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBack = () => {
    setShowComparison(false);
    setComparisonCard(null);
    setCurrentCarouselIndex(0); // Reset carousel
  };

  const handleCotizar = (insuranceTypeOrEvent?: string | React.MouseEvent, planName?: string) => {
    setShowComparison(false);
    setComparisonCard(null);
    setCurrentCarouselIndex(0); // Reset carousel
    
    // Set subject if insurance type and plan are provided (and it's not a mouse event)
    if (typeof insuranceTypeOrEvent === 'string' && planName) {
      const windowWithSubject = window as typeof window & { setContactSubject?: (subject: string) => void };
      if (windowWithSubject.setContactSubject) {
        windowWithSubject.setContactSubject(`${insuranceTypeOrEvent} - ${planName}`);
      }
    }
    
    // Navigate to contact section
    const contactElement = document.getElementById('contacto');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="empresas"
      ref={sectionRef}
      className="py-24 px-8 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-8">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl text-lg font-bold mb-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                SEGUROS EMPRESARIALES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Seguros para Empresas
                <span className="text-red-600"> protege tu negocio</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Protegemos tu patrimonio empresarial con <strong>seguros de responsabilidad civil</strong> y más.
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
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMoreInfo(index);
                          }}
                          className="flex-1 bg-white/80 hover:bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                        >
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
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{paragraph}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => handleMoreInfo(selectedCard)}
                    className="flex-1 bg-white/80 hover:bg-white text-gray-700 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-md"
                  >
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

        {/* Comparison View - overlay but not full screen */}
        <div className={`absolute inset-0 bg-white/95 backdrop-blur-sm transition-all duration-500 ease-in-out ${
          showComparison ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          {showComparison && comparisonCard !== null && (
            <div className="h-full overflow-y-auto pt-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
                {/* Header with back button */}
                <div className="flex items-center gap-4 mb-8">
                  <button
                    onClick={handleBack}
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300 shadow-md"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
                    {CARDS[comparisonCard].icon}
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                      {CARDS[comparisonCard].comparison.title}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600">
                      {CARDS[comparisonCard].comparison.subtitle}
                    </p>
                  </div>
                </div>

                {/* Mobile: Carousel Layout for small screens */}
                <div className="block lg:hidden">
                  <div className="relative">
                    {/* Carousel Container */}
                    <div className="overflow-hidden">
                      <div 
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${currentCarouselIndex * 100}%)` }}
                      >
                        {CARDS[comparisonCard].comparison.types.map((type, typeIndex) => (
                          <div key={typeIndex} className="w-full flex-shrink-0 px-2">
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mx-auto max-w-sm">
                              {/* Plan Header */}
                              <div className={`p-4 ${type.recommended ? 'bg-red-600 text-white' : 'bg-gray-50'}`}>
                                <div className="text-center">
                                  <h3 className={`text-lg font-bold ${type.recommended ? 'text-white' : 'text-gray-800'}`}>
                                    {type.name}
                                  </h3>
                                  <p className={`text-xs mt-1 ${type.recommended ? 'text-red-100' : 'text-gray-600'}`}>
                                    {type.description}
                                  </p>
                                  <div className={`text-xl font-bold mt-2 ${type.recommended ? 'text-white' : 'text-red-600'}`}>
                                    {type.price}
                                  </div>
                                  {type.recommended && (
                                    <div className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold mt-2 inline-block">
                                      Recomendado
                                    </div>
                                  )}
                                </div>
                              </div>
                              
                              {/* Features List */}
                              <div className="p-4">
                                <div className="space-y-2">
                                  {type.coverage.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-start gap-2">
                                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                      </div>
                                      <span className="text-gray-700 text-xs leading-tight">{feature}</span>
                                    </div>
                                  ))}
                                </div>
                                
                                {/* Cotizar Button */}
                                <button
                                  onClick={() => handleCotizar(CARDS[comparisonCard].title, type.name)}
                                  className={`w-full mt-4 py-2.5 px-3 rounded-lg font-medium transition-all duration-300 text-sm ${
                                    type.recommended
                                      ? 'bg-red-600 hover:bg-red-700 text-white'
                                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                  }`}
                                >
                                  Cotizar
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Carousel Navigation */}
                    <div className="flex justify-between items-center mt-4">
                      <button
                        onClick={() => setCurrentCarouselIndex(Math.max(0, currentCarouselIndex - 1))}
                        disabled={currentCarouselIndex === 0}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          currentCarouselIndex === 0 
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                            : 'bg-red-600 text-white hover:bg-red-700 shadow-md'
                        }`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      {/* Carousel Indicators */}
                      <div className="flex gap-2">
                        {CARDS[comparisonCard].comparison.types.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentCarouselIndex(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                              currentCarouselIndex === index 
                                ? 'bg-red-600 scale-125' 
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <button
                        onClick={() => setCurrentCarouselIndex(Math.min(CARDS[comparisonCard].comparison.types.length - 1, currentCarouselIndex + 1))}
                        disabled={currentCarouselIndex === CARDS[comparisonCard].comparison.types.length - 1}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          currentCarouselIndex === CARDS[comparisonCard].comparison.types.length - 1
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                            : 'bg-red-600 text-white hover:bg-red-700 shadow-md'
                        }`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Desktop: Table Layout for large screens */}
                <div className="hidden lg:block">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                    {/* Table Header */}
                    <div className="bg-red-600 text-white">
                      <div className="grid grid-cols-4 gap-4 p-4">
                        <div className="font-bold text-lg">Características</div>
                        {CARDS[comparisonCard].comparison.types.map((type, index) => (
                          <div key={index} className="text-center">
                            <div className="font-bold text-lg">{type.name}</div>
                            <div className="text-sm opacity-90">{type.price}</div>
                            {type.recommended && (
                              <div className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold mt-1 inline-block">
                                Recomendado
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Table Body */}
                    <div className="divide-y divide-gray-100">
                      {/* Create rows based on all unique features */}
                      {(() => {
                        const allFeatures = new Set<string>();
                        CARDS[comparisonCard].comparison.types.forEach(type => {
                          type.coverage.forEach(feature => allFeatures.add(feature));
                        });
                        
                        return Array.from(allFeatures).map((feature, featureIndex) => (
                          <div key={featureIndex} className={`grid grid-cols-4 gap-4 p-4 ${
                            featureIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                          }`}>
                            <div className="font-medium text-gray-700 flex items-center">
                              {feature}
                            </div>
                            {CARDS[comparisonCard].comparison.types.map((type, typeIndex) => (
                              <div key={typeIndex} className="text-center flex items-center justify-center">
                                {type.coverage.includes(feature) ? (
                                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                ) : (
                                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                                )}
                              </div>
                            ))}
                          </div>
                        ));
                      })()}
                    </div>

                    {/* Action Buttons Row */}
                    <div className="bg-gray-50 p-4">
                      <div className="grid grid-cols-4 gap-4">
                        <div></div> {/* Empty cell for feature column */}
                        {CARDS[comparisonCard].comparison.types.map((type, index) => (
                          <button
                            key={index}
                            onClick={() => handleCotizar(CARDS[comparisonCard].title, type.name)}
                            className={`py-3 px-4 rounded-xl font-medium transition-all duration-300 text-sm ${
                              type.recommended
                                ? 'bg-red-600 hover:bg-red-700 text-white'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                            }`}
                          >
                            Cotizar
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}