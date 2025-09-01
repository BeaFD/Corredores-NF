"use client";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { useState, useEffect } from "react";

export default function ContactoSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Sitio web - Contacto',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showSubjectField, setShowSubjectField] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'Sitio web - Contacto',
          message: ''
        });
        setShowSubjectField(false);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Function to set subject programmatically (called from other components)
  const setSubject = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subject: subject
    }));
    setShowSubjectField(true); // Show the field when subject is set from comparison view
  };

  // Expose setSubject function globally for other components to use
  useEffect(() => {
    (window as typeof window & { setContactSubject?: (subject: string) => void }).setContactSubject = setSubject;
    return () => {
      delete (window as typeof window & { setContactSubject?: (subject: string) => void }).setContactSubject;
    };
  }, []);

  return (
    <section
      id="contacto"
      className="py-24 px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte. Contactanos y descubrí la tranquilidad de estar bien protegido
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Información de Contacto</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <a 
                href="tel:+56973765102"
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer block md:cursor-default md:pointer-events-none"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg mb-4 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">Teléfono</h4>
                <p className="text-gray-600">+56 9 7376 5102</p>
                <p className="text-xs text-red-600 mt-1 md:hidden">Toca para llamar</p>
              </a>

              <a
                href="https://wa.me/message/7KTGSWNW53BQM1?src=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer block group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-lg text-gray-800 mb-3">WhatsApp</h4>
                
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-3 rounded-lg font-semibold text-center hover:from-red-700 hover:to-red-800 transition-all duration-300 transform group-hover:scale-105">
                  Chatear Ahora
                </div>
              </a>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg mb-4 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">Email</h4>
                <p className="text-gray-600">contacto@corredoresnf.cl</p>
              </div>
            </div>

            {/* 24/7 Availability Stamp */}
            <div className="relative flex justify-center">
              <div className="relative w-48 h-48 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all duration-300">
                {/* Outer ring decoration */}
                <div className="absolute inset-2 border-4 border-white/30 rounded-full"></div>
                
                {/* Inner content */}
                <div className="text-center text-white relative z-10">
                  <div className="text-5xl font-black mb-2 tracking-wider">24/7</div>
                  <div className="text-sm font-semibold uppercase tracking-widest">Disponible</div>
                  <div className="text-xs font-medium mt-1 opacity-90">Siempre a tu servicio</div>
                </div>
                
                {/* Rotating arrows around the circle */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-white/60"></div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 rotate-180 w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-white/60"></div>
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-white/60"></div>
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 rotate-90 w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-white/60"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Envianos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-colors duration-300 placeholder-gray-500 text-gray-900"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-colors duration-300 placeholder-gray-500 text-gray-900"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-colors duration-300 placeholder-gray-500 text-gray-900"
                  placeholder="+56 9 1234 5678"
                />
              </div>
              {showSubjectField && (
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-800 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-colors duration-300 bg-gray-50 text-gray-900 ${
                      formData.subject ? '' : 'placeholder-gray-500'
                    }`}
                    placeholder="Asunto del mensaje"
                    readOnly={!!formData.subject}
                  />
                </div>
              )}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-colors duration-300 resize-none placeholder-gray-500 text-gray-900"
                  placeholder="Contanos en qué podemos ayudarte..."
                  required
                ></textarea>
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  ✓ ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  ✗ Error al enviar el mensaje. Por favor, intenta nuevamente.
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
