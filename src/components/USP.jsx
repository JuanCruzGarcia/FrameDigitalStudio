import React from 'react';
import { ShieldCheck, Layers, MessageSquare, TrendingUp } from 'lucide-react';

const USP = () => {
    const points = [
        {
            icon: <Layers className="w-6 h-6" />,
            title: "Enfoque en estructura",
            desc: "Priorizamos una arquitectura sólida y procesos claros."
        },
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "Soluciones a medida",
            desc: "No usamos plantillas. Creamos software adaptado a tu necesidad."
        },
        {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "Comunicación directa",
            desc: "Sin intermediarios innecesarios. Hablás con quien entiende tu proyecto."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Crecimiento conjunto",
            desc: "Buscamos relaciones a largo plazo para acompañar tu evolución."
        }
    ];

    return (
        <section id="usp" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Por qué Frame Digital Studio</h2>
                    <div className="w-20 h-1 bg-white/20"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {points.map((point, index) => (
                        <div key={index} className="group p-6 border border-white/10 hover:border-white/30 transition-all bg-white/2 hover:bg-white/5">
                            <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit group-hover:bg-white/10 transition-colors text-white">
                                {point.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                            <p className="text-sm text-white/60">
                                {point.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

import { Code2 } from 'lucide-react';
export default USP;
