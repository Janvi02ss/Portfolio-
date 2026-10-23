import React, { useState } from 'react';
import { ExperienceItem } from '../data/portfolioContent';
import { Briefcase, Calendar, AlertCircle, ChevronRight, Edit3 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ExperienceProps {
  experiences: ExperienceItem[];
  onConfirmItem?: (id: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const [items, setItems] = useState<ExperienceItem[]>(experiences);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleUpdate = (id: string, field: 'organisation' | 'role' | 'dates', val: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: val } : item))
    );
  };

  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header: Poppins bold in capital letters */}
        <ScrollReveal direction="up" distance="sm">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-black text-[#0F172A] tracking-tight">
              WORK EXPERIENCE
            </h2>
            <div className="w-16 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full" />
            <p className="text-sm text-slate-600 max-w-lg mx-auto mt-3">
              Hands-on background in visual design, brand assets, social campaigns, and dashboard interface support.
            </p>
          </div>
        </ScrollReveal>

        {/* Stacked Editorial Timeline */}
        <div className="space-y-7 relative">
          <div className="hidden md:block absolute top-6 bottom-6 left-[23px] w-[2px] bg-slate-200" />

          {items.map((exp, idx) => {
            const isEditing = editingId === exp.id;

            return (
              <ScrollReveal
                key={exp.id}
                direction="up"
                distance="sm"
                delay={idx * 120}
              >
                <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 transition-all duration-300 hover:shadow-lg hover:border-blue-300 md:ml-12">
                  {/* Timeline node icon */}
                  <div className="hidden md:flex absolute -left-12 top-7 w-6 h-6 rounded-full bg-blue-50 border-2 border-blue-600 items-center justify-center -translate-x-1/2 z-10 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  </div>

                  {/* Top header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
                    <div>
                      {isEditing ? (
                        <div className="space-y-2">
                          <input
                            type="text"
                            value={exp.role}
                            onChange={(e) => handleUpdate(exp.id, 'role', e.target.value)}
                            className="text-lg font-poppins font-bold text-slate-900 px-2 py-1 border border-blue-500 rounded-md bg-white w-full"
                            aria-label="Role"
                          />
                          <input
                            type="text"
                            value={exp.organisation}
                            onChange={(e) => handleUpdate(exp.id, 'organisation', e.target.value)}
                            className="text-sm font-semibold text-blue-600 px-2 py-1 border border-blue-500 rounded-md bg-white w-full"
                            aria-label="Organisation"
                          />
                        </div>
                      ) : (
                        <>
                          <h3 className="text-xl sm:text-2xl font-poppins font-bold text-slate-900 flex items-center gap-2">
                            {exp.role}
                          </h3>
                          <div className="text-sm font-semibold text-blue-600 mt-1 flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            <span>{exp.organisation}</span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Dates badge & verification status */}
                    <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                      {isEditing ? (
                        <input
                          type="text"
                          value={exp.dates}
                          onChange={(e) => handleUpdate(exp.id, 'dates', e.target.value)}
                          className="text-xs font-semibold text-slate-700 px-2 py-1 border border-blue-500 rounded-md bg-white"
                          aria-label="Dates"
                        />
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
                          <Calendar className="w-3.5 h-3.5 text-blue-600" />
                          <span>{exp.dates}</span>
                        </span>
                      )}

                      <button
                        onClick={() => setEditingId(isEditing ? null : exp.id)}
                        className="text-[11px] text-slate-500 hover:text-blue-600 inline-flex items-center gap-1 mt-1 font-medium transition-colors cursor-pointer"
                        title="Adjust spelling or dates if desired"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>{isEditing ? 'Save Changes' : 'Quick edit'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <ul className="space-y-2.5 mb-5 text-sm sm:text-base text-slate-700">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <ChevronRight className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Source Verification Note Callout */}
                  {exp.source_note && (
                    <div className="rounded-2xl bg-amber-50/70 border border-amber-200/80 px-4 py-2.5 text-xs text-amber-900 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Verification reminder: </span>
                        <span>{exp.source_note}</span>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
