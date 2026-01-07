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

function App() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-brand-black min-h-screen text-white selection:bg-white selection:text-black relative bg-noise">
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
