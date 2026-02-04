
import React from 'react';

const services = [
  {
    title: 'דפי נחיתה ממירים',
    desc: 'עיצוב חד ומדויק שמוביל את הגולש בדיוק לאן שרציתם.',
    price: 'החל מ-1,500 ₪',
    time: 'עד 7 ימי עסקים',
    icon: '🚀'
  },
  {
    title: 'חנות איקומרס מלאה',
    desc: 'חווית קניה נוזלית, אינטגרציות סליקה וניהול מלאי מתקדם.',
    price: 'החל מ-5,000 ₪',
    time: '21-35 ימי עסקים',
    icon: '🛒'
  },
  {
    title: 'אתרי תדמית יוקרתיים',
    desc: 'עבור עסקים שרוצים לשדר ביטחון, מקצועיות וחדשנות.',
    price: 'החל מ-3,500 ₪',
    time: '10-14 ימי עסקים',
    icon: '✨'
  },
  {
    title: 'פיתוח אפליקציות Web',
    desc: 'פתרונות מורכבים ב-React עם ביצועים שלא נראו כמותם.',
    price: 'החל מ-10,000 ₪',
    time: 'בהתאם לאפיון',
    icon: '📱'
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-5xl font-black mb-4 tracking-tight text-white">השירותים שלנו</h2>
          <p className="text-gray-400 max-w-lg text-lg">
            אנחנו לא רק בונים אתרים. אנחנו בונים מנועי צמיחה לעסק שלכם במחירים שפויים.
          </p>
        </div>
        <div className="text-cyan-500 font-bold hover:underline cursor-pointer">
          כל השירותים &rarr;
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div key={i} className="group glass p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500 flex flex-col h-full">
            <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{s.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">{s.desc}</p>
            
            <div className="pt-6 border-t border-white/5 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 uppercase">זמן אספקה:</span>
                <span className="text-xs text-white font-bold">{s.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 uppercase">השקעה:</span>
                <span className="text-cyan-500 font-black">{s.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
