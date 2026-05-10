import React from 'react';
import { MessageCircle } from 'lucide-react';
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center font-bold text-slate-900">RE</div>
              <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Riyadh Electronic</span>
            </div>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>Professional TV & electronics repair in Dhaka. 24/7 service available.</p>
          </div>

          <div>
            <h4 className={`font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'services', 'about', 'contact'].map((page) => (
                <li key={page}>
                  <button onClick={() => setCurrentPage(page)} className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'} hover:text-amber-400 transition-colors`}>
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Services</h4>
            <ul className="space-y-2">
              {['LED TV Repair', 'Smart TV Repair', 'Screen Replacement', 'Motherboard Repair'].map((service) => (
                <li key={service} className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'} hover:text-amber-400 cursor-pointer transition-colors text-left`}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Contact</h4>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
              <li><a href="tel:01726-725236" className="hover:text-amber-400 transition-colors">01726-725236</a></li>
              <li><a href="https://wa.me/8801726725236" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">WhatsApp</a></li>
              <li>Open 24 Hours</li>
              <li>All Dhaka Areas</li>
            </ul>
          </div>
        </div>

        <div className={`border-t pt-8 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-100'}`}>
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
            <p>&copy; 2024 Riyadh Electronic. All rights reserved.</p>
            <div className="flex gap-6">
              {['Facebook', 'Instagram', 'WhatsApp'].map((social) => (
                <a key={social} href="#" className="hover:text-amber-400 transition-colors">{social}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
