"use client";
import InicioSection from "../components/InicioSection";
import NosotrosSection from "../components/NosotrosSection";
import PersonasSection from "../components/PersonasSection";
import EmpresasSection from "../components/EmpresasSection";
import PreguntasSection from "../components/PreguntasSection";
import ContactoSection from "../components/ContactoSection";
import ScrollEffects from "../components/ScrollEffects";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
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