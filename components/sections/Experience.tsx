"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { timeline } from "@/data/timeline";
import ExperienceCard from "../experience/ExperienceCard";
import HorizontalTimeline from "../experience/HorizontalTimeline";

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mobil cihaz kontrolü
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Masaüstü için scroll kilitleme
  useEffect(() => {
    if (isMobile) return;
    
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.style.overflow = "hidden";
          document.documentElement.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
          document.documentElement.style.overflow = "auto";
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isMobile]);

  // Wheel event handler
  const handleWheel = useCallback((e: WheelEvent) => {
    if (isMobile || isScrolling) return;

    e.preventDefault();
    e.stopPropagation();

    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 600);

    if (e.deltaY > 0 && activeIndex < timeline.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (e.deltaY < 0 && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  }, [activeIndex, isScrolling, isMobile]);

  // Wheel event listener
  useEffect(() => {
    if (isMobile) return;
    
    const section = sectionRef.current;
    if (!section) return;

    section.addEventListener("wheel", handleWheel, { passive: false });
    return () => section.removeEventListener("wheel", handleWheel);
  }, [handleWheel, isMobile]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`relative w-full bg-black text-white ${
        isMobile ? 'py-16 px-4' : 'h-screen overflow-hidden'
      }`}
    >
      {/* Başlık */}
      <div className="flex justify-center items-center mb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight relative group inline-block text-center">
          Experience
          <span className="absolute inset-0 blur-md opacity-60 group-hover:opacity-90 bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent pointer-events-none transition-all duration-500">
            Experience
          </span>
        </h2>
      </div>

      {/* Masaüstü Sürümü */}
      {!isMobile && (
        <>
          {/* Timeline */}
          <div className="mb-8">
            <HorizontalTimeline activeIndex={activeIndex} />
          </div>

          {/* Aktif Kart */}
          <div className="flex items-center justify-center h-[calc(100vh-280px)]">
            <ExperienceCard
              title={timeline[activeIndex].title}
              organization={timeline[activeIndex].organization}
              date={timeline[activeIndex].date}
              description={timeline[activeIndex].description}
              isActive={true}
            />
          </div>

          {/* Scroll İpucu */}
          {activeIndex < timeline.length - 1 && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm animate-bounce">
              Scroll to see more
            </div>
          )}
        </>
      )}

      {/* Mobil Sürümü */}
      {isMobile && (
        <div className="space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="w-full">
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
      )}
    </section>
  );
}
