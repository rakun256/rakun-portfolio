"use client";

import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { timeline } from "@/data/timeline";
import ExperienceCard from "../experience/ExperienceCard";
import HorizontalTimeline from "../experience/HorizontalTimeline";

export default function ExperienceSection() {
  const about = { title: "Experience" };
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => activeIndex > 0 && setActiveIndex((i) => i - 1);
  const next = () =>
    activeIndex < timeline.length - 1 && setActiveIndex((i) => i + 1);

  return (
    <section
      id="experience"
      className="relative h-screen w-full text-white flex flex-col items-center pt-20 overflow-y-visible"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-[#6f00ff] rounded-full opacity-40 blur-[150px]" />
        <div className="absolute top-[0px] right-[100px] w-[200px] h-[100px] bg-[#00f2ff] rounded-full opacity-30 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full px-4 mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight relative group inline-block text-center w-full">
          {about.title}
          <span className="absolute inset-0 blur-md opacity-60 group-hover:opacity-90 bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent pointer-events-none transition duration-500">
            {about.title}
          </span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        className="hidden md:flex flex-1 flex-col w-full items-center justify-center gap-12 px-4"
      >
        <HorizontalTimeline activeIndex={activeIndex} />

        <div className="relative w-full max-w-2xl flex items-center justify-center">
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            aria-label="Previous experience"
            className="absolute left-[-8rem] top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 disabled:opacity-50 rounded-full transition z-10"
          >
            <FiChevronLeft size={24} />
          </button>

          <div className="w-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                <ExperienceCard
                  title={timeline[activeIndex].title}
                  organization={timeline[activeIndex].organization}
                  date={timeline[activeIndex].date}
                  description={timeline[activeIndex].description}
                  isActive={true}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={next}
            disabled={activeIndex === timeline.length - 1}
            aria-label="Next experience"
            className="absolute right-[-8rem] top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 disabled:opacity-50 rounded-full transition z-10"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </motion.div>

      <div className="md:hidden w-full overflow-auto px-4 mt-8 pb-8">
        {timeline.map((item, idx) => (
          <div key={idx} className="mb-8 flex justify-center">
            <ExperienceCard
              title={item.title}
              organization={item.organization}
              date={item.date}
              description={item.description}
              isActive={idx === activeIndex}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
