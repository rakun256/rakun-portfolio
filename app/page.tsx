"use client";

import AboutSection from "@/components/sections/About";
import AchievementsSection from "@/components/sections/Achievements";
import ContactSection from "@/components/sections/Contact";
import ExperienceSection from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/Projects";
import SkillsSection from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
    </>
  );
}
