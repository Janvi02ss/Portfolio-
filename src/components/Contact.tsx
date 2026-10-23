import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ContactProps {
  emails: string[];
  phoneNumbers: string[];
  publishingNote: string;
}

export const Contact: React.FC<ContactProps> = ({
  emails,
  phoneNumbers,
  publishingNote,
}) => {
  const [showPrimaryEmail, setShowPrimaryEmail] = useState(true);
  const [showUniEmail, setShowUniEmail] = useState(true);
  const [showPhoneNumbers, setShowPhoneNumbers] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSent(true);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header: Poppins bold in capital letters */}
        <ScrollReveal direction="up" distance="sm">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-black text-[#0F172A] tracking-tight">
              GET IN TOUCH
            </h2>
            <div className="w-16 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full" />
            <p className="text-sm text-slate-600 max-w-lg mx-auto mt-3">
              Open to visual design opportunities, UI/UX collaborations, and creative conversations.
            </p>
          </div>
        </ScrollReveal>

        {/* Privacy & Publishing Notice Box */}
        <ScrollReveal direction="up" distance="sm" delay={100}>
          <div className="mb-10 p-5 rounded-3xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs">
            <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 flex-1">
              <span className="font-bold text-slate-900 block mb-0.5">Privacy & Public Display Preference</span>
              <p className="leading-relaxed">{publishingNote}</p>
              <div className="mt-3 flex flex-wrap gap-2 items-center">
                <span className="text-[11px] font-semibold text-slate-500">Toggle visibility:</span>
                <button
                  onClick={() => setShowPhoneNumbers(!showPhoneNumbers)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 border transition-colors cursor-pointer ${
                    showPhoneNumbers
                      ? 'bg-blue-50 border-blue-200 text-blue-700'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {showPhoneNumbers ? <Eye className="w-3.5 h-3.5 text-blue-600" /> : <EyeOff className="w-3.5 h-3.5" />}
                  Phone Numbers ({showPhoneNumbers ? 'Visible' : 'Hidden for privacy'})
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="md:col-span-5 space-y-4">
            <ScrollReveal direction="up" distance="sm" delay={150}>
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-5">
                <h3 className="text-xs font-poppins font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3">
                  CONTACT CHANNELS
                </h3>

                {/* Primary Work Email */}
                {showPrimaryEmail && emails[0] && (
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-poppins font-bold uppercase tracking-wider text-slate-500 block">
                      WORK EMAIL
                    </span>
                    <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                      <a
                        href={`mailto:${emails[0]}`}
                        className="text-xs font-semibold text-slate-900 hover:text-blue-600 truncate transition-colors flex items-center gap-2"
                      >
                        <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate">{emails[0]}</span>
                      </a>
                      <button
                        onClick={() => handleCopy(emails[0], 'email1')}
                        className="p-1 rounded text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
                        title="Copy email"
                      >
                        {copiedItem === 'email1' ? (
                          <Check className="w-3.5 h-3.5 text-green-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* University Email */}
                {showUniEmail && emails[1] && (
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-poppins font-bold uppercase tracking-wider text-slate-500 block">
                      UNIVERSITY EMAIL
                    </span>
                    <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                      <a
                        href={`mailto:${emails[1]}`}
                        className="text-xs font-semibold text-slate-900 hover:text-blue-600 truncate transition-colors flex items-center gap-2"
                      >
                        <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate">{emails[1]}</span>
                      </a>
                      <button
                        onClick={() => handleCopy(emails[1], 'email2')}
                        className="p-1 rounded text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
                        title="Copy email"
                      >
                        {copiedItem === 'email2' ? (
                          <Check className="w-3.5 h-3.5 text-green-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Phone Numbers */}
                {showPhoneNumbers && phoneNumbers.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-poppins font-bold uppercase tracking-wider text-slate-500 block">
                      PHONE CONTACT
                    </span>
                    {phoneNumbers.map((phone, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-200"
                      >
                        <a
                          href={`tel:${phone}`}
                          className="text-xs font-semibold text-slate-900 hover:text-blue-600 flex items-center gap-2"
                        >
                          <Phone className="w-3.5 h-3.5 text-blue-600" />
                          <span>+91 {phone}</span>
                        </a>
                        <button
                          onClick={() => handleCopy(phone, `phone-${pIdx}`)}
                          className="p-1 rounded text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
                          title="Copy phone"
                        >
                          {copiedItem === `phone-${pIdx}` ? (
                            <Check className="w-3.5 h-3.5 text-green-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Quick Message Form */}
          <div className="md:col-span-7">
            <ScrollReveal direction="up" distance="sm" delay={250}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
                <h3 className="text-base font-poppins font-bold uppercase tracking-wider text-slate-900 mb-1">
                  SEND A MESSAGE
                </h3>
                <p className="text-xs text-slate-600 mb-5">
                  Have a project inquiry, internship role, or design question? Leave a note below.
                </p>

                {formSent ? (
                  <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100 text-center space-y-2">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-2">
                      <Check className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-poppins font-bold uppercase text-slate-900">
                      THANK YOU FOR REACHING OUT!
                    </h4>
                    <p className="text-xs text-slate-600">
                      Your note has been received. You can also reach Janvi directly at{' '}
                      <strong className="text-blue-600">{emails[0]}</strong>.
                    </p>
                    <button
                      onClick={() => {
                        setFormSent(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="mt-3 text-xs text-blue-600 font-bold hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-poppins font-bold text-slate-900 uppercase tracking-wide mb-1">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Maya Sharma"
                        className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-poppins font-bold text-slate-900 uppercase tracking-wide mb-1">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. maya@example.com"
                        className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-poppins font-bold text-slate-900 uppercase tracking-wide mb-1">
                        MESSAGE
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your note, feedback, or project opportunity..."
                        className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#0F172A] text-white text-xs sm:text-sm font-poppins font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>SEND MESSAGE</span>
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
