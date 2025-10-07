"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import AchievementCard from "@/components/achievements/AchievementCard";
import { achievements } from "@/data/achievements";

export default function AchievementsSection() {
  return (
    <SectionWrapper
      id="achievements"
      className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-y-visible"
    >

      {/* Başlık */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight relative group inline-block">
          Achievements & Awards
          <span className="absolute inset-0 blur-md opacity-60 group-hover:opacity-90 bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent pointer-events-none transition-all duration-500">
            Achievements & Awards
          </span>
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed mt-6 max-w-3xl mx-auto">
          Recognitions and milestones that highlight continuous learning,
          innovation, and technical excellence.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full"
      >
        {achievements.map((item, index) => (
          <AchievementCard key={index} {...item} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
