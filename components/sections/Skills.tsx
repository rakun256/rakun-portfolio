"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import SkillsGrid from "@/components/skills/SkillsGrid";
import { skills } from "@/data/skills";

export default function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 justify-center items-center flex overflow-y-visible"
    >

      {/* Başlık */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight relative group inline-block">
          Skills & Expertise
          <span className="absolute inset-0 blur-md opacity-60 group-hover:opacity-90 bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent pointer-events-none transition-all duration-500">
            Skills & Expertise
          </span>
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed mt-6">
          A blend of frontend precision, backend scalability, and creative problem-solving —
          constantly evolving through hands-on development.
        </p>
      </motion.div>

      {/* Skill grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <SkillsGrid skills={skills} />
      </motion.div>
    </SectionWrapper>
  );
}
