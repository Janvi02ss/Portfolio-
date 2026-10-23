import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const fullText = "WELCOME TO MY PORTFOLIO";
  const [displayedText, setDisplayedText] = useState("");

  // Scroll and timer linked reveal: "Welcome to my portfolio" writes out as user views and scrolls
  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 55);

    // Also support mouse scroll transition to progressively advance text if not yet fully typed
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
        const targetLen = Math.min(
          fullText.length,
          Math.max(charIndex, Math.floor((scrollY / 120) * fullText.length))
        );
        setDisplayedText(fullText.slice(0, targetLen));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearInterval(typingInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutElem = document.getElementById('about');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="top" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Soft ambient blur glow in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-gradient-to-tr from-blue-400/15 via-indigo-300/10 to-slate-200/20 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Broadened Frosted Glass Banner with Blur Overlay and subtle border */}
        <div className="relative rounded-3xl backdrop-blur-xl bg-white/80 border border-slate-200/90 shadow-xl overflow-hidden p-8 sm:p-12 md:p-16 transition-all duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Main Headline Area */}
            <div className="lg:col-span-8 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
              
              {/* WELCOME TO MY PORTFOLIO in Poppins Bold Capital Letters with kinetic typing cursor */}
              <h1 className="font-poppins font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#0F172A] leading-[1.08] drop-shadow-xs">
                <span>{displayedText}</span>
                <span className="inline-block w-2 sm:w-2.5 h-9 sm:h-14 md:h-18 lg:h-20 bg-blue-600 ml-1.5 animate-pulse align-middle rounded-xs" />
              </h1>

              {/* Hand / Mouse scrolling transition prompt */}
              <div className="mt-8 sm:mt-10 flex items-center gap-4">
                <button
                  onClick={scrollToAbout}
                  className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900 text-white font-poppins text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>EXPLORE WORK</span>
                  <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
                </button>

                {/* Hand scroll swipe indicator animation */}
                <div
                  onClick={scrollToAbout}
                  className="cursor-pointer hidden sm:flex items-center gap-2 text-xs font-poppins font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 transition-colors"
                  title="Scroll mouse to explore"
                >
                  <span className="text-lg animate-scroll-hand select-none">👇</span>
                  <span>SCROLL TO DISCOVER</span>
                </div>
              </div>
            </div>

            {/* Beside Image: Janvi Gupta's Photograph */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-100 group transition-all duration-300 hover:shadow-xl hover:border-slate-300">
                <img
                  src="/assets/profile.jpg"
                  alt="Janvi Gupta"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>

          </div>

          {/* Bottom subtle scroll indicator with mouse wheel animation */}
          <div className="mt-8 pt-6 border-t border-slate-200/70 flex items-center justify-between text-[11px] font-poppins font-bold uppercase tracking-wider text-slate-400">
            <span className="text-slate-600">DESIGN & VISUAL EXPERIENCE</span>
            <div
              onClick={scrollToAbout}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors"
            >
              <div className="w-4 h-6 rounded-full border-2 border-slate-400 flex justify-center pt-1">
                <div className="w-1 h-1.5 bg-blue-600 rounded-full animate-mouse-wheel" />
              </div>
              <span>SCROLL DOWN</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
