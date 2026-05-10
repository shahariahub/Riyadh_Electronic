import React from 'react';
import { Phone, MessageCircle, ArrowRight, Shield, Zap, Award, Clock, CheckCircle, Home, MapPin } from 'lucide-react';
import { Theme, Service, TrustStat, Review } from '../types';
import ReviewCarousel from '../components/ReviewCarousel';
import BottomGallery from '../components/BottomGallery';

interface HomePageProps {
  theme: Theme;
  servicesData: Service[];
  trustStats: TrustStat[];
  reviews: Review[];
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ 
  theme, 
  servicesData, 
  trustStats, 
  reviews,
  setCurrentPage 
}) => (
  <div className="w-full">
    <section className={`relative min-h-[90vh] md:min-h-screen overflow-hidden pt-24 pb-12 transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,0.08),transparent_70%)]`}></div>
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-[120px] animate-pulse transition-opacity duration-700 ${theme === 'dark' ? 'bg-amber-400/10' : 'bg-amber-400/5'}`}></div>
        <div className={`absolute bottom-20 right-10 w-72 h-72 rounded-full blur-[120px] animate-pulse transition-opacity duration-700 ${theme === 'dark' ? 'bg-orange-500/10' : 'bg-orange-500/5'}`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 max-w-4xl">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl border text-xs font-black tracking-[0.2em] uppercase transition-all duration-500 ${
              theme === 'dark' ? 'bg-white/5 border-white/10 text-amber-400' : 'bg-amber-50 border-amber-200 text-amber-600'
            }`}>
              <Zap size={14} className="fill-current" /> Premium Tech Support
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight">
              Professional TV <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Repair Experts</span>
            </h1>
            
            <p className={`text-base md:text-xl max-w-2xl leading-relaxed transition-colors duration-500 font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
              Reliable electronics repair in Dhaka for over 10 years. Specializing in Samsung, Sony, LG, and all major brands with 24/7 home service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="tel:01726-725236" className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-black text-base hover:shadow-[0_0_40px_rgba(251,191,36,0.3)] transition-all duration-300 flex items-center justify-center gap-3">
                <Phone size={20} className="group-hover:rotate-12 transition-transform" /> 01726-725236
              </a>
              <a href="https://wa.me/8801726725236" target="_blank" rel="noopener noreferrer" className={`group px-8 py-4 rounded-2xl font-black text-base border transition-all duration-300 flex items-center justify-center gap-3 ${
                theme === 'dark' ? 'bg-white/5 border-white/10 hover:border-green-500 text-white' : 'bg-white border-slate-200 hover:border-green-500 text-slate-900 shadow-sm'
              }`}>
                <MessageCircle size={20} className="text-green-500 group-hover:scale-110 transition-transform" /> WhatsApp
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex gap-4 pt-12 overflow-x-auto pb-4 no-scrollbar">
              {[
                { icon: '⚡', title: 'FAST', sub: 'SAME DAY FIX' },
                { icon: '🔧', title: 'SPARES', sub: 'ORIGINAL PARTS' },
                { icon: '⭐', title: 'RATED', sub: '500+ REVIEWS' },
                { icon: '👨‍🔧', title: 'TECH', sub: 'EXPERT TEAM' }
              ].map((badge, i) => (
                <div key={i} className={`p-5 rounded-3xl border text-center transition-all duration-500 hover:scale-105 min-w-[160px] ${
                  theme === 'dark' ? 'bg-white/5 border-white/10 hover:border-amber-400/50' : 'bg-white border-slate-100 shadow-sm hover:border-amber-400'
                }`}>
                  <div className="text-3xl mb-3">{badge.icon}</div>
                  <div className={`font-black text-sm tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{badge.title}</div>
                  <p className={`font-black text-[9px] tracking-[0.2em] uppercase mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}`}>{badge.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Services */}
    <section className={`py-24 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-black text-center mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Popular Services</h2>
        <p className={`text-center mb-16 max-w-2xl mx-auto font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Dhaka's most-trusted repair solutions for all electronics</p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {servicesData.slice(0, 8).map((service) => {
            const IconComponent = service.icon;
            return (
              <button key={service.id} onClick={() => setCurrentPage(`service-${service.id}`)}
                className={`group p-8 rounded-3xl border transition-all duration-500 hover:shadow-2xl hover:shadow-amber-400/20 text-left hover:scale-[1.03] ${
                  theme === 'dark' ? 'bg-gradient-to-br from-slate-900 to-black border-slate-800 hover:border-amber-400' : 'bg-white border-slate-200 hover:border-amber-400 shadow-sm'
                }`}>
                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-400/10 to-orange-500/10 w-fit mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent size={28} className="text-amber-400" />
                </div>
                <h3 className={`text-xl font-black mb-3 group-hover:text-amber-500 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{service.title}</h3>
                <p className={`text-sm leading-relaxed transition-colors ${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-300' : 'text-slate-500 group-hover:text-slate-700'}`}>{service.shortDesc}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>

    {/* Local Service Areas Section */}
    <section className={`py-24 border-t ${theme === 'dark' ? 'bg-black border-slate-800' : 'bg-white border-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-black text-center mb-16 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Service Across Dhaka City</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {['Uttara', 'Gulshan', 'Banani', 'Bashundhara', 'Mirpur', 'Dhanmondi'].map((area) => (
            <button 
              key={area}
              onClick={() => setCurrentPage(`area-${area.toLowerCase()}`)}
              className={`p-6 rounded-3xl border text-center transition-all duration-300 hover:border-amber-400 hover:scale-110 ${
                theme === 'dark' ? 'bg-slate-900/50 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900 shadow-sm'
              }`}
            >
              <div className="w-12 h-12 bg-amber-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-amber-500" />
              </div>
              <span className="font-black text-xs uppercase tracking-widest">{area}</span>
            </button>
          ))}
        </div>
      </div>
    </section>

    {/* Trust Stats */}
    <section className={`py-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-black' : 'bg-slate-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {trustStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="text-center group">
                <div className={`bg-gradient-to-br ${stat.color} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <Icon size={36} className="text-white" />
                </div>
                <div className="text-4xl font-black text-white mb-2 tracking-tighter">{stat.value}</div>
                <p className="text-amber-400/70 font-black text-[10px] uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Why Choose Section */}
    <section className={`py-24 transition-colors duration-300 ${theme === 'dark' ? 'bg-gradient-to-b from-slate-900 to-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-black text-center mb-20 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Why Choose Riyadh Electronic</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: 'Expert Technicians', desc: '10+ years of hardware excellence and certified mastery' },
            { icon: Zap, title: 'Instant Support', desc: 'Fast turnaround and same-day repair for major issues' },
            { icon: Award, title: 'Premium Warranty', desc: 'Official service guarantee on all labor and original parts' },
            { icon: Clock, title: 'Available 24/7', desc: 'Technical support available every single hour of the day' },
            { icon: CheckCircle, title: 'Verified Originals', desc: 'We only use original genuine spare parts directly from vendors' },
            { icon: Home, title: 'Expert Home Service', desc: 'Professional on-site diagnosis and repair across Dhaka city' }
          ].map((item, i) => (
            <div key={i} className={`p-10 rounded-3xl border transition-all duration-500 hover:scale-[1.02] group ${
              theme === 'dark' ? 'bg-black border-slate-800 hover:border-amber-400/50' : 'bg-slate-50 border-slate-200 hover:border-amber-400 shadow-sm'
            }`}>
              <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-400/10 to-orange-500/10 w-fit mb-8 group-hover:scale-110 transition-transform">
                <item.icon size={32} className="text-amber-500" />
              </div>
              <h3 className={`text-2xl font-black mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
              <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ReviewCarousel theme={theme} reviews={reviews} />
    <BottomGallery theme={theme} />

    {/* CTA Section */}
    <section className={`py-24 border-t ${theme === 'dark' ? 'bg-slate-900 border-white/5' : 'bg-amber-50 border-amber-100'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl sm:text-4xl font-black mb-6 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Ready to Restore Your View?</h2>
        <p className={`text-xl mb-12 font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Our master technicians are standing by in Dhaka City</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:01726-725236" className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-black text-base hover:shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 flex items-center justify-center gap-3">
            <Phone size={20} className="group-hover:rotate-12 transition-transform" /> Call Specialist
          </a>
          <a href="https://wa.me/8801726725236" target="_blank" rel="noopener noreferrer" className={`group px-8 py-4 rounded-2xl text-white font-black text-base bg-green-500 hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-3`}>
            <MessageCircle size={20} className="group-hover:scale-110 transition-transform" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
