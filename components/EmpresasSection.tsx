"use client";
import React, { useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARDS = [
  {
    title: "Seguro 1",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Illo, quasi voluptates explicabo neque eos amet sed distinctio architecto dolores nam, doloremque ipsum consequatur!",
      "Soluta fugit fuga temporibus asperiores a hic.",
    ],
  },
  {
    title: "Seguro 2",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Illo, quasi voluptates explicabo neque eos amet sed distinctio architecto dolores nam, doloremque ipsum consequatur!",
      "Soluta fugit fuga temporibus asperiores a hic.",
    ],
  },
  {
    title: "Seguro 3",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Illo, quasi voluptates explicabo neque eos amet sed distinctio architecto dolores nam, doloremque ipsum consequatur!",
      "Soluta fugit fuga temporibus asperiores a hic.",
    ],
  },
  {
    title: "Seguro 4",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Illo, quasi voluptates explicabo neque eos amet sed distinctio architecto dolores nam, doloremque ipsum consequatur!",
      "Soluta fugit fuga temporibus asperiores a hic.",
    ],
  },
  {
    title: "Seguro 5",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Illo, quasi voluptates explicabo neque eos amet sed distinctio architecto dolores nam, doloremque ipsum consequatur!",
      "Soluta fugit fuga temporibus asperiores a hic.",
    ],
  },
  {
    title: "Seguro 6",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Illo, quasi voluptates explicabo neque eos amet sed distinctio architecto dolores nam, doloremque ipsum consequatur!",
      "Soluta fugit fuga temporibus asperiores a hic.",
      "Este es un texto largo para probar el desbordamiento de texto en el contenedor.",
    ],
  },
];

export default function EmpresasSection() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3.2,
      spacing: 16,
      origin: "center",
    },
    mode: "free-snap",
    breakpoints: {
      "(max-width: 900px)": {
        slides: { perView: 1.2, spacing: 12, origin: "center" },
      },
      "(max-width: 1200px)": {
        slides: { perView: 2.2, spacing: 14, origin: "center" },
      },
    },
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const keenSliderRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll every 10 seconds, pause on hover
  useEffect(() => {
    const start = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        instanceRef.current?.next();
      }, 10000);
    };
    const stop = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    start();

    if (keenSliderRef.current) {
      keenSliderRef.current.addEventListener("mouseenter", stop);
      keenSliderRef.current.addEventListener("mouseleave", start);
    }

    return () => {
      stop();
      if (keenSliderRef.current) {
        keenSliderRef.current.removeEventListener("mouseenter", stop);
        keenSliderRef.current.removeEventListener("mouseleave", start);
      }
    };
  }, [instanceRef]);

  return (
    <section
      id="empresas"
      className="min-h-screen bg-gray-100 text-gray-800 p-8 sm:p-20"
    >
      <h2 className="text-4xl font-bold mb-6 text-center relative">
        Empresas
        <span className="block w-16 h-1 bg-gray-800 mx-auto mt-4"></span>
      </h2>
      <div className="relative flex items-center justify-center max-w-5xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-0 z-10 bg-white rounded-full shadow p-2 top-1/2 -translate-y-1/2 hover:bg-gray-200 transition"
          aria-label="Anterior"
          style={{ left: -40 }}
        >
          <ChevronLeft className="w-7 h-7 text-gray-700" />
        </button>
        {/* Carousel */}
        <div
          ref={(node) => {
            sliderRef(node);
            keenSliderRef.current = node;
          }}
          className="keen-slider w-full"
          style={{ minHeight: 220 }}
        >
          {CARDS.map((card, idx) => (
            <div
              key={idx}
              className="keen-slider__slide flex flex-col items-start justify-center bg-white rounded-lg px-4 py-6 shadow-md"
              style={{
                minWidth: 200,
                maxWidth: 240,
                boxSizing: "border-box",
                marginBottom: "10px", // Added margin at the bottom
              }}
            >
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              {Array.isArray(card.description) ? (
                card.description.map((paragraph, index) => (
                  <p key={index} className="text-sm text-gray-600">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-sm text-gray-600">{card.description}</p>
              )}
            </div>
          ))}
        </div>
        {/* Right Arrow */}
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-0 z-10 bg-white rounded-full shadow p-2 top-1/2 -translate-y-1/2 hover:bg-gray-200 transition"
          aria-label="Siguiente"
          style={{ right: -40 }}
        >
          <ChevronRight className="w-7 h-7 text-gray-700" />
        </button>
      </div>
    </section>
  );
}