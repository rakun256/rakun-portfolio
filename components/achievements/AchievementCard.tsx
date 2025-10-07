"use client";

import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

interface AchievementCardProps {
  title: string;
  event: string;
  date: string;
  description: string;
}

export default function AchievementCard({
  title,
  event,
  date,
  description,
}: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative flex flex-col justify-between p-6 rounded-2xl 
                 bg-white/10 border border-white/20 backdrop-blur-md 
                 shadow-lg hover:shadow-2xl hover:scale-[1.02] 
                 transition-all duration-500 text-white"
    >
      {/* Hover Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 
                   opacity-0 blur-3xl group-hover:opacity-20 transition-opacity duration-500 -z-10"
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <FaAward className="text-pink-400 text-2xl group-hover:text-cyan-300 transition-colors duration-300" />
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>

      {/* Event & Date */}
      <p className="text-sm text-white/70 italic mb-1">{event}</p>
      <p className="text-xs text-white/50 mb-3">{date}</p>

      {/* Description */}
      <p className="text-sm text-white/80 leading-relaxed">{description}</p>
    </motion.div>
  );
}
