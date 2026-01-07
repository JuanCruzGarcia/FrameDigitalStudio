import React from 'react';
import { ShieldCheck, Layers, TrendingUp, Code2, Cpu, Briefcase } from 'lucide-react';

const USP = () => {
    const points = [
        {
            icon: <Layers className="w-6 h-6" />,
            title: "Arquitectura Escalable",
            desc: "Diseñamos estructuras digitales robustas para garantizar estabilidad y rendimiento sostenido."
        },
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "Soluciones a Medida",
            desc: "Desarrollamos sistemas personalizados enfocados en resolver problemáticas específicas del negocio."
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Control de Procesos",
            desc: "Implementamos metodologías rigurosas que aseguran transparencia y previsibilidad en la ejecución."
        },
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "Integración de Sistemas",
            desc: "Unificamos plataformas dispersas para centralizar datos y optimizar la operatividad."
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: "Consultoría Técnica",
            desc: "Aportamos criterio experto para fundamentar decisiones de inversión tecnológica."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Respaldo Continuo",
            desc: "Acompañamos la evolución tecnológica de la empresa mediante una visión estratégica a largo plazo."
        }
    ];

    return (
        <section id="usp" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Por qué Frame Digital Studio</h2>
                    <div className="w-20 h-1 bg-white/20"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default USP;
