import React, { useState } from 'react';
import { initialPortfolioData } from './data/portfolioContent';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import SkillsInterests from './components/SkillsInterests';
import EducationAchievements from './components/EducationAchievements';
import ProjectsPlaceholder from './components/ProjectsPlaceholder';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConfirmationDrawer from './components/ConfirmationDrawer';

export function App() {
  const [data] = useState(initialPortfolioData);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    degree_institution: true,
  });

  const totalChecklistCount = 6;
  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const pendingCount = totalChecklistCount - completedCount;

  const handleToggleCheck = (key: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation Header */}
      <Header
        onOpenChecklist={() => setIsChecklistOpen(true)}
        pendingConfirmationsCount={pendingCount}
      />

      <main className="flex-1">
        {/* 1. Hero Banner with Animated JG Logo and All-caps headline */}
        <Hero />

        {/* 2. About Me Section (Exact quote & text, normalized typography) */}
        <About
          quote={data.about.quote}
          paragraphs={data.about.paragraphs}
        />

        {/* 3. Work Experience (All 3 experiences) */}
        <Experience experiences={data.experience} />

        {/* 4. Skills & Interests with Editable Placeholders */}
        <SkillsInterests
          skillsFromCv={data.skills_and_interests.skills_from_cv}
          interestsFromCv={data.skills_and_interests.interests_from_cv}
          softwareSkillsNote={data.skills_and_interests.software_skills_note}
          aiSkillsNote={data.skills_and_interests.ai_skills_note}
        />

        {/* 5. Education & Achievements (Without design pedagogy box) */}
        <EducationAchievements
          education={data.education}
          achievements={data.achievements}
        />

        {/* 6. Selected Work (Projects coming soon placeholder) */}
        <ProjectsPlaceholder />

        {/* 7. Contact Details & Privacy preferences */}
        <Contact
          emails={data.contact.emails}
          phoneNumbers={data.contact.phone_numbers}
          publishingNote={data.contact.publishing_note}
        />
      </main>

      {/* Footer with JG Logo */}
      <Footer />

      {/* Pre-launch verification drawer */}
      <ConfirmationDrawer
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
        checkedItems={checkedItems}
        onToggleCheck={handleToggleCheck}
      />
    </div>
  );
}

export default App;
