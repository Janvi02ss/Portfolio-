import React from 'react';
import { X, HelpCircle, Palette, Check } from 'lucide-react';

interface ConfirmationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  checkedItems: Record<string, boolean>;
  onToggleCheck: (key: string) => void;
}

export const ConfirmationDrawer: React.FC<ConfirmationDrawerProps> = ({
  isOpen,
  onClose,
  checkedItems,
  onToggleCheck,
}) => {
  const [copiedColor, setCopiedColor] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const paletteColors = [
    { name: 'Deep Slate', hex: '#0F172A', text: '#FFFFFF', desc: 'Primary dark & typography' },
    { name: 'Electric Blue', hex: '#2563EB', text: '#FFFFFF', desc: 'High-contrast bright accent' },
    { name: 'Sky Cyan', hex: '#0284C7', text: '#FFFFFF', desc: 'Lively secondary highlight' },
    { name: 'Slate Border', hex: '#E2E8F0', text: '#0F172A', desc: 'Card borders & dividers' },
    { name: 'Clean White', hex: '#FFFFFF', text: '#0F172A', desc: 'Crisp cards & surface' },
  ];

  const checklistItems = [
    {
      id: 'employer_spelling',
      title: 'Employer Spelling Confirmation',
      detail: 'The CV transcribes the employers as “Feliks Marketing LLP” and “Marched Solutions LLP”. Please verify whether these legal entity spellings are accurate before final public launch.',
      category: 'Experience',
    },
    {
      id: 'dates_verification',
      title: 'Internship Dates Verification',
      detail: 'The Feliks Marketing internship is dated “May 2026 – August 2026” (a future/upcoming internship window), and Marched Solutions is “November 2023 – May 2025”. Please confirm the exact months and years.',
      category: 'Experience',
    },
    {
      id: 'degree_institution',
      title: 'Master’s Programme / Institution Reconciliation',
      detail: 'The CV and the About Me document contained different descriptions of the master’s programme. As instructed, the site uses the current About Me brief: “Visual Experience Design at Karnavati University”. Confirm this is your intended phrasing.',
      category: 'Education',
    },
    {
      id: 'software_skills',
      title: 'Software Skills Specifics',
      detail: 'The CV included a Software Skills heading without specific tool names in the extracted text. Editable placeholders have been provided so you can list tools like Figma, Adobe Creative Cloud, Blender, etc.',
      category: 'Skills',
    },
    {
      id: 'ai_skills',
      title: 'AI Skills Specifics',
      detail: 'The CV included an AI Skills heading without specific names. Editable placeholders are provided so you can specify prompt engineering, generative design, Midjourney, etc.',
      category: 'Skills',
    },
    {
      id: 'contact_privacy',
      title: 'Public Contact Preference',
      detail: 'Both emails (janviguptawork2@gmail.com and ku2503m0047@karnavatiuniversity.edu.in) and phone numbers were supplied in the CV. Phone numbers are currently hidden by default for your privacy; choose your preferred public visibility before sharing.',
      category: 'Privacy',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-fadeIn">
      <div className="w-full max-w-lg bg-white h-full overflow-y-auto border-l border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-poppins font-black text-slate-900">
                  VERIFICATION CHECKLIST
                </h3>
                <span className="text-[11px] text-slate-500">Items to verify before public release</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Palette Reference Swatch Bar */}
          <div className="my-6 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-poppins font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-blue-600" />
                Bright High-Contrast Palette
              </span>
              <span className="text-[11px] text-slate-400">Click to copy hex</span>
            </div>
            <div className="grid grid-cols-5 gap-1.5 rounded-xl overflow-hidden border border-slate-200 p-1 bg-white">
              {paletteColors.map((c) => (
                <button
                  key={c.hex}
                  onClick={() => copyHex(c.hex)}
                  style={{ backgroundColor: c.hex }}
                  className="h-12 rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105 relative group cursor-pointer shadow-2xs"
                  title={`${c.name}: ${c.hex} (${c.desc})`}
                >
                  <span
                    className="text-[9px] font-bold font-mono"
                    style={{ color: c.text }}
                  >
                    {c.hex}
                  </span>
                  {copiedColor === c.hex && (
                    <span className="absolute inset-0 bg-black/60 rounded flex items-center justify-center text-white text-[9px] font-bold">
                      Copied!
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Checklist items */}
          <div className="space-y-3.5">
            <span className="text-xs font-poppins font-bold uppercase tracking-wider text-blue-600 block">
              ITEMS NEEDING CONFIRMATION
            </span>

            {checklistItems.map((item) => {
              const isChecked = !!checkedItems[item.id];

              return (
                <div
                  key={item.id}
                  onClick={() => onToggleCheck(item.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isChecked
                      ? 'bg-blue-50/50 border-blue-400 shadow-2xs'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <button
                      type="button"
                      className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                        isChecked
                          ? 'bg-blue-600 border-blue-600 text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                      aria-label={`Toggle ${item.title}`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </button>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-slate-900">
                          {item.title}
                        </span>
                        <span className="text-[10px] px-2 py-0.2 bg-slate-100 text-slate-700 rounded-full border border-slate-200 font-semibold">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-6 border-t border-slate-200 mt-6">
          <button
            onClick={onClose}
            className="w-full py-3.5 rounded-xl bg-[#0F172A] text-white text-xs font-poppins font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors cursor-pointer"
          >
            CLOSE & CONTINUE BROWSING
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDrawer;
