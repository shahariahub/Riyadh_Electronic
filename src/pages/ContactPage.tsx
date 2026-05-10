import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, CheckCircle, Award, Shield, Zap, Users, Wrench } from 'lucide-react';
import { Theme } from '../types';

interface ContactPageProps {
  theme: Theme;
}

const ContactPage: React.FC<ContactPageProps> = ({ theme }) => (
  <div className="w-full pt-20">
    <section className={`py-16 transition-all ${theme === 'dark' ? 'bg-gradient-to-b from-black to-slate-900' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-4xl sm:text-6xl font-black text-center mb-6 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Get in Touch</h1>
        <p className={`text-lg text-center max-w-2xl mx-auto font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
          Dhaka's most responsive tech support. Available 24/7 for emergency repairs.
        </p>
      </div>
    </section>

    {/* Contact Methods */}
    <section className={`py-24 transition-all ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {/* Phone */}
          <div className={`rounded-[2.5rem] p-10 border transition-all duration-500 hover:scale-[1.03] ${
            theme === 'dark' ? 'bg-slate-900/40 border-slate-800 hover:border-amber-400/50' : 'bg-white border-slate-100 hover:border-amber-400 shadow-xl shadow-slate-200/50'
          }`}>
            <div className="p-4 rounded-2xl bg-amber-400/10 w-fit mb-8">
              <Phone size={36} className="text-amber-500" />
            </div>
            <h3 className={`text-2xl font-black mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Call Now</h3>
            <p className={`${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'} mb-8 text-sm font-medium`}>Direct line to our senior technical lead.</p>
            <a href="tel:01726-725236" className="block text-center px-6 py-5 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-black text-lg hover:shadow-2xl hover:shadow-amber-400/50 transition-all">
              01726-725236
            </a>
          </div>

          {/* WhatsApp */}
          <div className={`rounded-[2.5rem] p-10 border transition-all duration-500 hover:scale-[1.03] ${
            theme === 'dark' ? 'bg-slate-900/40 border-slate-800 hover:border-green-500/50' : 'bg-white border-slate-100 hover:border-green-500 shadow-xl shadow-slate-200/50'
          }`}>
            <div className="p-4 rounded-2xl bg-green-500/10 w-fit mb-8">
              <MessageCircle size={36} className="text-green-500" />
            </div>
            <h3 className={`text-2xl font-black mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>WhatsApp</h3>
            <p className={`${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'} mb-8 text-sm font-medium`}>Send photo or video of your TV problem.</p>
            <a href="https://wa.me/8801726725236" target="_blank" rel="noopener noreferrer" className="block text-center px-6 py-5 rounded-2xl bg-green-500 text-white font-black text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all">
              Message
            </a>
          </div>

          {/* Address */}
          <div className={`rounded-[2.5rem] p-10 border transition-all duration-500 hover:scale-[1.03] ${
            theme === 'dark' ? 'bg-slate-900/40 border-slate-800 hover:border-blue-500/50' : 'bg-white border-slate-100 hover:border-blue-500 shadow-xl shadow-slate-200/50'
          }`}>
            <div className="p-4 rounded-2xl bg-blue-500/10 w-fit mb-8">
              <MapPin size={36} className="text-blue-500" />
            </div>
            <h3 className={`text-2xl font-black mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Service Center</h3>
            <p className={`${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'} mb-8 text-sm font-medium`}>AB Super Market, Sector 3, Uttara.</p>
            <a href="https://share.google/ymctgvIBvG8NjxtG0" target="_blank" rel="noopener noreferrer" className="block text-center px-6 py-5 rounded-2xl bg-blue-500 text-white font-black text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all">
              Live Map
            </a>
          </div>

          {/* Hours */}
          <div className={`rounded-[2.5rem] p-10 border transition-all duration-500 hover:scale-[1.03] ${
            theme === 'dark' ? 'bg-slate-900/40 border-slate-800 hover:border-purple-500/50' : 'bg-white border-slate-100 hover:border-purple-500 shadow-xl shadow-slate-200/50'
          }`}>
            <div className="p-4 rounded-2xl bg-purple-500/10 w-fit mb-8">
              <Clock size={36} className="text-purple-500" />
            </div>
            <h3 className={`text-2xl font-black mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Open Hours</h3>
            <p className={`${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'} mb-8 text-sm font-medium`}>Always open for your tech needs.</p>
            <div className="w-full text-center py-5 rounded-2xl bg-slate-900 text-amber-400 font-black uppercase tracking-[0.2em] text-xs">
              24/7 Available
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className={`rounded-[3rem] p-10 sm:p-20 border mb-20 transition-all ${
          theme === 'dark' ? 'bg-slate-900/20 border-slate-800' : 'bg-slate-50 border-slate-100 shadow-2xl shadow-slate-200/30'
        }`}>
          <h2 className={`text-4xl font-black mb-16 text-center tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Full Dhaka Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Uttara', 'Bashundhara', 'Gulshan', 'Banani', 'Mirpur', 'Dhanmondi'].map((area) => (
              <div key={area} className={`flex flex-col items-center gap-4 p-8 rounded-[2rem] border transition-all ${
                theme === 'dark' ? 'bg-black/40 border-white/5 hover:border-amber-400/30' : 'bg-white border-slate-100 hover:border-amber-400/30 hover:shadow-xl'
              }`}>
                <div className="p-3 rounded-xl bg-green-500/10">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <span className={`font-black text-xs uppercase tracking-widest ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{area}</span>
              </div>
            ))}
          </div>
          <p className={`text-center mt-12 text-sm font-medium ${theme === 'dark' ? 'text-gray-500' : 'text-slate-500'}`}>Expert on-site mobile repair teams deployed everywhere in Dhaka city.</p>
        </div>
      </div>
    </section>

    {/* Emergency CTA */}
    <section className={`py-20 border-t transition-all ${
      theme === 'dark' ? 'bg-gradient-to-r from-amber-400/10 to-orange-500/10 border-amber-400/30' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Emergency TV Repair?</h2>
        <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>Our experts are standing by 24/7</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:01726-725236" className="group px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold hover:shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 flex items-center justify-center gap-2">
            <Phone size={20} /> Call Now
          </a>
          <a href="https://wa.me/8801726725236" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 rounded-xl bg-green-500 text-white font-bold hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-2">
            <MessageCircle size={20} /> WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default ContactPage;
