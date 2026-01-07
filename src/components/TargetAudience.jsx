import React from 'react';
import { Target, Building, Users, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const TargetAudience = () => {
    const audienceList = [
        {
            icon: Building,
            title: "Empresas",
            description: "Organizaciones establecidas."
        },
        {
            icon: Users,
            title: "Startups",
            description: "Crecimiento acelerado."
        },
        {
            icon: Target,
            title: "Pymes",
            description: "Eficiencia y control."
        },
        {
            icon: Code,
            title: "SaaS",
            description: "Plataformas digitales."
        }
    ];

    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60"
                        >
                            Para quién trabajamos
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-white/70 mb-8 leading-relaxed"
                        >
                            Nos especializamos en trabajar con organizaciones que buscan calidad, estructura y un socio tecnológico comprometido con sus objetivos comerciales.
                        </motion.p>

                        <ul className="space-y-4">
                            {[
                                "Pymes y empresas en crecimiento",
                                "Negocios que necesitan sistemas a medida",
                                "Equipos que buscan un partner tecnológico con experiencia",
                                "Proyectos que requieren escalabilidad y mantenimiento"
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="flex items-center gap-3 text-white/80"
                                >
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full box-shadow-glow"></div>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:w-1/2 grid grid-cols-2 gap-4">
                        {audienceList.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
                            >
                                <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                                    <item.icon className="w-6 h-6 text-white/80 group-hover:text-blue-400 transition-colors" />
                                </div>
                                <h4 className="font-bold text-lg text-white mb-1">{item.title}</h4>
                                <p className="text-sm text-white/50">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
