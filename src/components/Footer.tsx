import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-[#0F172A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <span className="text-xl font-poppins font-black tracking-tight text-[#0F172A]">
              JANVI GUPTA
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-poppins font-bold uppercase tracking-wider text-slate-700">
            <a href="#about" className="hover:text-blue-600 transition-colors">ABOUT</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">EXPERIENCE</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">SKILLS</a>
            <a href="#education" className="hover:text-blue-600 transition-colors">EDUCATION</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">SELECTED WORK</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">CONTACT</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-100 border border-slate-200 text-[#0F172A] hover:bg-blue-600 hover:text-white transition-all shadow-2xs hover:shadow-sm cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 font-medium">
          <p>
            © {new Date().getFullYear()} Janvi Gupta. All rights reserved.
          </p>
          <p className="font-poppins font-bold uppercase tracking-wider text-[11px] text-slate-700">
            PROFESSIONAL DESIGN PORTFOLIO
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
