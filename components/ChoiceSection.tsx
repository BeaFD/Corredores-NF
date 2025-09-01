"use client";
import React, { useState, useEffect } from "react";
import { Users, Building, X } from "lucide-react";

interface ChoiceSectionProps {
  isVisible: boolean;
  onChoice: (choice: 'persona' | 'empresa') => void;
  onClose: () => void;
}

export default function ChoiceSection({ isVisible, onChoice, onClose }: ChoiceSectionProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Match the animation duration
  };

  const handleChoice = (choice: 'persona' | 'empresa') => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onChoice(choice);
    }, 300);
  };

  // Reset closing state when modal becomes visible
  useEffect(() => {
    if (isVisible) {
      setIsClosing(false);
    }
  }, [isVisible]);

  if (!isVisible && !isClosing) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm z-[60] flex items-center justify-center p-2 sm:p-4">
      <div className={`bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-2 sm:mx-4 max-h-[90vh] overflow-y-auto relative ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}>
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X size={20} className="sm:w-6 sm:h-6" />
        </button>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 pr-8">
            ¿Qué tipo de seguro necesitas?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
            Elige la opción que mejor se adapte a tus necesidades
          </p>

          {/* Choice buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Persona Button */}
            <button
              onClick={() => handleChoice('persona')}
              className="group bg-gradient-to-br from-red-500 to-red-600 text-white p-4 sm:p-6 md:p-8 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
                <Users size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12 text-white drop-shadow-lg mb-1 sm:mb-2" />
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Persona</h3>
                  <p className="text-red-100 text-sm sm:text-base">
                    Seguros personales, de vida, salud y automotriz
                  </p>
                </div>
              </div>
            </button>

            {/* Empresa Button */}
            <button
              onClick={() => handleChoice('empresa')}
              className="group bg-gradient-to-br from-gray-700 to-gray-800 text-white p-4 sm:p-6 md:p-8 rounded-xl hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
                <Building size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12 text-white drop-shadow-lg mb-1 sm:mb-2" />
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Empresa</h3>
                  <p className="text-gray-100 text-sm sm:text-base">
                    Seguros empresariales, responsabilidad civil y patrimonio
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
