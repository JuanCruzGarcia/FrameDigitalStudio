import React from 'react';

const Methodology = () => {
  const steps = [
    {
      number: "01",
      title: "Análisis",
      description: "Entendemos el negocio y los objetivos."
    },
    {
      number: "02",
      title: "Diseño & Arquitectura",
      description: "Definimos la estructura técnica y funcional."
    },
    {
      number: "03",
      title: "Desarrollo",
      description: "Construimos soluciones escalables y mantenibles."
    },
    {
      number: "04",
      title: "Entrega & Evolución",
      description: "Acompañamos el crecimiento del producto."
    }
  ];

  return (
    <section id="methodology" className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo trabajamos</h2>
          <div className="w-20 h-1 bg-white/20"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Line connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-[1px] bg-white/10 -ml-4 z-0"></div>
              )}

              <div className="text-5xl font-bold text-white/5 mb-6 z-10 relative">
                {step.number}
              </div>

              <h3 className="text-lg font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-white/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
