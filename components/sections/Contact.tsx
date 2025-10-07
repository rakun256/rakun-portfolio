"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight relative group inline-block">
          Get in Touch
          <span className="absolute inset-0 blur-md opacity-60 group-hover:opacity-90 bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent pointer-events-none transition-all duration-500">
            Get in Touch
          </span>
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed mt-6 max-w-3xl mx-auto">
          Let’s connect! Whether you have a question, an opportunity, or just want to say hi,
          feel free to reach out through any of the platforms below.
        </p>
      </motion.div>

      {/* Contact Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6"
      >
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mreuslu"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-white/10 text-white/80 
                     hover:text-cyan-300 hover:border-cyan-400 transition-all duration-300 backdrop-blur-md"
        >
          <FaLinkedin className="text-2xl group-hover:text-cyan-300 transition-colors duration-300" />
          <span className="font-medium">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/rakun256"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-white/10 text-white/80 
                     hover:text-pink-400 hover:border-pink-400 transition-all duration-300 backdrop-blur-md"
        >
          <FaGithub className="text-2xl group-hover:text-pink-400 transition-colors duration-300" />
          <span className="font-medium">GitHub</span>
        </a>

        {/* Email */}
        <a
          href="mailto:emreuslu256@gmail.com"
          className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-white/10 text-white/80 
                     hover:text-blue-300 hover:border-blue-400 transition-all duration-300 backdrop-blur-md"
        >
          <FaEnvelope className="text-2xl group-hover:text-blue-300 transition-colors duration-300" />
          <span className="font-medium">emreuslu256@gmail.com</span>
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
