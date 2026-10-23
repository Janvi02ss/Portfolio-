import React from 'react';
import { FolderGit2, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export const ProjectsPlaceholder: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-white border-t border-slate-200 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header: Poppins bold in capital letters */}
        <ScrollReveal direction="up" distance="sm">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-black text-[#0F172A] tracking-tight">
              SELECTED WORK
            </h2>
            <div className="w-16 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Primary "Projects Coming Soon" Placeholder Card */}
        <ScrollReveal direction="up" distance="sm" delay={120}>
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-14 border-2 border-dashed border-slate-200 text-center relative overflow-hidden shadow-xs">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6 shadow-2xs border border-blue-100">
              <FolderGit2 className="w-8 h-8" />
            </div>

            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100/80 text-blue-700 font-bold text-xs tracking-wider uppercase mb-3">
              IN ACTIVE CURATION
            </span>

            <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-slate-900 mb-3 uppercase">
              PROJECTS COMING SOON
            </h3>

            <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed mb-10">
              Case studies and design artifacts are currently being organized and curated. No fictional projects have been invented, maintaining complete integrity with Janvi’s verified work.
            </p>

            {/* Planned Case Study Categories / Architecture */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left max-w-3xl mx-auto mb-8">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                  CATEGORY 01
                </span>
                <h4 className="text-sm font-poppins font-bold text-slate-900 mb-1">
                  UI/UX CASE STUDIES
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  User research, wireframing, wireflows, and interactive prototypes.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                  CATEGORY 02
                </span>
                <h4 className="text-sm font-poppins font-bold text-slate-900 mb-1">
                  VISUAL EXPERIENCE
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Brand design, campaigns, social creatives, and motion storytelling.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                  CATEGORY 03
                </span>
                <h4 className="text-sm font-poppins font-bold text-slate-900 mb-1">
                  DASHBOARD & SYSTEMS
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Data analytics layouts, UI design systems, and responsive components.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-xs text-slate-600 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Structured for easy addition of upcoming projects</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsPlaceholder;
