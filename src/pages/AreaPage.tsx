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
      <section className={`py-24 relative overflow-hidden transition-all ${
        theme === 'dark' ? 'bg-gradient-to-b from-black to-slate-900' : 'bg-slate-100'
      }`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500 rounded-full blur-[150px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className={`inline-block px-4 py-2 rounded-2xl border text-xs font-black mb-8 uppercase tracking-[0.2em] ${
            theme === 'dark' ? 'bg-amber-400/20 border-amber-400/30 text-amber-400' : 'bg-amber-400/10 border-amber-400/20 text-amber-600'
          }`}>
            Priority Area: {area.name.toUpperCase()}
          </div>
          <h1 className={`text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Master Repair <br /> Near {area.name}
          </h1>
          <p className={`text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
            Facing panel failure in {area.name}? Riyadh Electronic deploys specialized engineering units for instant on-site restoration.
          </p>
          <div className="flex justify-center gap-4">
            <a href="tel:01726-725236" className="px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-black text-lg flex items-center gap-3 hover:shadow-2xl hover:shadow-amber-400/50 transition-all">
              <Phone size={24} /> 01726-725236
            </a>
          </div>
        </div>
      </section>

      <section className={`py-32 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className={`text-4xl sm:text-6xl font-black mb-12 tracking-tight leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Local Superiority <br /> in {area.name}</h2>
              <div className="space-y-8">
                {[
                  { title: 'Immediate Response', desc: `Our rapid deployment teams are perpetually active within ${area.name}.` },
                  { title: 'Zero Logistics Cost', desc: `Complimentary panel inspection for all citizens of ${area.name}.` },
                  { title: 'Display Specialization', desc: 'The absolute authority in OLED and 8K display restorations.' }
                ].map((feat, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-xl">
                      <CheckCircle className="text-amber-400" size={32} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-black mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{feat.title}</h3>
                      <p className={`font-medium ${theme === 'dark' ? 'text-gray-500' : 'text-slate-500'}`}>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-[3rem] blur-[60px] opacity-50"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-3xl aspect-[4/5] md:aspect-video">
                <img src="https://images.unsplash.com/photo-1593784991095-a205039470b6?auto=format&fit=crop&q=80&w=1000" alt={`TV Repair in ${area.name}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <p className="text-amber-400 font-black text-xs uppercase tracking-[0.2em]">Verified Facility: {area.name}</p>
                </div>
              </div>
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
