import React from 'react';

const ComplementaryServices = () => {
    return (
        <section className="py-24 border-y border-white/5 bg-gradient-to-b from-brand-black to-brand-dark relative overflow-hidden">
            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="inline-block mb-6 px-3 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                    <span className="text-xs font-medium text-white/50 uppercase tracking-widest">Servicio Complementario</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Presencia Digital</h2>
                <p className="max-w-2xl mx-auto text-white/60 text-lg leading-relaxed">
                    Gestión estratégica de canales corporativos como parte de una estructura digital integral, asegurando coherencia institucional y alineación con los sistemas desarrollados. Un servicio de soporte orientado a la consistencia del mensaje y la continuidad operativa.
                </p>
            </div>
        </section>
    );
};

export default ComplementaryServices;
