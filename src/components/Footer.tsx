import React from 'react';
import { MessageCircle, Tv } from 'lucide-react';
import { Theme } from '../types';

interface FooterProps {
  theme: Theme;
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ theme, setCurrentPage }) => {
  return (
    <footer className={`transition-colors duration-300 border-t ${
      theme === 'dark' ? 'bg-black border-slate-800' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          <div className="col-span-2 md:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <Tv size={22} className="text-slate-900" />
              </div>
              <span className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Riyadh Electronic</span>
            </div>
            <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
              Dhaka's premier television repair specialist. We provide certified technical solutions for LED, OLED, and Smart TVs with 24/7 emergency home service across all major areas.
            </p>
          </div>

          <div>
            <h4 className={`font-bold mb-6 uppercase tracking-widest text-xs ${theme === 'dark' ? 'text-amber-400' : 'text-amber-600'}`}>Quick Links</h4>
            <ul className="space-y-3">
              {['home', 'services', 'work', 'about', 'contact'].map((page) => (
                <li key={page}>
                  <button onClick={() => setCurrentPage(page)} className={`text-sm transition-all hover:translate-x-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'} hover:text-amber-400`}>
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-bold mb-6 uppercase tracking-widest text-xs ${theme === 'dark' ? 'text-amber-400' : 'text-amber-600'}`}>Our Services</h4>
            <ul className="space-y-3">
              {['LED TV Repair', 'Smart TV Repair', 'OLED Panel Fix', 'Screen Replacement', 'Home Service'].map((service) => (
                <li key={service} className={`text-sm cursor-pointer transition-all hover:translate-x-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'} hover:text-amber-400`}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className={`font-bold mb-6 uppercase tracking-widest text-xs ${theme === 'dark' ? 'text-amber-400' : 'text-amber-600'}`}>Contact Support</h4>
            <ul className={`space-y-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
              <li>
                <a href="tel:01726-725236" className="flex items-center gap-2 group">
                  <span className="p-2 rounded-lg bg-amber-400/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-900 transition-all">01726-725236</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/8801726725236" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                  <span className="p-2 rounded-lg bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all underline decoration-dotted">WhatsApp Specialist</span>
                </a>
              </li>
              <li className="text-sm pt-2">Uttara Sector 3, AB Super Market, Dhaka</li>
              <li className="text-xs font-bold text-amber-500">Service Hours: 24/7 Available</li>
            </ul>
          </div>
        </div>

        <div className={`border-t pt-10 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-100'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}`}>
              &copy; {new Date().getFullYear()} Riyadh Electronic Dhaka. All rights reserved. Built for Dhaka.
            </p>
            <div className="flex gap-8">
              {['Facebook', 'Instagram', 'WhatsApp'].map((social) => (
                <a key={social} href="#" className={`text-sm transition-colors hover:text-amber-400 ${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}`}>
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
