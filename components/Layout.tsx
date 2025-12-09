import React, { useState } from 'react';
import { Menu, X, Phone, Globe, Facebook, Twitter, Instagram } from 'lucide-react';
import { Language } from '../types';
import { NAV_LINKS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  language: Language;
  setLanguage: (lang: Language) => void;
  currentPath: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, language, setLanguage, currentPath }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pidgin' : 'en');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-3 px-4 text-xs md:text-sm font-medium tracking-wide">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 bg-primary-800/50 px-3 py-1 rounded-full border border-primary-700/50">
              <Phone size={14} className="text-primary-300" /> 
              <span>+234 800 123 4567 (Emergency)</span>
            </span>
            <span className="hidden lg:inline text-primary-300/50">|</span>
            <span className="hidden lg:inline text-primary-100">
              {language === 'en' ? 'Open 24 Hours / 7 Days' : 'We Open Everytime'}
            </span>
          </div>
          <div className="flex gap-6 text-primary-100 font-semibold text-xs uppercase tracking-wider">
             <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span> Warri</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-40 transition-all border-b border-slate-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#/" className="flex items-center gap-3 group">
            {/* Logo Box */}
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-primary-500/30 transition-all group-hover:scale-105 group-hover:shadow-primary-500/40">
              G
            </div>
            {/* Logo Text */}
            <div className="flex flex-col justify-center">
              <span className="font-black text-slate-800 leading-none text-xl md:text-2xl tracking-tight group-hover:text-primary-700 transition-colors">GCMC</span>
              <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-primary-600/80 transition-colors">Group Christian Medical Centre</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <nav className="flex gap-6 xl:gap-8">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.path} 
                  href={`#${link.path}`}
                  className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:text-primary-600 relative group py-2 ${currentPath === link.path ? 'text-primary-600' : 'text-gray-600'}`}
                >
                  {link.label[language]}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 transform origin-left transition-transform duration-300 ${currentPath === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </a>
              ))}
            </nav>

            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider transition-all border border-slate-200 hover:border-primary-200 hover:text-primary-700 active:scale-95"
            >
              <Globe size={16} />
              {language === 'en' ? 'Pidgin' : 'English'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700 hover:text-primary-600 transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-6 px-4 flex flex-col gap-2 shadow-xl absolute w-full z-50 animate-fade-in">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.path} 
                href={`#${link.path}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-bold py-3 px-4 rounded-lg transition-colors ${currentPath === link.path ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-slate-50'}`}
              >
                {link.label[language]}
              </a>
            ))}
             <button 
              onClick={() => {
                toggleLanguage();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-slate-100 text-slate-800 font-bold text-sm transition-colors w-full mt-4"
            >
              <Globe size={18} />
              {language === 'en' ? 'Switch to Pidgin' : 'Change to English'}
            </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-10">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-900/50">G</div>
               <span className="text-white font-bold text-xl tracking-tight">GCMC</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              {language === 'en' 
                ? 'Providing compassionate, world-class healthcare since 2002. Your wellness is our sacred duty.' 
                : 'We don dey give better healthcare since 2002. Your health na our serious concern.'}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1"><Instagram size={18} /></a>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-6 border-l-4 border-primary-500 pl-3">{language === 'en' ? 'Quick Links' : 'Sharp Links'}</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#/about" className="hover:text-primary-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> About Us</a></li>
              <li><a href="#/services" className="hover:text-primary-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> Services</a></li>
              <li><a href="#/blog" className="hover:text-primary-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> Blog</a></li>
              <li><a href="#/contact" className="hover:text-primary-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> Contact</a></li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-6 border-l-4 border-primary-500 pl-3">{language === 'en' ? 'Services' : 'Wetin We Do'}</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>Surgery & Trauma</li>
              <li>Paediatrics & Child Health</li>
              <li>Obstetrics & Gynaecology</li>
              <li>Advanced Radiology</li>
              <li>24/7 Emergency Response</li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-6 border-l-4 border-primary-500 pl-3">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <span className="text-primary-500 mt-0.5"><Phone size={16} /></span> 
                <span className="font-semibold text-white">+234 800 123 4567</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary-500 mt-0.5">📍</span> 
                <span>Inside Mosheshe Estate, Airport Road, Effurun, Warri</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary-500 mt-0.5">✉️</span> 
                <span className="hover:text-white transition-colors cursor-pointer">info@gcmcwarri.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-xs text-slate-500 font-medium">
          © {new Date().getFullYear()} Group Christian Medical Centre. All rights reserved. 
          <span className="mx-3 text-slate-700">|</span>
          <a href="#/terms" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};