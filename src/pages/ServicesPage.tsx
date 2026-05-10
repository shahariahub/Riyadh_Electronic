import React from 'react';
import { Monitor, Shield, Award, CheckCircle, MapPin, ArrowRight } from 'lucide-react';
import { Theme, Service } from '../types';

interface ServicesPageProps {
  theme: Theme;
  servicesData: Service[];
  setCurrentPage: (page: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ theme, servicesData, setCurrentPage }) => (
  <div className="w-full pt-20">
    <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-4xl sm:text-6xl font-black text-center mb-8 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Our Services</h1>
        <p className={`text-lg text-center max-w-2xl mx-auto font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
          Dhaka's premier technical restoration for all global television brands.
        </p>
      </div>
    </section>

    <section className={`py-24 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <button 
                key={service.id} 
                onClick={() => setCurrentPage(`service-${service.id}`)}
                className={`group p-8 rounded-[2rem] border transition-all duration-500 hover:shadow-2xl hover:shadow-amber-400/20 text-left hover:scale-[1.02] ${
                  theme === 'dark' ? 'bg-slate-900/40 border-slate-800 hover:border-amber-400' : 'bg-slate-50 border-slate-100 hover:border-amber-400 shadow-sm shadow-slate-200/50'
                }`}
              >
                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-400/10 to-orange-500/10 w-fit mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent size={28} className="text-amber-500" />
                </div>
                <h3 className={`text-xl font-black mb-3 group-hover:text-amber-500 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{service.title}</h3>
                <p className={`mb-6 leading-relaxed transition-colors text-sm ${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-300' : 'text-slate-500 group-hover:text-slate-700'}`}>{service.shortDesc}</p>
                <div className="flex items-center gap-3 text-amber-500 group-hover:gap-5 transition-all font-black text-xs uppercase tracking-widest">
                  Explore Repair <ArrowRight size={18} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>

    {/* Service Areas */}
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Service Areas in Dhaka</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            {['Uttara', 'Bashundhara', 'Gulshan', 'Banani', 'Mirpur', 'Dhanmondi'].map((area) => (
              <button 
                key={area} 
                onClick={() => setCurrentPage(`area-${area.toLowerCase()}`)} 
                className="p-6 rounded-xl bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 hover:border-amber-400/50 transition-all text-center"
              >
                <MapPin className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                <p className="text-white font-bold">{area}</p>
              </button>
            ))}
        </div>
        <a href="tel:01726-725236" className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold hover:shadow-2xl hover:shadow-amber-400/50 transition-all">
          Request Home Service
        </a>
      </div>
    </section>

    {/* OLED & Special Panels Section */}
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=1500')] bg-cover opacity-20 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-block px-4 py-2 rounded-2xl bg-amber-400/20 border border-amber-400/30 text-amber-400 text-xs font-black mb-8 uppercase tracking-[0.2em]">
          Technical Excellence
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight leading-[1.1]">
          Master Panel <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Inventory</span>
        </h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed font-medium">
          Dhaka's leading display archive with original OLED, QLED, and specialized LED panels. 
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Global Size Stock', icon: Monitor, color: 'text-amber-400', sub: '32" to 100" Available' },
                { title: 'Pixel Accuracy', icon: Shield, color: 'text-green-400', sub: 'Zero Dead Pixel Guarantee' },
                { title: 'Factory Direct', icon: Award, color: 'text-blue-400', sub: 'Genuine Vendor Parts' },
                { title: 'Certified Install', icon: CheckCircle, color: 'text-orange-400', sub: 'Master Tech Implementation' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4 p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-500 group">
                  <div className="p-3 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-all">
                    <item.icon className={item.color} size={28} />
                  </div>
                  <div>
                    <div className="text-white font-black text-sm mb-1">{item.title}</div>
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-black/40 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/5 shadow-3xl">
              <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse"></div> 
                <span className="uppercase tracking-widest text-sm">Verified Brand Spares</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {['SAMSUNG', 'SONY', 'LG', 'PANASONIC', 'PHILIPS', 'TOSHIBA', 'SHARP', 'WALTON', 'VISION', 'SINGER', 'HAIR', 'XIAOMI'].map((brand) => (
                  <span key={brand} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-gray-400 font-black text-[9px] tracking-widest hover:text-amber-400 hover:border-amber-400 hover:bg-amber-400/10 transition-all cursor-default">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-[3rem] blur-[60px] group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1593784991095-a205039470b6?auto=format&fit=crop&q=80&w=1500" 
                alt="Quality TV Panel Display" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  <p className="text-white font-black text-3xl uppercase tracking-tighter">Stock Ready</p>
                </div>
                <div className="h-1 w-20 bg-amber-500 mb-4"></div>
                <p className="text-amber-400 font-black text-xs uppercase tracking-[0.2em] opacity-80">Master Engineering Facility Dhaka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ServicesPage;
