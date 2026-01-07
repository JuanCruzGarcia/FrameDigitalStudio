import React from 'react';
import { Code, Globe, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            icon: <Code className="w-8 h-8" />,
            title: "Sistemas Web a Medida",
            description: "Construcción de plataformas robustas y personalizadas para centralizar, gestionar y optimizar la operatividad empresarial."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Infraestructura Digital Corporativa",
            description: "Desarrollo de portales institucionales diseñados con arquitecturas escalables que garantizan presencia, rendimiento y seguridad."
        },
        {
            icon: <Workflow className="w-8 h-8" />,
            title: "Sistematización de Procesos",
            description: "Integración de herramientas tecnológicas para automatizar flujos de trabajo y reducir la fricción operativa."
        }
    ];

    return (
        <section id="services" className="py-24 relative bg-brand-dark/50">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Qué hacemos</h2>
                    <div className="w-20 h-1 bg-white/20"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 border border-white/10 bg-brand-black/50 hover:bg-white/5 transition-colors group"
                        >
                            <div className="mb-6 text-white/80 group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-white/60 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
