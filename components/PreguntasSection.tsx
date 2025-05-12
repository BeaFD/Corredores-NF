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

  const faqs = [
    {
      question: "¿Qué tipos de seguros ofrecen?",
      answer: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error in sequi corrupti ducimus temporibus cumque nihil et dolore perferendis, deserunt voluptas doloribus amet quam eius nostrum sint adipisci qui!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error in sequi corrupti ducimus temporibus cumque nihil et dolore perferendis, deserunt voluptas doloribus amet quam eius nostrum sint adipisci qui!",
      ],
    },
    {
      question: "¿Cómo puedo cotizar un seguro?",
      answer: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error in sequi corrupti ducimus temporibus cumque nihil et dolore perferendis, deserunt voluptas doloribus amet quam eius nostrum sint adipisci qui!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error in sequi corrupti ducimus temporibus cumque nihil et dolore perferendis, deserunt voluptas doloribus amet quam eius nostrum sint adipisci qui!",
      ],
    },
    {
      question: "¿Qué beneficios tienen sus seguros?",
      answer: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error in sequi corrupti ducimus temporibus cumque nihil et dolore perferendis, deserunt voluptas doloribus amet quam eius nostrum sint adipisci qui!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error in sequi corrupti ducimus temporibus cumque nihil et dolore perferendis, deserunt voluptas doloribus amet quam eius nostrum sint adipisci qui!",
      ],
    },
  ];

  return (
    <section
      id="preguntas"
      className="min-h-screen bg-white text-gray-800 p-8 sm:p-20"
    >
      <h2 className="text-4xl font-bold mb-6 text-center relative">
        Preguntas Frecuentes
        <span className="block w-16 h-1 bg-gray-800 mx-auto mt-4"></span>
      </h2>
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="text-lg font-bold flex justify-between w-full items-center"
              aria-expanded={openFAQs[index]}
              aria-controls={`faq-content-${index}`}
              type="button"
            >
              {faq.question}
              <span className="ml-2">
                {openFAQs[index] ? (
                  <ChevronUp className="w-5 h-5 transition-transform duration-200" />
                ) : (
                  <ChevronDown className="w-5 h-5 transition-transform duration-200" />
                )}
              </span>
            </button>
            <div
              id={`faq-content-${index}`}
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openFAQs[index]
                  ? "max-h-96 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-gray-600 space-y-2 px-1 py-1">
                {faq.answer.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}