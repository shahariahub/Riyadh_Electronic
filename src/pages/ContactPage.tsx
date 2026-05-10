import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, CheckCircle, Award, Shield, Zap, Users, Wrench } from 'lucide-react';
import { Theme } from '../types';

interface ContactPageProps {
  theme: Theme;
}

const ContactPage: React.FC<ContactPageProps> = ({ theme }) => (
  <div className="w-full pt-20">
    <section className="py-20 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-white text-center mb-6">Get in Touch</h1>
        <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto">
          We're available 24/7 for all your TV and electronics repair needs
        </p>
      </div>
    </section>

    {/* Contact Methods */}
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* Phone */}
          <div className="bg-black rounded-2xl p-8 border border-slate-800 hover:border-amber-400/50 transition-all hover:scale-105">
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-400/20 to-orange-500/20 w-fit mb-4">
              <Phone size={32} className="text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Call Us</h3>
            <p className="text-gray-400 mb-6 text-sm">Speak directly with our experts 24/7</p>
            <a href="tel:01726-725236" className="block text-center px-6 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold hover:shadow-2xl hover:shadow-amber-400/50 transition-all">
              01726-725236
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-black rounded-2xl p-8 border border-slate-800 hover:border-green-500/50 transition-all hover:scale-105">
            <div className="p-4 rounded-xl bg-green-500/20 w-fit mb-4">
              <MessageCircle size={32} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">WhatsApp</h3>
            <p className="text-gray-400 mb-6 text-sm">Quick chat with instant response</p>
            <a href="https://wa.me/8801726725236" target="_blank" rel="noopener noreferrer" className="block text-center px-6 py-3 rounded-lg bg-green-500 text-white font-bold hover:shadow-2xl hover:shadow-green-500/50 transition-all">
              Message Now
            </a>
          </div>

          {/* Address */}
          <div className="bg-black rounded-2xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all hover:scale-105">
            <div className="p-4 rounded-xl bg-blue-500/20 w-fit mb-4">
              <MapPin size={32} className="text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Visit Us</h3>
            <p className="text-gray-400 mb-1 text-sm">1st Floor, AB Super Market</p>
            <p className="text-gray-400 mb-6 text-sm">Uttara Sector 3, Dhaka 1230</p>
            <a href="https://share.google/ymctgvIBvG8NjxtG0" target="_blank" rel="noopener noreferrer" className="block text-center px-6 py-3 rounded-lg bg-blue-500 text-white font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all">
              View Map
            </a>
          </div>

          {/* Hours */}
          <div className="bg-black rounded-2xl p-8 border border-slate-800 hover:border-purple-500/50 transition-all hover:scale-105">
            <div className="p-4 rounded-xl bg-purple-500/20 w-fit mb-4">
              <Clock size={32} className="text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-left">Repair Hours</h3>
            <p className="text-gray-400 mb-1 text-sm">Available 24 Hours</p>
            <p className="text-gray-400 mb-6 text-sm">7 Days a Week</p>
            <div className="text-amber-400 font-bold text-xs uppercase tracking-widest">Emergency Shop Open</div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="bg-black rounded-2xl p-12 border border-slate-800 mb-20 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Home Service Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {['Uttara', 'Bashundhara', 'Gulshan', 'Banani', 'Mirpur', 'Dhanmondi'].map((area) => (
              <div key={area} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                <span className="text-white font-bold">{area}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-center mt-10 text-sm italic">Free home diagnosis and professional on-site repair available for all areas in Dhaka.</p>
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
