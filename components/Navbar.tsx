
import React from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'בית' },
    { id: 'ai-builder', label: 'בונה AI' },
    { id: 'services', label: 'שירותים' },
    { id: 'process', label: 'תהליך' },
    { id: 'portfolio', label: 'תיק עבודות' },
    { id: 'contact', label: 'צור קשר' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 mx-4 my-4 rounded-2xl flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center font-bold text-black text-xl">O</div>
        <span className="text-2xl font-bold font-modern tracking-tighter text-white">OPTIMIZE</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setActiveTab(item.id)}
            className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
              activeTab === item.id ? 'text-cyan-400' : 'text-gray-300'
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>

      <button className="bg-white text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-cyan-400 transition-colors">
        בואו נתחיל
      </button>
    </nav>
  );
};
