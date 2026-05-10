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
    {/* Hero Section */}
    <section className={`relative min-h-screen overflow-hidden pt-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse transition-opacity ${theme === 'dark' ? 'bg-amber-400/15 opacity-100' : 'bg-amber-400/10 opacity-50'}`}></div>
        <div className={`absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl animate-pulse transition-opacity ${theme === 'dark' ? 'bg-orange-500/15 opacity-100' : 'bg-orange-500/10 opacity-50'}`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full py-20">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className={`text-5xl md:text-7xl font-bold leading-tight transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Best TV & LED Repair Center in Dhaka
            </h1>
            <p className={`text-xl md:text-2xl max-w-2xl transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
              Expert television technicians providing 24/7 home service across Dhaka city. Same-day repair for Samsung, Sony, LG, and more.
            </p>

            <div className="flex flex-wrap gap-4 pt-8">
              <a href="tel:01726-725236" className="group px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold text-lg hover:shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 flex items-center gap-2">
                <Phone size={20} /> Call Now
              </a>
              <a href="https://wa.me/8801726725236" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 rounded-xl bg-green-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center gap-2">
                <MessageCircle size={20} /> WhatsApp
              </a>
              <button onClick={() => setCurrentPage('services')} className="group px-8 py-4 rounded-xl bg-slate-800 text-white font-bold text-lg border border-slate-700 hover:border-amber-400 transition-all duration-300 flex items-center gap-2">
                Browse Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-2xl">
              {[
                { icon: '⚡', text: '24/7 Service' },
                { icon: '🔧', text: 'Same Day Repair' },
                { icon: '⭐', text: '500+ Reviews' },
                { icon: '👨‍🔧', text: 'Expert Techs' }
              ].map((badge, i) => (
                <div key={i} className={`p-4 rounded-lg backdrop-blur-md border text-center transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' ? 'bg-white/10 border-white/20 hover:border-amber-400/50' : 'bg-slate-50 border-slate-200 hover:border-amber-400'
                }`}>
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <p className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{badge.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>

    {/* Featured Services */}
    <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Popular Services</h2>
        <p className={`text-center mb-16 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>Quick access to our most requested repair services</p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {servicesData.slice(0, 8).map((service) => {
            const IconComponent = service.icon;
            return (
              <button key={service.id} onClick={() => setCurrentPage(`service-${service.id}`)}
                className={`group p-6 rounded-xl border transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/20 text-left hover:scale-105 ${
                  theme === 'dark' ? 'bg-gradient-to-br from-slate-900 to-black border-slate-800 hover:border-amber-400' : 'bg-white border-slate-200 hover:border-amber-400'
                }`}>
                <div className="p-3 rounded-lg bg-gradient-to-r from-amber-400/20 to-orange-500/20 w-fit mb-4 group-hover:from-amber-400/40 group-hover:to-orange-500/40 transition-all">
                  <IconComponent size={24} className="text-amber-400" />
                </div>
                <h3 className={`font-bold mb-2 group-hover:text-amber-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{service.title}</h3>
                <p className={`text-sm transition-colors ${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-300' : 'text-slate-500 group-hover:text-slate-700'}`}>{service.shortDesc}</p>
              </button>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button onClick={() => setCurrentPage('services')} className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold hover:shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 flex items-center gap-2 mx-auto">
            View All Services in Dhaka <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>

    {/* Local Service Areas Section */}
    <section className={`py-20 border-t ${theme === 'dark' ? 'bg-black border-slate-800' : 'bg-white border-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Serving All Major Areas in Dhaka</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Uttara', 'Gulshan', 'Banani', 'Bashundhara', 'Mirpur', 'Dhanmondi'].map((area) => (
            <button 
              key={area}
              onClick={() => setCurrentPage(`area-${area.toLowerCase()}`)}
              className={`p-4 rounded-xl border text-center transition-all hover:border-amber-400 hover:scale-105 ${
                theme === 'dark' ? 'bg-slate-900/50 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            >
              <MapPin className="w-5 h-5 text-amber-400 mx-auto mb-2" />
              <span className="font-bold text-sm">{area}</span>
            </button>
          ))}
        </div>
      </div>
    </section>

    {/* Trust Stats */}
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="text-center">
                <div className={`bg-gradient-to-r ${stat.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon size={32} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Why Choose Section */}
    <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-gradient-to-b from-slate-900 to-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Why Choose Riyadh Electronic</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: 'Expert Technicians', desc: '10+ years of experience with certified expertise' },
            { icon: Zap, title: 'Fast Service', desc: 'Same-day repair available for most issues' },
            { icon: Award, title: 'Quality Guaranteed', desc: 'All repairs come with warranty and guarantee' },
            { icon: Clock, title: '24/7 Available', desc: 'Open 24 hours, 7 days a week' },
            { icon: CheckCircle, title: 'Genuine Parts', desc: 'Only original parts used in all repairs' },
            { icon: Home, title: 'Home Service', desc: 'Free diagnosis and on-site repair available' }
          ].map((item, i) => (
            <div key={i} className={`p-8 rounded-xl border transition-all duration-300 hover:scale-105 group ${
              theme === 'dark' ? 'bg-black border-slate-800 hover:border-amber-400/50' : 'bg-slate-50 border-slate-200 hover:border-amber-400'
            }`}>
              <div className="p-3 rounded-lg bg-gradient-to-r from-amber-400/20 to-orange-500/20 w-fit mb-4 group-hover:from-amber-400/40 group-hover:to-orange-500/40 transition-all">
                <item.icon size={28} className="text-amber-400" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ReviewCarousel theme={theme} reviews={reviews} />
    <BottomGallery theme={theme} />

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-r from-amber-400/10 to-orange-500/10 border-t border-amber-400/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Need Immediate Repair?</h2>
        <p className="text-xl text-gray-300 mb-8">Our experts are ready to help 24/7</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:01726-725236" className="group px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold hover:shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 flex items-center justify-center gap-2">
            <Phone size={20} /> Call 01726-725236
          </a>
          <a href="https://wa.me/8801726725236" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 rounded-xl bg-green-500 text-white font-bold hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-2">
            <MessageCircle size={20} /> WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
