import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Theme, Work } from '../types';
import BottomGallery from '../components/BottomGallery';

interface WorkPageProps {
  theme: Theme;
  works: Work[];
}

const BeforeAfterSlider: React.FC<{ before: string; after: string; title: string }> = ({ before, after }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let clientX = 0;
    if ('clientX' in e) {
      clientX = e.clientX;
    } else if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
    }
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  return (
    <div 
      ref={containerRef}
      className="relative aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-700 shadow-2xl group"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <div className="absolute inset-0">
        <img src={after} alt="After" className="w-full h-full object-cover" />
      </div>
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img src={before} alt="Before" className="w-full h-full object-cover grayscale brightness-50" />
        <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg text-white font-bold text-sm">
          BEFORE
        </div>
      </div>
      
      <div className="absolute bottom-6 right-6 px-4 py-2 bg-amber-400 rounded-lg text-slate-900 font-bold text-sm">
        AFTER (FIXED)
      </div>

      <div 
        className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] z-10 pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
          <ChevronLeft size={16} className="text-slate-900 -translate-x-0.5" />
          <ChevronRight size={16} className="text-slate-900 translate-x-0.5" />
        </div>
      </div>
      
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
    </div>
  );
};

const WorkPage: React.FC<WorkPageProps> = ({ theme, works }) => {
  return (
    <div className={`w-full pt-32 pb-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-400 text-sm font-bold mb-6">
            TECHNICAL EXPERTISE
          </div>
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Our Success Portfolio</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Optimized repair strategies for high-end televisions and electronics across Dhaka.
          </p>
        </div>

        <div className="space-y-24 mb-20">
          {works.map((work) => (
            <div key={work.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <BeforeAfterSlider before={work.before} after={work.after} title={work.title} />
              <div className={`p-8 rounded-3xl border transition-all group h-full flex flex-col justify-center ${
                theme === 'dark' ? 'bg-slate-900/40 border-white/5 hover:border-amber-400/30' : 'bg-slate-100/50 border-slate-200 hover:border-amber-400/30'
              }`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`text-3xl font-bold transition-colors group-hover:text-amber-500 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{work.title}</h3>
                  <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
                    {work.brand}
                  </span>
                </div>
                <p className={`text-lg leading-relaxed italic border-l-4 border-amber-400 pl-6 mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>{work.description}</p>
                <div className={`pt-6 border-t flex items-center justify-between text-sm ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'}`}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-amber-500 font-bold">100% Restored</span>
                  </div>
                  <span className={`${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'} font-medium`}>Original Parts Only</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomGallery theme={theme} />
    </div>
  );
};

export default WorkPage;
