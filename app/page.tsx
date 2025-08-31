"use client";
import InicioSection from "../components/InicioSection";
import NosotrosSection from "../components/NosotrosSection";
import PersonasSection from "../components/PersonasSection";
import EmpresasSection from "../components/EmpresasSection";
import PreguntasSection from "../components/PreguntasSection";
import ContactoSection from "../components/ContactoSection";
import ScrollEffects from "../components/ScrollEffects";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "NF Corredores",
    "alternateName": ["Corredores NF", "NF Corredora", "Corredora NF"],
    "description": "Corredora de seguros líder en Concepción. Ofrecemos seguros personales, automotrices, para empresas y más. Protege lo que más valoras con nuestros seguros en Concepción.",
    "url": "https://www.nfcorredores.cl",
    "logo": "https://www.nfcorredores.cl/logo.png",
    "image": "https://www.nfcorredores.cl/logo.png",
    "telephone": "+56-9-XXXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Concepción",
      "addressRegion": "Biobío",
      "addressCountry": "CL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-36.8270",
      "longitude": "-73.0505"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Concepción, Chile"
    },
    "serviceType": [
      "Seguros Personales",
      "Seguros Automotrices",
      "Seguros para Empresas",
      "Seguros de Vida",
      "Seguros de Hogar",
      "Seguros de Responsabilidad Civil"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Seguros",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Seguros Personales",
            "description": "Seguros de vida, accidentes personales y protección familiar"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Seguros para Empresas",
            "description": "Seguros de responsabilidad civil, patrimonio empresarial y riesgos comerciales"
          }
        }
      ]
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": []
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      {/* Modern Hero Background with Geometric Elements */}
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>
      
      {/* Geometric Accent Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-400/30 to-orange-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-teal-400/30 to-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      
      <div
        id="parallax-image"
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center bg-fixed opacity-10"
        style={{
          backgroundImage: "url('/family-stock.jpg')",
          backgroundAttachment: "fixed",
        }}
      ></div>
      
      {/* Scroll Effects Component */}
      <ScrollEffects />
      
      <main className="relative z-10">
        <InicioSection />
        <NosotrosSection />
        <PersonasSection />
        <EmpresasSection />
        <PreguntasSection />
        <ContactoSection />
      </main>
    </div>
  );
}