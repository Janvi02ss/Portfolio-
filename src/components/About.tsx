import React from 'react';
import { Quote, Compass, Palette, BookOpen } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface AboutProps {
  quote: string;
  paragraphs: string[];
}

export const About: React.FC<AboutProps> = ({ quote, paragraphs }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-slate-200 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header: Poppins Bold in ALL CAPS */}
        <ScrollReveal direction="up" distance="sm">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-black text-[#0F172A] tracking-tight">
              ABOUT ME
            </h2>
            <div className="w-16 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Quote Callout Card */}
        <ScrollReveal direction="up" distance="sm" delay={100}>
          <div className="mb-12 p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 relative overflow-hidden shadow-xs">
            <Quote className="w-12 h-12 text-blue-600/20 absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-none" />
            <blockquote className="text-2xl sm:text-3xl font-about-italic text-slate-900 leading-relaxed font-normal">
              "{quote}"
            </blockquote>
          </div>
        </ScrollReveal>

        {/* Editorial Text Content in requested font and italics */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 space-y-6">
            <ScrollReveal direction="up" distance="sm" delay={150}>
              <div className="space-y-6 p-8 rounded-3xl bg-slate-50/60 border border-slate-200">
                {paragraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className="font-about-italic text-lg sm:text-xl text-slate-800 leading-relaxed font-normal"
                  >
                    {para}
                  </p>
                ))}

                {/* Current Focus Highlight */}
                <div className="pt-5 border-t border-slate-200">
                  <span className="text-xs font-poppins font-bold uppercase tracking-wider text-blue-600 block mb-1.5">
                    CURRENT ACADEMIC FOCUS
                  </span>
                  <p className="font-about-italic text-base sm:text-lg text-slate-700 leading-relaxed">
                    Enrolled in <strong className="text-slate-900 font-semibold not-italic">Visual Experience Design</strong> at{' '}
                    <strong className="text-slate-900 font-semibold not-italic">Karnavati University</strong> — investigating the intersection of visual communication, human-centered UI/UX design, and emotional storytelling.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Quick Pillars Sidebar */}
          <div className="md:col-span-4">
            <ScrollReveal direction="up" distance="sm" delay={250}>
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-5 shadow-2xs">
                <h3 className="text-xs font-poppins font-bold uppercase tracking-wider text-[#0F172A] border-b border-slate-200 pb-3">
                  DESIGN PILLARS
                </h3>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0 mt-0.5 border border-blue-100">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-poppins font-bold text-slate-900 uppercase tracking-wide">
                      VISUAL SENSITIVITY
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Balancing nuanced color, hierarchy, typography, and negative space.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0 mt-0.5 border border-blue-100">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-poppins font-bold text-slate-900 uppercase tracking-wide">
                      CURIOSITY & UX
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Translating real everyday human interactions into intuitive digital flows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0 mt-0.5 border border-blue-100">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-poppins font-bold text-slate-900 uppercase tracking-wide">
                      STORYTELLING
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Crafting narrative identity where each artifact feels purposeful and authentic.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
