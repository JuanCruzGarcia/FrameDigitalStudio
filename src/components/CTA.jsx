import React from 'react';
import { Mail } from 'lucide-react';

const CTA = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    ¿Tenés un proyecto digital en mente?
                </h2>
                <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
                    Hablemos sobre cómo podemos estructurar y escalar tu visión digital.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <p
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
                    >
                        <Mail className="w-5 h-5" />
                        Contactanos
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTA;
