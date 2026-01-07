import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Methodology from './components/Methodology';
import TargetAudience from './components/TargetAudience';
import ComplementaryServices from './components/ComplementaryServices';
import USP from './components/USP';
import CTA from './components/CTA';
import Footer from './components/Footer';
import NetworkBackground from './components/NetworkBackground';
import SEO from './components/SEO';

function App() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Frame Digital Studio",
    "url": "https://framedigitalstudio.vercel.app/",
    "logo": "https://framedigitalstudio.vercel.app/logo.png", // Reemplazar con URL real si existe
    "description": "Estudio de desarrollo web y diseño digital. Creamos experiencias web modernas, rápidas y optimizadas para tu negocio.",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AR"
    },
    "sameAs": []
  };

  return (
    <div className="bg-brand-black min-h-screen text-white selection:bg-white selection:text-black relative bg-noise">
      <SEO
        title="Frame Digital Studio | Soluciones Digitales Premium"
        description="Estudio de desarrollo web y diseño digital. Creamos experiencias web modernas, rápidas y optimizadas para tu negocio."
        keywords="desarrollo web, diseño web, SEO, aplicaciones web, Frame Digital Studio"
        jsonLd={jsonLd}
      />
      {/* Dynamic Network Background */}
      <NetworkBackground />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Methodology />
          <TargetAudience />
          <ComplementaryServices />
          <USP />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
