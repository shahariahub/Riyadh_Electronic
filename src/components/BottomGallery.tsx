import React from 'react';
import { Theme } from '../types';

interface BottomGalleryProps {
  theme: Theme;
}

const BottomGallery: React.FC<BottomGalleryProps> = ({ theme }) => (
  <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-slate-50'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
      <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Professional Repair Showcase</h2>
      <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>Real visuals from our electronics restoration workshop in Dhaka</p>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="group relative rounded-2xl overflow-hidden aspect-square border border-white/10">
          <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=800" alt="New LED Installation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
            <p className="text-white font-bold text-center">Modern TV Installation</p>
          </div>
        </div>
        <div className="group relative rounded-2xl overflow-hidden aspect-square border border-white/10">
          <img src="https://images.unsplash.com/photo-1509281584218-db81d6363a03?auto=format&fit=crop&q=80&w=800" alt="Broken LED Panel" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
            <p className="text-white font-bold text-center">Cracked Panel Diagnosis</p>
          </div>
        </div>
        <div className="group relative rounded-2xl overflow-hidden aspect-square border border-white/10">
          <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" alt="Motherboard Soldering" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
            <p className="text-white font-bold text-center">Precision PCB Repair</p>
          </div>
        </div>
        <div className="group relative rounded-2xl overflow-hidden aspect-square border border-white/10">
          <img src="https://images.unsplash.com/photo-1593784991095-a205039470b6?auto=format&fit=crop&q=80&w=800" alt="Panel Calibration" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
            <p className="text-white font-bold text-center">4K Panel Calibration</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BottomGallery;
