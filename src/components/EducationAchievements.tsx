import React from 'react';
import { EducationItem, AchievementItem } from '../data/portfolioContent';
import { GraduationCap, Award, School, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface EducationAchievementsProps {
  education: EducationItem[];
  achievements: AchievementItem[];
}

export const EducationAchievements: React.FC<EducationAchievementsProps> = ({
  education,
  achievements,
}) => {
  return (
    <section id="education" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header: Poppins bold in capital letters */}
        <ScrollReveal direction="up" distance="sm">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-black text-[#0F172A] tracking-tight">
              EDUCATION & ACHIEVEMENTS
            </h2>
            <div className="w-16 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-5">
            <ScrollReveal direction="up" distance="sm" delay={100}>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-poppins font-bold uppercase tracking-wider text-slate-900">
                  ACADEMIC QUALIFICATIONS
                </h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs hover:border-blue-300 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                        {edu.qualification}
                      </span>
                      {(edu.status || edu.dates) && (
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold border border-slate-200 w-fit">
                          {edu.status || edu.dates}
                        </span>
                      )}
                    </div>

                    {edu.field && (
                      <h4 className="text-lg font-poppins font-bold text-slate-900 mb-1">
                        {edu.field}
                      </h4>
                    )}

                    <p className="text-sm text-slate-600 flex items-center gap-1.5 font-medium">
                      <School className="w-3.5 h-3.5 text-slate-400" />
                      <span>{edu.institution}</span>
                    </p>

                    {edu.source && (
                      <p className="text-[11px] text-slate-500 italic mt-2 pt-2 border-t border-slate-100">
                        Primary reference: {edu.source}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Achievements & Leadership Column */}
          <div className="lg:col-span-5 space-y-5">
            <ScrollReveal direction="up" distance="sm" delay={200}>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-poppins font-bold uppercase tracking-wider text-slate-900">
                  LEADERSHIP & RECOGNITION
                </h3>
              </div>

              <div className="space-y-4">
                {achievements.map((ach, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs relative overflow-hidden"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span>{ach.role}</span>
                    </div>

                    <h4 className="text-lg font-poppins font-bold text-slate-900 mb-2">
                      {ach.organisation}
                    </h4>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAchievements;
