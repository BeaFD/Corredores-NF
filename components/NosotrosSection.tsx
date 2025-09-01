"use client";
import { Award, Heart, Shield, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function NosotrosSection() {
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
      id="nosotros"
      ref={sectionRef}
      className="py-24 px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Nosotros
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Construyendo relaciones sólidas y duraderas basadas en la confianza y el compromiso
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p className="text-xl font-medium text-gray-800 mb-6">
                Más de 20 años protegiendo lo que más valorás
              </p>
              <p>
                Somos una empresa Corredora y Asesora de Seguros Generales y de Vida, 
                que nos caracterizamos por un trabajo <strong className="text-red-600">honesto, transparente y empático</strong> con nuestros clientes, 
                acompañándolos durante todo el proceso, desde la contratación hasta el posible siniestro.
              </p>
              <p>
                Nuestro compromiso es asesorar de forma clara y profesional, 
                buscando siempre <strong className="text-red-600">estrechar y prolongar en el tiempo</strong> los lazos con nuestros clientes, 
                convirtiéndonos en su socio estratégico de confianza.
              </p>
              <div className="pt-6">
                <div className="bg-gradient-to-r from-red-50 to-red-100/80 rounded-2xl p-6 border border-red-200/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                      <Award size={20} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">Certificaciones y Acreditaciones</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">Corredora Autorizada CMF</p>
                        <p className="text-xs text-gray-600">Comisión para el Mercado Financiero</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">Registro de Corredores</p>
                        <p className="text-xs text-gray-600">Superintendencia de Valores y Seguros</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">Certificación ISO 9001</p>
                        <p className="text-xs text-gray-600">Gestión de Calidad en Servicios</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">Miembro ANS Chile</p>
                        <p className="text-xs text-gray-600">Asociación Nacional de Corredores de Seguros</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Single Combined Container */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative max-w-md mx-auto">
              {/* Combined Container - Grey Gradient & Smaller */}
              <div className="bg-gradient-to-br from-gray-100/80 via-gray-50/60 to-slate-100/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/30">
                {/* Company Logo and Info Section */}
                <div className="flex flex-col items-center text-center mb-6">
                  <img 
                    src="/logo.png" 
                    alt="NF Corredores Logo" 
                    className="w-16 h-16 object-contain mb-4"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement('div');
                        fallback.className = 'w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white mb-4 shadow-md';
                        fallback.innerHTML = '<div class="text-xl font-bold">NF</div>';
                        parent.insertBefore(fallback, target);
                      }
                    }}
                  />
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Tu tranquilidad, nuestra prioridad
                  </h3>
                  
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    Más de 15 años protegiendo familias y empresas
                  </p>
                  
                  {/* Client Stat */}
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-800">500+</div>
                    <div className="text-sm text-gray-600">Clientes Satisfechos</div>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-red-300/50 to-transparent mb-6"></div>

                {/* Key Points */}
                <div className="text-center">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <Heart size={20} />, title: "Compromiso" },
                      { icon: <Shield size={20} />, title: "Confianza" },
                      { icon: <Users size={20} />, title: "Cercanía" },
                      { icon: <Award size={20} />, title: "Excelencia" }
                    ].map((value, index) => (
                      <div key={index} className="text-center">
                        <div className="mb-2 flex justify-center text-red-600">
                          {value.icon}
                        </div>
                        <h5 className="font-semibold text-sm text-gray-800">{value.title}</h5>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}