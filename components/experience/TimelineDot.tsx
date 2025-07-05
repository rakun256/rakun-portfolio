// ExperienceSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { timeline } from "@/data/timeline";
import ExperienceCard from "../experience/ExperienceCard";
import HorizontalTimeline from "../experience/HorizontalTimeline";

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleWheel = (e: WheelEvent) => {
    if (isScrolling) return;
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 800);

    if (e.deltaY > 0 && activeIndex < timeline.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (e.deltaY < 0 && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    section.addEventListener("wheel", handleWheel, { passive: false });
    return () => section.removeEventListener("wheel", handleWheel);
  }, [activeIndex, isScrolling]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative h-screen w-full overflow-hidden bg-black text-white"
    >
      <div className="flex flex-col h-full">
        {/* Başlık */}
        <div className="shrink-0 py-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight relative group inline-block text-center w-full">
            Experience
            <span className="absolute inset-0 blur-md opacity-60 group-hover:opacity-90 bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent pointer-events-none transition-all duration-500 text-center">
              Experience
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="shrink-0 hidden md:block">
          <HorizontalTimeline activeIndex={activeIndex} />
        </div>

        {/* Aktif Kart */}
        <div className="grow flex items-center justify-center px-4">
          <ExperienceCard
            title={timeline[activeIndex].title}
            organization={timeline[activeIndex].organization}
            date={timeline[activeIndex].date}
            description={timeline[activeIndex].description}
            isActive={true}
          />
        </div>

        {/* Mobil versiyon */}
        <div className="md:hidden mt-8 px-4">
          {timeline.map((item, index) => (
            <div key={index} className="mb-12">
              <ExperienceCard
                title={item.title}
                organization={item.organization}
                date={item.date}
                description={item.description}
                isActive={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
