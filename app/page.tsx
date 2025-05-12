"use client";
import InicioSection from "../components/InicioSection";
import NosotrosSection from "../components/NosotrosSection";
import PersonasSection from "../components/PersonasSection";
import EmpresasSection from "../components/EmpresasSection";
import PreguntasSection from "../components/PreguntasSection";
import ContactoSection from "../components/ContactoSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-800 text-white">
      {/* Background Image with Parallax */}
      <div
        id="parallax-image"
        className="absolute top-0 left-0 w-full h-[100vh] bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/family-stock.jpg')",
        }}
      ></div>
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