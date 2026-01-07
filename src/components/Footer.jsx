import React from 'react';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 border-t border-white/5 bg-brand-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold tracking-tighter mb-2">FRAME</h3>
                        <p className="text-white/50 text-sm">Digital Structure & Development</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="text-white/60 hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="mailto:contacto@frame.studio" className="text-white/60 hover:text-white transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-white/40">
                    <p>© {new Date().getFullYear()} Frame Digital Studio. Todos los derechos reservados.</p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 mt-4 md:mt-0 hover:text-white transition-colors"
                    >
                        Volver arriba
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
