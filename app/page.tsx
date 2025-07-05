"use client";

import AboutSection from "@/components/sections/About";
import ExperienceSection from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExperienceSection />
    </>
  );
}
