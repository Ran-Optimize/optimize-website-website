
import React, { useState } from 'react';
import { generateSiteConcept } from '../services/geminiService';
import { SiteStrategy } from '../types';

export const AIBrain: React.FC = () => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<SiteStrategy | null>(null);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!description) return;
    setLoading(true);
    setError('');
    try {
      const result = await generateSiteConcept(description);
      setStrategy(result);
    } catch (err) {
      setError('חלה שגיאה ביצירת הקונספט. נסו שוב.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">מה אתם רוצים לבנות?</h3>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="לדוגמה: אני רוצה אתר למסעדת שף מודרנית עם תפריט אינטראקטיבי והזמנת שולחן..."
            className="w-full h-48 bg-white/5 border border-white/10 rounded-2xl p-6 text-white focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
          />
          <button
            onClick={handleGenerate}
            disabled={loading}
            className={`w-full py-5 rounded-2xl font-black text-xl transition-all ${
              loading ? 'bg-gray-700 cursor-not-allowed' : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/20'
            }`}
          >
            {loading ? 'ה-AI מעבד נתונים...' : 'צור קונספט ראשוני'}
          </button>
          {error && <p className="text-red-400 text-center">{error}</p>}
        </div>

        <div className="bg-black/50 rounded-2xl border border-white/5 min-h-[400px] p-8 flex flex-col">
          {!strategy ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-500">
              <div className="w-16 h-16 mb-4 rounded-full border-2 border-dashed border-gray-700 flex items-center justify-center">
                <span className="text-2xl">?</span>
              </div>
              <p>הקונספט שלכם יופיע כאן</p>
            </div>
          ) : (
            <div className="animate-in fade-in duration-700">
              <div className="mb-6">
                <h4 className="text-cyan-400 font-bold text-sm uppercase tracking-widest mb-1">שם מותג מוצע</h4>
                <p className="text-3xl font-black">{strategy.brandName}</p>
                <p className="text-gray-400 italic">"{strategy.tagline}"</p>
              </div>

              <div className="mb-8 flex gap-4">
                <div className="flex-1">
                  <h4 className="text-gray-500 text-xs mb-2">צבעים מומלצים</h4>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: strategy.colors.primary }}></div>
                    <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: strategy.colors.secondary }}></div>
                    <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: strategy.colors.accent }}></div>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-500 text-xs mb-2">הערכת מחיר מקצועית</h4>
                  <p className="text-xl font-bold text-green-400">{strategy.priceEstimation}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-gray-500 text-xs uppercase tracking-tighter">מבנה דפים מומלץ</h4>
                {strategy.sections.map((section, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <h5 className="font-bold text-cyan-300">{section.title}</h5>
                    <p className="text-sm text-gray-400">{section.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
