import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Phone, Tv, Zap } from 'lucide-react';
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pages = ['home', 'services', 'work', 'about', 'contact'];

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // scrolling down
          setIsVisible(false);
        } else {
          // scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  // Always show if menu is open
  const navVisible = isNavOpen || isVisible;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      navVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      scrolled 
        ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg dark:shadow-2xl py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Tv size={22} className="text-slate-900" />
            </div>
            <span className={`font-black text-xl hidden sm:block tracking-tight transition-colors ${
              scrolled || theme === 'dark' ? 'text-slate-900 dark:text-white' : 'text-white'
            }`}>Riyadh <span className="text-amber-500">Electronic</span></span>
          </button>

          <div className="hidden md:flex gap-1 items-center bg-slate-100/30 dark:bg-white/5 p-1 rounded-2xl backdrop-blur-sm border border-slate-200/50 dark:border-white/10">
            {pages.map((page) => (
              <button 
                key={page} 
                onClick={() => setCurrentPage(page)} 
                className={`px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300 ${
                  currentPage === page 
                    ? 'bg-amber-400 text-slate-900 shadow-md' 
                    : (scrolled || theme === 'dark' ? 'text-slate-600 dark:text-gray-300' : 'text-white/90') + ' hover:text-amber-500 hover:bg-white/10'
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className={`p-2.5 rounded-xl transition-all border ${
                scrolled || theme === 'dark' 
                  ? 'text-slate-600 dark:text-gray-300 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700' 
                  : 'text-white bg-white/10 border-white/20 hover:bg-white/20'
              }`}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            
            <div className="hidden sm:block">
              <a href="tel:01726-725236" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold hover:shadow-xl hover:shadow-amber-400/40 transition-all duration-300 text-sm flex items-center gap-2">
                <Phone size={16} className="animate-bounce" /> <span className="hidden lg:inline">01726-725236</span>
              </a>
            </div>

            <button 
              onClick={() => setIsNavOpen(!isNavOpen)} 
              className={`p-2 rounded-xl md:hidden transition-all ${
                scrolled || theme === 'dark' 
                  ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800' 
                  : 'text-white bg-white/10'
              }`}
            >
              {isNavOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Box */}
        {isNavOpen && (
          <div className="md:hidden mt-4 animate-in fade-in zoom-in-95 duration-300 ease-out">
            <div className={`p-5 rounded-3xl border shadow-2xl space-y-4 ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="grid grid-cols-2 gap-3">
                {pages.map((page) => (
                  <button 
                    key={page} 
                    onClick={() => { setCurrentPage(page); setIsNavOpen(false); }}
                    className={`flex items-center justify-center px-4 py-3.5 rounded-2xl transition-all font-black text-xs uppercase tracking-widest ${
                      currentPage === page 
                        ? 'bg-amber-400 text-slate-900 shadow-lg' 
                        : (theme === 'dark' ? 'bg-slate-800 text-gray-400 hover:text-amber-400' : 'bg-slate-50 text-slate-500 hover:text-amber-500')
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <div className="pt-2">
                <a href="tel:01726-725236" className="w-full px-4 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-black uppercase tracking-widest text-center text-xs flex items-center justify-center gap-3 shadow-lg shadow-amber-400/20">
                  <Phone size={18} /> 01726-725236
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
