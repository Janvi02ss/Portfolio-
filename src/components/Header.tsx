import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  onOpenChecklist: () => void;
  pendingConfirmationsCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onOpenChecklist, pendingConfirmationsCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'SELECTED WORK', href: '#projects' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-xs'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Name in Poppins bold uppercase (No Logo as requested) */}
        <a href="#top" className="group focus:outline-none">
          <span className="text-xl font-poppins font-black tracking-tight text-[#0F172A] group-hover:text-blue-600 transition-colors">
            JANVI GUPTA
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-poppins font-bold uppercase tracking-wider text-slate-700 hover:text-blue-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}

          {/* Verification / Checklist trigger button */}
          <button
            onClick={onOpenChecklist}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-poppins font-bold rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-all shadow-2xs hover:shadow-xs cursor-pointer"
            title="Review items needing confirmation before publishing"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>VERIFY</span>
            {pendingConfirmationsCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0.2 bg-blue-600 text-white text-[10px] rounded-full font-bold">
                {pendingConfirmationsCount}
              </span>
            )}
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenChecklist}
            className="p-2 rounded-full bg-slate-100 text-slate-800 text-xs flex items-center gap-1 border border-slate-200"
            aria-label="Open review checklist"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            {pendingConfirmationsCount > 0 && (
              <span className="w-2 h-2 rounded-full bg-blue-600" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-800 hover:text-blue-600 transition-colors focus:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-lg animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-poppins font-bold uppercase tracking-wider text-slate-800 hover:text-blue-600 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-semibold">Publishing verification</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChecklist();
                }}
                className="text-xs px-3.5 py-1.5 bg-blue-600 text-white rounded-lg flex items-center gap-1 font-bold"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Checklist ({pendingConfirmationsCount} notes)</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
