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
    color: "from-red-500/20 to-red-600/30",
    comparison: {
      title: "Tipos de Seguros de Vida",
      subtitle: "Encuentra la protección que mejor se adapte a tu familia",
      types: [
        {
          name: "Seguro Temporal",
          description: "Protección por un período específico",
          coverage: [
            "Cobertura por 10, 20 o 30 años",
            "Primas más económicas",
            "Ideal para familias jóvenes",
            "Sin valor de rescate"
          ],
          price: "Desde $15.000/mes",
          recommended: false
        },
        {
          name: "Seguro Completo",
          description: "Protección permanente con ahorro",
          coverage: [
            "Cobertura de por vida",
            "Componente de ahorro e inversión",
            "Préstamos sobre la póliza",
            "Valor de rescate garantizado"
          ],
          price: "Desde $45.000/mes",
          recommended: true
        },
        {
          name: "Seguro Universal",
          description: "Flexibilidad máxima en primas y beneficios",
          coverage: [
            "Primas ajustables",
            "Beneficios flexibles",
            "Opciones de inversión",
            "Transparencia en costos"
          ],
          price: "Desde $35.000/mes",
          recommended: false
        }
      ]
    }
  },
  {
    title: "Seguro de Salud",
    icon: <Shield className="w-8 h-8" />,
    description: [
      "Atención médica privada con la mejor red de prestadores del país.",
      "Cobertura ambulatoria, hospitalaria y medicamentos.",
      "Planes familiares e individuales con copagos preferenciales.",
    ],
    color: "from-emerald-500/20 to-emerald-600/30",
    comparison: {
      title: "Planes de Seguro de Salud",
      subtitle: "Elige la cobertura médica ideal para ti",
      types: [
        {
          name: "Plan Básico",
          description: "Cobertura esencial a precio accesible",
          coverage: [
            "Hospitalización completa",
            "Urgencias 24/7",
            "Medicamentos básicos",
            "Red de prestadores nacional"
          ],
          price: "Desde $25.000/mes",
          recommended: false
        },
        {
          name: "Plan Completo",
          description: "Cobertura integral para toda la familia",
          coverage: [
            "Cobertura ambulatoria total",
            "Especialistas sin restricción",
            "Exámenes y procedimientos",
            "Medicamentos completos"
          ],
          price: "Desde $55.000/mes",
          recommended: true
        },
        {
          name: "Plan Premium",
          description: "Máxima cobertura y beneficios exclusivos",
          coverage: [
            "Habitación privada garantizada",
            "Medicina preventiva completa",
            "Cobertura internacional",
            "Servicios dentales incluidos"
          ],
          price: "Desde $85.000/mes",
          recommended: false
        }
      ]
    }
  },
  {
    title: "Seguro de Hogar",
    icon: <Home className="w-8 h-8" />,
    description: [
      "Protege tu vivienda y contenido contra incendio, robo y daños naturales.",
      "Cobertura de responsabilidad civil familiar.",
      "Servicios de emergencia 24/7 y reparaciones a domicilio.",
    ],
    color: "from-amber-500/20 to-amber-600/30",
    comparison: {
      title: "Coberturas de Seguro de Hogar",
      subtitle: "Protege tu patrimonio familiar",
      types: [
        {
          name: "Cobertura Básica",
          description: "Protección esencial para tu hogar",
          coverage: [
            "Incendio y explosión",
            "Robo de contenido",
            "Responsabilidad civil",
            "Asistencia básica 24/7"
          ],
          price: "Desde $12.000/mes",
          recommended: false
        },
        {
          name: "Cobertura Completa",
          description: "Protección integral contra todo riesgo",
          coverage: [
            "Todo riesgo de contenido",
            "Daños por agua y viento",
            "Rotura de cristales",
            "Gastos adicionales de estadía"
          ],
          price: "Desde $28.000/mes",
          recommended: true
        },
        {
          name: "Cobertura Premium",
          description: "Máxima protección con servicios exclusivos",
          coverage: [
            "Terremoto y maremoto",
            "Objetos de valor especiales",
            "Jardinería y piscina",
            "Servicio de conserjería"
          ],
          price: "Desde $45.000/mes",
          recommended: false
        }
      ]
    }
  },
  {
    title: "Seguro de Auto",
    icon: <Car className="w-8 h-8" />,
    description: [
      "Cobertura completa contra todo riesgo con franquicia reducida.",
      "Asistencia en viaje 24/7 en todo el territorio nacional.",
      "Vehículo de reemplazo y gestión integral de siniestros.",
    ],
    color: "from-slate-500/20 to-slate-600/30",
    comparison: {
      title: "Tipos de Seguro Automotriz",
      subtitle: "Protege tu vehículo con la cobertura adecuada",
      types: [
        {
          name: "Terceros Básico",
          description: "Cobertura mínima obligatoria",
          coverage: [
            "Responsabilidad civil",
            "SOAP incluido",
            "Asistencia básica",
            "Defensa penal"
          ],
          price: "Desde $18.000/mes",
          recommended: false
        },
        {
          name: "Terceros Completo",
          description: "Protección ampliada para terceros",
          coverage: [
            "Responsabilidad civil ampliada",
            "Robo total del vehículo",
            "Incendio y explosión",
            "Cristales y cerrajería"
          ],
          price: "Desde $35.000/mes",
          recommended: true
        },
        {
          name: "Todo Riesgo",
          description: "Máxima protección para tu vehículo",
          coverage: [
            "Cobertura de daños propios",
            "Sin restricción de talleres",
            "Auto de reemplazo",
            "Franquicia reducida"
          ],
          price: "Desde $65.000/mes",
          recommended: false
        }
      ]
    }
  },
  {
    title: "Seguro de Viaje",
    icon: <Plane className="w-8 h-8" />,
    description: [
      "Protección integral para viajes nacionales e internacionales.",
      "Cobertura médica de emergencia y repatriación sanitaria.",
      "Compensación por cancelación de viaje y pérdida de equipaje.",
    ],
    color: "from-orange-500/20 to-orange-600/30",
    comparison: {
      title: "Planes de Seguro de Viaje",
      subtitle: "Viaja tranquilo con la protección adecuada",
      types: [
        {
          name: "Plan Nacional",
          description: "Para viajes dentro de Chile",
          coverage: [
            "Gastos médicos de urgencia",
            "Cancelación de viaje",
            "Pérdida de equipaje",
            "Retraso de vuelos"
          ],
          price: "Desde $8.000/viaje",
          recommended: false
        },
        {
          name: "Plan Internacional",
          description: "Cobertura mundial completa",
          coverage: [
            "Gastos médicos hasta USD 100,000",
            "Repatriación sanitaria",
            "Gastos odontológicos",
            "Responsabilidad civil"
          ],
          price: "Desde $25.000/viaje",
          recommended: true
        },
        {
          name: "Plan Premium",
          description: "Máxima cobertura para viajeros exigentes",
          coverage: [
            "Gastos médicos hasta USD 500,000",
            "Deportes de alto riesgo",
            "Cobertura COVID-19",
            "Concierge 24/7"
          ],
          price: "Desde $45.000/viaje",
          recommended: false
        }
      ]
    }
  },
  {
    title: "Seguro de Accidentes Personales",
    icon: <Users className="w-8 h-8" />,
    description: [
      "Indemnización por muerte e invalidez permanente por accidentes.",
      "Cobertura de gastos médicos y hospitalarios.",
      "Extensión familiar con tarifas preferenciales.",
    ],
    color: "from-gray-500/20 to-gray-600/30",
    comparison: {
      title: "Coberturas de Accidentes Personales",
      subtitle: "Protección ante accidentes inesperados",
      types: [
        {
          name: "Individual Básico",
          description: "Protección personal esencial",
          coverage: [
            "Muerte por accidente",
            "Invalidez permanente",
            "Gastos médicos básicos",
            "Incapacidad temporal"
          ],
          price: "Desde $5.000/mes",
          recommended: false
        },
        {
          name: "Familiar Completo",
          description: "Protección para toda la familia",
          coverage: [
            "Cobertura para cónyuge e hijos",
            "Gastos médicos ampliados",
            "Rehabilitación física",
            "Asistencia psicológica"
          ],
          price: "Desde $15.000/mes",
          recommended: true
        },
        {
          name: "Premium Plus",
          description: "Máxima protección con beneficios adicionales",
          coverage: [
            "Deportes de alto riesgo",
            "Cobertura mundial 24/7",
            "Gastos de sepelio",
            "Renta por hospitalización"
          ],
          price: "Desde $25.000/mes",
          recommended: false
        }
      ]
    }
  },
];

export default function PersonasSection() {
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
      id="personas"
      ref={sectionRef}
      className="py-24 px-8 bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-8">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl text-lg font-bold mb-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                SEGUROS PERSONALES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Seguros Personales en Concepción
                <span className="text-red-600"> para tu tranquilidad</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                <strong>Seguros personales</strong> diseñados para proteger a tu familia. 
                Ofrecemos <strong>seguros de vida</strong>, <strong>seguros automotrices</strong>, seguros de salud y más.
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