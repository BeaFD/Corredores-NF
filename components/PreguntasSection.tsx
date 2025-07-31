"use client";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function PreguntasSection() {
  // Use an array of booleans for multiple open questions
  const [openFAQs, setOpenFAQs] = useState<boolean[]>([false, false, false]);

  const toggleFAQ = (index: number) => {
    setOpenFAQs((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqs = [
    {
      question: "¿Qué tipos de seguros ofrecen?",
      answer: [
        "Ofrecemos una amplia gama de seguros para personas y empresas, incluyendo seguros de vida, salud, auto, hogar, responsabilidad civil y seguros comerciales especializados.",
        "Trabajamos con las mejores compañías aseguradoras del mercado para garantizar la cobertura más completa y competitiva para nuestros clientes.",
      ],
    },
    {
      question: "¿Cómo puedo cotizar un seguro?",
      answer: [
        "Puedes solicitar una cotización de manera gratuita contactándonos por teléfono, correo electrónico o visitando nuestras oficinas. Nuestro equipo de asesores especializados analizará tus necesidades específicas.",
        "También ofrecemos asesoramiento personalizado para ayudarte a elegir la cobertura que mejor se adapte a tu perfil y presupuesto.",
      ],
    },
    {
      question: "¿Qué beneficios tienen trabajar con un corredor de seguros?",
      answer: [
        "Como corredores independientes, representamos tus intereses y no los de una compañía específica. Esto nos permite ofrecerte opciones de múltiples aseguradoras y encontrar la mejor relación precio-cobertura.",
        "Además, brindamos asesoramiento continuo, gestión de siniestros y soporte personalizado durante toda la vigencia de tu póliza, sin costo adicional.",
      ],
    },
  ];

  return (
    <section
      id="preguntas"
      className="py-24 px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#484060] mb-6">
            Preguntas Frecuentes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#484060] to-[#615A77] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Resolvemos tus dudas más frecuentes sobre seguros y nuestros servicios
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                aria-expanded={openFAQs[index]}
                aria-controls={`faq-content-${index}`}
                type="button"
              >
                <span className="text-lg md:text-xl font-semibold text-[#484060] pr-4">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 p-2 rounded-full bg-[#484060] text-white transition-transform duration-300 ${openFAQs[index] ? 'rotate-180' : ''}`}>
                  {openFAQs[index] ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              <div
                id={`faq-content-${index}`}
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openFAQs[index]
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8 pt-2 space-y-4">
                  {faq.answer.map((paragraph, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed border-l-4 border-[#CBC9D0] pl-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">¿Tienes más preguntas?</h3>
            <p className="text-lg mb-6 text-gray-200">
              Estamos listos para ayudarte con cualquier consulta adicional
            </p>
            <a
              href="#contacto"
              onClick={(e) => handleSmoothScroll(e, "contacto")}
              className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300 hover:scale-105 transform inline-block text-center"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}