'use client';

import Button from "../common/Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative px-4">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-[#6f00ff] rounded-full opacity-40 blur-[150px]" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-[#ff00ff] rounded-full opacity-30 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-md bg-white/5 border border-white/10 p-10 rounded-2xl"
      >
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          Hi, I'm <br />
          <span className="text-white">Emre Uslu</span>
        </h1>
        <p className="text-md md:text-xl text-white/70 mb-8">
          Frontend & Mobile Developer
        </p>
        <Button label="See My Work" href="#projects" />
      </motion.div>

      <div className="absolute bottom-10 animate-bounce text-white/70">
        ↓
      </div>
    </section>
  );
}
