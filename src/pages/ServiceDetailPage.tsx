import React from 'react';
import { Phone, MessageCircle, ChevronDown, Clock, Award, CheckCircle } from 'lucide-react';
import { Theme, Service, Review } from '../types';
import ReviewCarousel from '../components/ReviewCarousel';

interface ServiceDetailPageProps {
  serviceId: string;
  theme: Theme;
  servicesData: Service[];
  reviews: Review[];
  setCurrentPage: (page: string) => void;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ 
  serviceId, 
  theme, 
  servicesData, 
  reviews, 
  setCurrentPage 
}) => {
  const service = servicesData.find(s => s.id === serviceId);
  if (!service) return null;

  const IconComponent = service.icon;

  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-slate-50'
      }`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setCurrentPage('services')} 
            className={`flex items-center gap-2 mb-12 transition-all font-black text-xs uppercase tracking-[0.2em] ${
              theme === 'dark' ? 'text-gray-500 hover:text-amber-400' : 'text-slate-400 hover:text-amber-400'
            }`}
          >
            <ChevronDown size={18} className="rotate-90" /> Return to Catalog
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="p-6 rounded-3xl bg-amber-400/10 w-fit mb-8">
                <IconComponent size={64} className="text-amber-500" />
              </div>
              <h1 className={`text-4xl sm:text-6xl font-black mb-6 tracking-tight leading-[1.1] ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{service.title}</h1>
              <p className={`text-lg mb-12 leading-relaxed font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>{service.fullDesc}</p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className={`p-6 rounded-[2rem] border ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-white border-slate-100 shadow-xl shadow-slate-200/50'}`}>
                  <p className="text-[10px] uppercase tracking-widest text-amber-500 font-black mb-2">Duration</p>
                  <p className={`text-xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{service.time}</p>
                </div>
                <div className={`p-6 rounded-[2rem] border ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-white border-slate-100 shadow-xl shadow-slate-200/50'}`}>
                  <p className="text-[10px] uppercase tracking-widest text-amber-500 font-black mb-2">Base Cost</p>
                  <p className={`text-xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{service.price}</p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className={`rounded-[2.5rem] p-10 border transition-all duration-500 ${theme === 'dark' ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100 shadow-2xl shadow-slate-200/40'}`}>
                <h2 className={`text-3xl font-black mb-8 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Technical Inclusion</h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="p-1 rounded-full bg-green-500/10">
                        <CheckCircle size={22} className="text-green-500 flex-shrink-0" />
                      </div>
                      <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`rounded-[2.5rem] p-10 border transition-all duration-500 ${theme === 'dark' ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100 shadow-2xl shadow-slate-200/40'}`}>
                <h2 className={`text-3xl font-black mb-10 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Protocol steps</h2>
                <div className="space-y-6">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 font-black flex-shrink-0 border border-white/5 shadow-xl">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div className="pt-2">
                        <p className={`font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="tel:01726-725236" className="flex-1 px-8 py-5 rounded-[1.5rem] bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-black hover:shadow-2xl hover:shadow-amber-400/50 transition-all text-center flex items-center justify-center gap-3 text-lg leading-none">
                  <Phone size={24} /> 01726-725236
                </a>
                <a href="https://wa.me/8801726725236" target="_blank" rel="noopener noreferrer" className="flex-1 px-8 py-5 rounded-[1.5rem] bg-green-500 text-white font-black hover:shadow-2xl hover:shadow-green-500/50 transition-all text-center flex items-center justify-center gap-3 text-lg leading-none">
                  <MessageCircle size={24} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews for this service */}
      <ReviewCarousel theme={theme} reviews={reviews} />

      {/* Related Services */}
      <section className={`py-32 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-5xl font-black text-center mb-20 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Support Catalog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.filter(s => s.id !== serviceId).slice(0, 3).map((relatedService) => {
              const RelatedIcon = relatedService.icon;
              return (
                <button 
                  key={relatedService.id} 
                  onClick={() => setCurrentPage(`service-${relatedService.id}`)}
                  className={`group p-10 rounded-[2.5rem] border transition-all duration-500 hover:scale-[1.02] text-left ${
                    theme === 'dark' ? 'bg-slate-900/40 border-slate-800 hover:border-amber-400' : 'bg-slate-50 border-slate-100 hover:border-amber-400 shadow-xl shadow-slate-200/50'
                  }`}
                >
                  <div className="p-4 rounded-2xl bg-amber-400/10 w-fit mb-8 group-hover:scale-110 transition-transform">
                    <RelatedIcon size={28} className="text-amber-500" />
                  </div>
                  <h3 className={`text-xl font-black mb-3 group-hover:text-amber-500 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{relatedService.title}</h3>
                  <p className={`text-sm font-medium leading-relaxed ${theme === 'dark' ? 'text-gray-500' : 'text-slate-500'}`}>{relatedService.shortDesc}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
