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
      <section className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-slate-50'
      }`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setCurrentPage('services')} 
            className={`flex items-center gap-2 mb-8 transition-colors ${
              theme === 'dark' ? 'text-gray-400 hover:text-amber-400' : 'text-slate-500 hover:text-amber-400'
            }`}
          >
            <ChevronDown size={20} className="rotate-90" /> Back to Services
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-400/20 to-orange-500/20 w-fit mb-6">
                <IconComponent size={64} className="text-amber-400" />
              </div>
              <h1 className={`text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{service.title}</h1>
              <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>{service.fullDesc}</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Clock size={24} className="text-amber-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">Typical Duration</p>
                    <p className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{service.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Award size={24} className="text-amber-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">Typical Price Range</p>
                    <p className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{service.price}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className={`rounded-2xl p-8 border ${theme === 'dark' ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
                <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>What's Included</h2>
                <div className="space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                      <span className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`rounded-2xl p-8 border ${theme === 'dark' ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
                <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Our Process</h2>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <div className="pt-2">
                        <p className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a href="tel:01726-725236" className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold hover:shadow-2xl hover:shadow-amber-400/50 transition-all text-center flex items-center justify-center gap-2">
                  <Phone size={20} /> Call Now
                </a>
                <a href="https://wa.me/8801726725236" target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-4 rounded-xl bg-green-500 text-white font-bold hover:shadow-2xl hover:shadow-green-500/50 transition-all text-center flex items-center justify-center gap-2">
                  <MessageCircle size={20} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews for this service */}
      <ReviewCarousel theme={theme} reviews={reviews} />

      {/* Related Services */}
      <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicesData.filter(s => s.id !== serviceId).slice(0, 3).map((relatedService) => {
              const RelatedIcon = relatedService.icon;
              return (
                <button 
                  key={relatedService.id} 
                  onClick={() => setCurrentPage(`service-${relatedService.id}`)}
                  className={`group p-6 rounded-xl border transition-all duration-300 hover:scale-105 text-left ${
                    theme === 'dark' ? 'bg-black border-slate-800 hover:border-amber-400' : 'bg-slate-50 border-slate-200 hover:border-amber-400'
                  }`}
                >
                  <div className="p-3 rounded-lg bg-gradient-to-r from-amber-400/20 to-orange-500/20 w-fit mb-4">
                    <RelatedIcon size={24} className="text-amber-400" />
                  </div>
                  <h3 className={`font-bold mb-2 group-hover:text-amber-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{relatedService.title}</h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>{relatedService.shortDesc}</p>
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
