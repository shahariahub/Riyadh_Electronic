import React from 'react';
import { Phone, CheckCircle } from 'lucide-react';
import { Theme, Area, Review } from '../types';
import HomePage from './HomePage';
import ReviewCarousel from '../components/ReviewCarousel';
import BottomGallery from '../components/BottomGallery';

interface AreaPageProps {
  areaId: string;
  theme: Theme;
  areas: Area[];
  reviews: Review[];
}

const AreaPage: React.FC<AreaPageProps> = ({ areaId, theme, areas, reviews }) => {
  const area = areas.find(a => a.id === areaId);
  if (!area) return null;

  return (
    <div className="w-full pt-20">
      <section className="py-20 bg-gradient-to-b from-black to-slate-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-400 text-sm font-bold mb-6">
            LOCAL SERVICE: {area.name.toUpperCase()}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Best TV Repair Near {area.name}
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Facing TV issues in {area.name}? Riyadh Electronic offers professional, high-speed on-site television repair services exactly where you are. All brands, all models, 24/7.
          </p>
          <div className="flex justify-center gap-4">
            <a href="tel:01726-725236" className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-amber-400/20">
              <Phone size={20} /> Call Now: 01726-725236
            </a>
          </div>
        </div>
      </section>

      <section className={`py-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Why Choose Us in {area.name}?</h2>
              <div className="space-y-6">
                {[
                  { title: '1-Hour Response Time', desc: `Our technicians are already active in the ${area.name} area.` },
                  { title: 'No Call-Out Fee', desc: `Zero travel charges for customers living in ${area.name}.` },
                  { title: 'Full Panel Guarantee', desc: 'Specialized equipment for OLED and 4K panel restorations.' }
                ].map((feat, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-amber-400" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{feat.title}</h3>
                      <p className={theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1593784991095-a205039470b6?auto=format&fit=crop&q=80&w=1000" alt={`TV Repair in ${area.name}`} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      <ReviewCarousel theme={theme} reviews={reviews} />
      <BottomGallery theme={theme} />
    </div>
  );
};

export default AreaPage;
