"use client";

import Button from "../common/Button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import CustomTypewriter from "../common/Typewriter";
import typewriterWords from "../../data/typewriter.json";
import SectionWrapper from "../common/SectionWrapper";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleClick = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center relative px-4"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-[#6f00ff] rounded-full opacity-40 blur-[150px]" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-[#ff00ff] rounded-full opacity-30 blur-[120px]" />
        <div className="absolute bottom-[0px] left-[100px] w-[200px] h-[100px] bg-[#0084ff] rounded-full opacity-30 blur-[120px]" />
        <div className="absolute top-[0px] right-[100px] w-[200px] h-[100px] bg-[#00f2ff] rounded-full opacity-30 blur-[120px]" />
      </div>

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative backdrop-blur-md bg-white/5 border border-white/30 py-16 px-6 sm:px-10 md:px-20 lg:px-40 rounded-2xl w-full max-w-3xl overflow-hidden group"
      >
        <motion.div
          className="absolute w-60 h-60 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none bg-gradient-to-br from-[#6f00ff] via-[#a002a0] to-[#0876e4] opacity-30 blur-3xl group-hover:opacity-30 transition-opacity duration-300"
          style={{
            left: springX,
            top: springY,
          }}
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4 leading-tight relative z-10 hover:cursor-default">
          Hi, I'm <br />
          <span className="relative inline-block font-bold transition-all duration-500 group">
            <span className="text-white md:group-hover:text-transparent md:group-hover:bg-gradient-to-r md:group-hover:from-blue-400 md:group-hover:via-cyan-400 md:group-hover:to-pink-500 md:group-hover:bg-clip-text transition-all duration-500 bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent md:text-white">
              Emre Uslu
            </span>
            <span className="absolute inset-0 blur-md opacity-80 md:opacity-0 md:group-hover:opacity-80 bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent pointer-events-none transition-all duration-500">
              Emre Uslu
            </span>
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/70 mb-10 relative z-10 hover:cursor-default">
          Frontend & Mobile Developer
        </p>
        <div className="relative mb-16">
          <CustomTypewriter words={typewriterWords} />
        </div>
        <div className="relative z-10">
          <Button label="See My Work" onClick={() => handleClick("#projects")} />
        </div>
      </motion.div>

      <div className="absolute bottom-10 animate-bounce text-white/70 text-xl sm:text-2xl">
        ↓
      </div>
    </section>
  );
}
