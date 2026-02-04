
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto glass p-12 md:p-16 rounded-[40px] border border-white/5 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black mb-4">מוכנים ל-Upgrade?</h2>
          <p className="text-gray-400 text-lg">השאירו פרטים ונחזור אליכם עם הצעה נועזת במיוחד.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-500 mr-2">שם מלא</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-cyan-500/50 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-500 mr-2">אימייל</label>
              <input type="email" dir="ltr" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-cyan-500/50 outline-none transition-all" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-500 mr-2">איך נוכל לעזור?</label>
            <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 h-32 focus:border-cyan-500/50 outline-none transition-all resize-none"></textarea>
          </div>

          <button className="w-full bg-white text-black py-5 rounded-2xl font-black text-xl hover:bg-cyan-400 transition-colors">
            שלח הודעה
          </button>
        </form>

        <div className="mt-12 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-gray-500 text-xs mb-1">וואטסאפ</p>
            <p className="font-bold">050-123-4567</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs mb-1">אימייל</p>
            <p className="font-bold">hello@optimize.co.il</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs mb-1">מיקום</p>
            <p className="font-bold">תל אביב, ישראל</p>
          </div>
        </div>
      </div>
    </div>
  );
};
