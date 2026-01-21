import React, { useState } from 'react';
import { Mail, X, Send, User, Phone, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const CTA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const EMAILJS_SERVICE_ID = 'service_uifkq9c';
    const EMAILJS_TEMPLATE_ID = 'template_kw88xln';
    const EMAILJS_PUBLIC_KEY = 'nCN1MAmY5wZDWi4Hr';

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                },
                EMAILJS_PUBLIC_KEY
            );

            setSubmitStatus('success');

            setTimeout(() => {
                setFormData({ name: '', email: '', phone: '', message: '' });
                setIsModalOpen(false);
                setSubmitStatus(null);
            }, 2000);

        } catch (error) {
            console.error('Error EmailJS:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
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
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
                        >
                            <Mail className="w-5 h-5" />
                            Contactanos
                        </button>
                    </div>
                </div>
            </section>
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-slideUp">
                        {/* Header */}
                        <div className="sticky top-0 bg-gradient-to-br from-gray-900 to-black border-b border-white/10 p-6 flex justify-between items-center">
                            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                                <Mail className="w-7 h-7" />
                                Contanos tu proyecto
                            </h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-all"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Formulario */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-6">
                            {/* Nombre */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-white/80">
                                    <User className="w-4 h-4" />
                                    Nombre completo
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 transition-all text-white placeholder-white/40"
                                    placeholder="Juan Pérez"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-white/80">
                                    <Mail className="w-4 h-4" />
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 transition-all text-white placeholder-white/40"
                                    placeholder="juan@ejemplo.com"
                                />
                            </div>

                            {/* Teléfono */}
                            <div className="space-y-2">
                                <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-white/80">
                                    <Phone className="w-4 h-4" />
                                    Teléfono (opcional)
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 transition-all text-white placeholder-white/40"
                                    placeholder="+54 9 11 1234-5678"
                                />
                            </div>

                            {/* Mensaje */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-white/80">
                                    <MessageSquare className="w-4 h-4" />
                                    Contanos sobre tu proyecto
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 transition-all text-white placeholder-white/40 resize-none"
                                    placeholder="Describí brevemente tu proyecto, objetivos y cualquier detalle que consideres importante..."
                                ></textarea>
                            </div>

                            {/* Mensajes de Estado */}
                            {submitStatus === 'success' && (
                                <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
                                    <CheckCircle className="w-5 h-5" />
                                    <span className="font-semibold">¡Mensaje enviado exitosamente! Te contactaremos pronto.</span>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                                    <AlertCircle className="w-5 h-5" />
                                    <span className="font-semibold">Error al enviar el mensaje. Por favor, intenta nuevamente.</span>
                                </div>
                            )}

                            {/* Botones */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Enviar consulta
                                        </>
                                    )}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    disabled={isSubmitting}
                                    className="px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slideUp {
                    from {
                        transform: translateY(20px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }

                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }
            `}</style>
        </>
    );
};

export default CTA;
