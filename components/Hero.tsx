
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse"></div>
      
      <div className="relative z-10 max-w-5xl">
        <h1 className="text-6xl md:text-9xl font-black mb-6 leading-tight tracking-tighter">
          אל תתפשרו.<br />
          <span className="gradient-text">OPTIMIZE.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          אנחנו בונים אתרים שלא רק נראים מדהים, אלא עובדים בשבילכם. 
          עיצוב נועז, מחיר הוגן וביצועים של רכב על.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="glow-button bg-cyan-500 text-black px-10 py-5 rounded-2xl font-black text-xl w-full sm:w-auto">
            התחילו עכשיו
          </button>
          <button className="glass px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all w-full sm:w-auto">
            צפו בעבודות שלנו
          </button>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-black">100+</span>
          <span className="text-xs uppercase tracking-widest mt-1">פרויקטים</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-black">24/7</span>
          <span className="text-xs uppercase tracking-widest mt-1">תמיכה</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-black">0.5s</span>
          <span className="text-xs uppercase tracking-widest mt-1">זמן טעינה</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-black">A+</span>
          <span className="text-xs uppercase tracking-widest mt-1">דירוג חוויה</span>
        </div>
      </div>
    </div>
  );
};
