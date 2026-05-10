import React from 'react';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';
import { Theme } from '../types';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isNavOpen: boolean;
  setIsNavOpen: (open: boolean) => void;
  scrolled: boolean;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  setCurrentPage,
  isNavOpen,
  setIsNavOpen,
  scrolled,
  theme,
  setTheme
}) => {
  const pages = ['home', 'services', 'work', 'about', 'contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg dark:shadow-2xl' 
        : 'bg-gradient-to-b from-black/50 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center font-bold text-slate-900 text-lg group-hover:scale-110 transition-transform duration-300">
              RE
            </div>
            <span className="text-white font-bold text-lg hidden sm:block">Riyadh Electronic</span>
          </button>

          <div className="hidden md:flex gap-6 items-center">
            {pages.map((page) => (
              <button 
                key={page} 
                onClick={() => setCurrentPage(page)} 
                className={`relative font-medium transition-all duration-300 group ${
                  currentPage === page 
                    ? 'text-amber-400' 
                    : (scrolled || theme === 'dark' ? 'text-slate-600 dark:text-gray-300' : 'text-white') + ' hover:text-amber-400'
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 ${
                  currentPage === page ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
            
            <button 
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className={`p-2 rounded-lg transition-colors ${
                scrolled || theme === 'dark' ? 'text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-slate-800' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          <div className="hidden sm:flex gap-3 items-center">
            <a href="tel:01726-725236" className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold hover:shadow-lg hover:shadow-amber-400/50 transition-all duration-300 text-sm flex items-center gap-1">
              <Phone size={16} /> <span className="hidden lg:inline">Call Now</span>
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button 
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className={`p-2 rounded-lg transition-colors ${
                scrolled || theme === 'dark' ? 'text-slate-600 dark:text-gray-300' : 'text-white hover:text-amber-400'
              }`}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              onClick={() => setIsNavOpen(!isNavOpen)} 
              className={`transition-colors ${
                scrolled || theme === 'dark' ? 'text-slate-900 dark:text-white' : 'text-white hover:text-amber-400'
              }`}
            >
              {isNavOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isNavOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
            {pages.map((page) => (
              <button 
                key={page} 
                onClick={() => { setCurrentPage(page); setIsNavOpen(false); }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                  currentPage === page ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold' : 'text-gray-300 hover:text-amber-400'
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="tel:01726-725236" className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold text-center text-sm flex items-center justify-center gap-2">
                <Phone size={18} /> Call Specialist
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
