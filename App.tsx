
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ServicesSection } from './components/ServicesSection';
import { AIBrain } from './components/AIBrain';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { ProcessSection } from './components/ProcessSection';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen selection:bg-cyan-500 selection:text-black">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="ai-builder" className="py-20 px-6 bg-[#080808]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">
              תנו ל-<span className="gradient-text">AI</span> לבנות לכם אסטרטגיה
            </h2>
            <p className="text-gray-400 text-center mb-12 text-lg">
              טכנולוגיה נועזת לעיצובים פורצי דרך
            </p>
            <AIBrain />
          </div>
        </section>

        <section id="services" className="py-20 px-6">
          <ServicesSection />
        </section>

        <section id="process" className="bg-[#080808]">
          <ProcessSection />
        </section>

        <section id="portfolio" className="py-20 px-6">
          <Portfolio />
        </section>

        <section id="contact" className="py-20 px-6 bg-[#080808]">
          <Contact />
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/10 text-center text-gray-500">
        <div className="mb-4">
          <span className="text-2xl font-bold font-modern tracking-tighter text-white">OPTIMIZE</span>
        </div>
        <p>© 2024 Optimize. כל הזכויות שמורות. בניית אתרים ברמה אחרת.</p>
      </footer>
    </div>
  );
};

export default App;
