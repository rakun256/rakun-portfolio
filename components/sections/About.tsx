"use client";

import { motion } from "framer-motion";
import about from "@/data/about";
import SectionWrapper from "@/components/common/SectionWrapper";
import { FaReact, FaCode, FaLaptopCode, FaUserTie } from "react-icons/fa";

const icons = [FaReact, FaCode, FaLaptopCode, FaUserTie];

export default function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 justify-center items-center flex"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] bg-[#6f00ff] rounded-full opacity-40 blur-[150px]" />
        <div className="absolute top-[-150px] right-[-100px] w-[400px] h-[400px] bg-[#ff00ff] rounded-full opacity-30 blur-[120px]" />
        <div className="absolute top-[0px] left-[100px] w-[200px] h-[100px] bg-[#0084ff] rounded-full opacity-30 blur-[120px]" />
        <div className="absolute bottom-[0px] right-[100px] w-[200px] h-[100px] bg-[#00f2ff] rounded-full opacity-30 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight relative group inline-block text-center w-full">
          {about.title}
          <span className="absolute inset-0 blur-md opacity-60 group-hover:opacity-90 bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent pointer-events-none transition-all duration-500 text-center">
            {about.title}
          </span>
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-white/80 text-base md:text-lg leading-relaxed mt-6 whitespace-pre-line text-align-left"
        >
          {about.description}
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 0.8, staggerChildren: 0.15 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
      >
        {about.highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              className="relative w-full h-32 sm:h-36 flex flex-col justify-center items-center text-center 
             bg-white/10 border border-white/30 backdrop-blur-md p-4 rounded-2xl 
             shadow-xl text-white/90 group transition-transform hover:scale-[1.03] 
             hover:shadow-2xl min-w-[240px] sm:min-w-[260px]"
            >
              <motion.div
                className="absolute w-60 h-60 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none 
               bg-gradient-to-br from-[#6f00ff] via-[#a002a0] to-[#0876e4] opacity-0 
               blur-3xl group-hover:opacity-30 transition-opacity duration-300"
                style={{ left: "50%", top: "50%" }}
              />

              <div className="flex justify-center items-center z-10 relative h-full gap-4">
                <Icon className="text-white/70 text-3xl group-hover:text-[#bd7bbd] transition-colors duration-300" />
                <span className="text-sm font-medium leading-tight line-clamp-2 px-1">
                  {item.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
