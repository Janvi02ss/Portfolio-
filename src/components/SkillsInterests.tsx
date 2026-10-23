import React, { useState } from 'react';
import { Plus, X, Sparkles, Cpu, Layers, Heart, Info } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface SkillsInterestsProps {
  skillsFromCv: string[];
  interestsFromCv: string[];
  softwareSkillsNote: string;
  aiSkillsNote: string;
}

export const SkillsInterests: React.FC<SkillsInterestsProps> = ({
  skillsFromCv,
  interestsFromCv,
  softwareSkillsNote,
  aiSkillsNote,
}) => {
  const [softwareSkills, setSoftwareSkills] = useState<string[]>([]);
  const [newSoftwareInput, setNewSoftwareInput] = useState('');
  const [isAddingSoftware, setIsAddingSoftware] = useState(false);

  const [aiSkills, setAiSkills] = useState<string[]>([]);
  const [newAiInput, setNewAiInput] = useState('');
  const [isAddingAi, setIsAddingAi] = useState(false);

  const addSoftware = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSoftwareInput.trim()) {
      setSoftwareSkills([...softwareSkills, newSoftwareInput.trim()]);
      setNewSoftwareInput('');
      setIsAddingSoftware(false);
    }
  };

  const removeSoftware = (index: number) => {
    setSoftwareSkills(softwareSkills.filter((_, i) => i !== index));
  };

  const addAi = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAiInput.trim()) {
      setAiSkills([...aiSkills, newAiInput.trim()]);
      setNewAiInput('');
      setIsAddingAi(false);
    }
  };

  const removeAi = (index: number) => {
    setAiSkills(aiSkills.filter((_, i) => i !== index));
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-white border-t border-slate-200 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header: Poppins bold in capital letters */}
        <ScrollReveal direction="up" distance="sm">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-black text-[#0F172A] tracking-tight">
              SKILLS & INTERESTS
            </h2>
            <div className="w-16 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full" />
            <p className="text-sm text-slate-600 max-w-lg mx-auto mt-3">
              Core design strengths transcribed directly from the CV, alongside personal interests and editable software tool placeholders.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-10">
          {/* 1. Core Competencies */}
          <ScrollReveal direction="up" distance="sm" delay={100}>
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-poppins font-bold uppercase tracking-wider text-slate-900">
                      CORE SKILLS
                    </h3>
                    <span className="text-[11px] text-slate-500">Directly from supplied CV</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                  Foundational design mindsets and collaborative problem-solving abilities:
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {skillsFromCv.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 hover:border-blue-500 transition-colors shadow-2xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 2. Personal Interests */}
          <ScrollReveal direction="up" distance="sm" delay={200}>
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-poppins font-bold uppercase tracking-wider text-slate-900">
                      INTERESTS & ACTIVITIES
                    </h3>
                    <span className="text-[11px] text-slate-500">Directly from supplied CV</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                  Personal pursuits that fuel everyday energy, discipline, and creative focus:
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {interestsFromCv.map((interest, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 hover:border-blue-500 transition-colors shadow-2xs"
                    >
                      <span className="text-blue-600 mr-2 font-bold">•</span>
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 3. Editable Placeholders for Software & AI Skills */}
        <ScrollReveal direction="up" distance="sm" delay={250}>
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
            <div className="flex items-start gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-white text-blue-600 shrink-0 mt-0.5 border border-slate-200">
                <Info className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-poppins font-bold uppercase tracking-wider text-slate-900">
                  SOFTWARE & AI TOOLKITS (EDITABLE PLACEHOLDERS)
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  The CV contained headings for Software and AI Skills, but specific tools were omitted. In accordance with content integrity guidelines, these are left as clean editable placeholders rather than invented tools.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Software Skills Area */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-poppins font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    SOFTWARE SKILLS
                  </span>
                  <span className="text-[11px] text-slate-500">Awaiting Janvi's list</span>
                </div>

                {softwareSkills.length === 0 && !isAddingSoftware ? (
                  <div className="border border-dashed border-slate-200 rounded-xl p-4 text-center my-2 bg-slate-50/70">
                    <p className="text-xs text-slate-600 italic mb-2">
                      "{softwareSkillsNote}"
                    </p>
                    <button
                      onClick={() => setIsAddingSoftware(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add software (e.g. Figma, Illustrator)</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {softwareSkills.map((tool, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-900"
                        >
                          <span>{tool}</span>
                          <button
                            onClick={() => removeSoftware(idx)}
                            className="text-slate-400 hover:text-red-600 ml-1 cursor-pointer"
                            aria-label={`Remove ${tool}`}
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>

                    {isAddingSoftware ? (
                      <form onSubmit={addSoftware} className="flex gap-2">
                        <input
                          type="text"
                          value={newSoftwareInput}
                          onChange={(e) => setNewSoftwareInput(e.target.value)}
                          placeholder="e.g. Figma, Adobe Illustrator..."
                          className="text-xs px-3 py-1.5 border border-blue-500 rounded-lg bg-white text-slate-900 flex-1 focus:outline-none"
                          autoFocus
                        />
                        <button
                          type="submit"
                          className="px-3.5 py-1.5 bg-blue-600 text-white text-xs rounded-lg font-bold cursor-pointer hover:bg-blue-700 transition-colors"
                        >
                          Add
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsAddingSoftware(false)}
                          className="px-2 py-1.5 text-xs text-slate-500 cursor-pointer"
                        >
                          Cancel
                        </button>
                      </form>
                    ) : (
                      <button
                        onClick={() => setIsAddingSoftware(true)}
                        className="text-xs text-blue-600 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-3 h-3" /> Add another software skill
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* AI Skills Area */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-poppins font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-blue-600" />
                    AI SKILLS
                  </span>
                  <span className="text-[11px] text-slate-500">Awaiting Janvi's list</span>
                </div>

                {aiSkills.length === 0 && !isAddingAi ? (
                  <div className="border border-dashed border-slate-200 rounded-xl p-4 text-center my-2 bg-slate-50/70">
                    <p className="text-xs text-slate-600 italic mb-2">
                      "{aiSkillsNote}"
                    </p>
                    <button
                      onClick={() => setIsAddingAi(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add AI skill (e.g. Midjourney, Generative Design)</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {aiSkills.map((tool, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-900"
                        >
                          <span>{tool}</span>
                          <button
                            onClick={() => removeAi(idx)}
                            className="text-slate-400 hover:text-red-600 ml-1 cursor-pointer"
                            aria-label={`Remove ${tool}`}
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>

                    {isAddingAi ? (
                      <form onSubmit={addAi} className="flex gap-2">
                        <input
                          type="text"
                          value={newAiInput}
                          onChange={(e) => setNewAiInput(e.target.value)}
                          placeholder="e.g. Midjourney, Prompt Engineering..."
                          className="text-xs px-3 py-1.5 border border-blue-500 rounded-lg bg-white text-slate-900 flex-1 focus:outline-none"
                          autoFocus
                        />
                        <button
                          type="submit"
                          className="px-3.5 py-1.5 bg-blue-600 text-white text-xs rounded-lg font-bold cursor-pointer hover:bg-blue-700 transition-colors"
                        >
                          Add
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsAddingAi(false)}
                          className="px-2 py-1.5 text-xs text-slate-500 cursor-pointer"
                        >
                          Cancel
                        </button>
                      </form>
                    ) : (
                      <button
                        onClick={() => setIsAddingAi(true)}
                        className="text-xs text-blue-600 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-3 h-3" /> Add another AI skill
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsInterests;
