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
    <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-5xl font-bold text-center mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Our Services</h1>
        <p className={`text-xl text-center max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
          Complete repair solutions for all TV brands and electronic devices
        </p>
      </div>
    </section>

    <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <button 
                key={service.id} 
                onClick={() => setCurrentPage(`service-${service.id}`)}
                className={`group p-8 rounded-2xl border transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/20 text-left hover:scale-105 ${
                  theme === 'dark' ? 'bg-black border-slate-800 hover:border-amber-400' : 'bg-slate-50 border-slate-200 hover:border-amber-400'
                }`}
              >
                <div className="p-4 rounded-xl bg-gradient-to-r from-amber-400/20 to-orange-500/20 w-fit mb-4 group-hover:from-amber-400/40 group-hover:to-orange-500/40 transition-all">
                  <IconComponent size={32} className="text-amber-400" />
                </div>
                <h3 className={`text-2xl font-bold mb-2 group-hover:text-amber-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{service.title}</h3>
                <p className={`mb-4 transition-colors ${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-300' : 'text-slate-600 group-hover:text-slate-800'}`}>{service.shortDesc}</p>
                <div className="flex items-center gap-2 text-amber-400 group-hover:gap-3 transition-all">
                  View Details <ArrowRight size={18} />
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
    <section className="py-24 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=1500')] bg-cover opacity-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-block px-4 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-400 text-sm font-bold mb-6 uppercase tracking-widest">
          PANEL INVENTORY
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Genuine OLED Panels for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Every Brand</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
          As Dhaka's leading display specialist, we carry an exhaustive inventory of original OLED, QLED, and LED panels. From specialized 32-inch local units to premium 85-inch 4K panels, we guarantee a factory-perfect fit.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: '32" - 85" Size Availability', icon: Monitor, color: 'text-amber-400' },
                { title: 'Zero Dead Pixel Guarantee', icon: Shield, color: 'text-green-400' },
                { title: 'Factory Fresh Stock', icon: Award, color: 'text-blue-400' },
                { title: 'Certified Tech Install', icon: CheckCircle, color: 'text-orange-400' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-all duration-300 group">
                  <div className="p-3 rounded-lg bg-white/5 group-hover:bg-amber-400/20 transition-all">
                    <item.icon className={item.color} size={24} />
                  </div>
                  <span className="text-white font-bold pt-1">{item.title}</span>
                </div>
              ))}
            </div>
            <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 border border-white/5 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div> Available Brands
              </h3>
              <div className="flex flex-wrap gap-2">
                {['SAMSUNG', 'SONY', 'LG', 'PANASONIC', 'PHILIPS', 'TOSHIBA', 'SHARP', 'WALTON', 'VISION', 'SINGER', 'HAIR', 'XIAOMI'].map((brand) => (
                  <span key={brand} className="px-3 py-1.5 rounded-md bg-black border border-slate-800 text-gray-400 font-bold text-[10px] tracking-widest hover:text-amber-400 hover:border-amber-400 transition-all cursor-default">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1593784991095-a205039470b6?auto=format&fit=crop&q=80&w=1500" 
                alt="Quality TV Panel Display" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
                  <p className="text-white font-bold text-2xl">Stock Ready</p>
                </div>
                <p className="text-amber-400 font-semibold tracking-wide">Panels from 32" to 85" High Performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ServicesPage;
