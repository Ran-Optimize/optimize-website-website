
import React from 'react';

const steps = [
  {
    step: '01',
    title: 'אפיון ואסטרטגיה',
    time: '1-3 ימים',
    desc: 'אנחנו צוללים לעסק שלכם, מבינים את קהל היעד ומגדירים את המטרות של האתר.'
  },
  {
    step: '02',
    title: 'עיצוב נועז (UI/UX)',
    time: '3-7 ימים',
    desc: 'יוצרים סקיצות ועיצובים ברמה הגבוהה ביותר, עם דגש על חווית משתמש וייחודיות.'
  },
  {
    step: '03',
    title: 'פיתוח וביצועים',
    time: '5-14 ימים',
    desc: 'הופכים את העיצוב לקוד נקי, מהיר ומותאם לכל המכשירים עם טכנולוגיות ה-Frontend הכי חדישות.'
  },
  {
    step: '04',
    title: 'בדיקות והשקה',
    time: '1-2 ימים',
    desc: 'אופטימיזציה של מהירות, SEO, ובדיקות קפדניות לפני שהאתר עולה לאוויר.'
  }
];

export const ProcessSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-4">איך זה עובד?</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          תהליך מובנה ושקוף שמוודא שאתם מקבלים את התוצאה הטובה ביותר בזמן הקצר ביותר.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <div key={i} className="relative group">
            <div className="absolute -top-10 -right-4 text-8xl font-black text-white/5 group-hover:text-cyan-500/10 transition-colors">
              {s.step}
            </div>
            <div className="glass p-8 rounded-3xl border border-white/5 h-full hover:bg-white/[0.05] transition-all relative z-10">
              <div className="text-cyan-400 font-bold mb-2">{s.time}</div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{s.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -left-4 transform -translate-y-1/2 z-0 opacity-20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 rounded-[30px] border border-cyan-500/20 text-center">
        <p className="text-xl font-medium">
          <span className="text-cyan-400 font-bold">סה"כ זמן ממוצע:</span> בין שבועיים לחודש לפרויקט מקצה לקצה.
        </p>
      </div>
    </div>
  );
};
