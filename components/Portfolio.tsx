
import React from 'react';

const projects = [
  { title: 'Lumiere Fashion', category: 'E-commerce', img: 'https://picsum.photos/seed/fashion/800/600' },
  { title: 'TechFlow SaaS', category: 'Landing Page', img: 'https://picsum.photos/seed/tech/800/600' },
  { title: 'ArchVibe Studio', category: 'Portfolio', img: 'https://picsum.photos/seed/arch/800/600' },
  { title: 'Nexus Crypto', category: 'Web App', img: 'https://picsum.photos/seed/crypto/800/600' },
];

export const Portfolio: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-4">עבודות נבחרות</h2>
        <p className="text-gray-400">דוגמאות ליכולות העיצוב הנועזות שלנו</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="relative group overflow-hidden rounded-3xl bg-gray-900 aspect-video">
            <img 
              src={p.img} 
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-cyan-400 text-sm font-bold mb-2 uppercase tracking-widest">{p.category}</span>
              <h3 className="text-3xl font-black">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="px-8 py-4 border border-white/10 rounded-full font-bold hover:bg-white/5 transition-all">
          צפו בתיק העבודות המלא
        </button>
      </div>
    </div>
  );
};
