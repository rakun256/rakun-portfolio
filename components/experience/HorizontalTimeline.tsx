"use client";

import { useEffect, useState, useRef } from "react";
import { timeline } from "@/data/timeline";
import clsx from "clsx";

interface HorizontalTimelineProps {
  activeIndex: number;
}

export default function HorizontalTimeline({ activeIndex }: HorizontalTimelineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progressWidth, setProgressWidth] = useState("0%");

  useEffect(() => {
    const progress = (activeIndex / (timeline.length - 1)) * 100;
    setProgressWidth(`${progress}%`);
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto mb-12 h-32 flex items-center"
    >
      {/* Arka plan çizgisi */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-white/20 rounded-full transform -translate-y-1/2 z-0" />

      {/* Gradyan ilerleme çizgisi */}
      <div
        className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-500 rounded-full z-10 transition-all duration-700 ease-out"
        style={{ width: progressWidth, transform: "translateY(-50%)" }}
      />

      {/* Noktalar ve bilgiler */}
      <div className="flex justify-between w-full z-20">
        {timeline.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-32 text-center">
            {/* Nokta */}
            <div
              className={clsx(
                "w-4 h-4 rounded-full border-2 transition-all duration-700 ease-out mb-3 relative",
                index <= activeIndex
                  ? "bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-500 border-transparent scale-125 shadow-lg shadow-cyan-400/50"
                  : "bg-white/20 border-white/40 hover:border-white/60"
              )}
            >
              {/* Aktif nokta için pulsing efekti */}
              {index === activeIndex && (
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-500 animate-ping opacity-75" />
              )}
            </div>
            
            {/* Bilgiler */}
            <div className={clsx(
              "transition-all duration-500",
              index === activeIndex ? "opacity-100 transform scale-105" : "opacity-70"
            )}>
              <p className="text-sm text-white font-semibold leading-tight mb-1">{item.title}</p>
              <p className="text-xs text-white/70 mb-1">{item.organization}</p>
              <p className="text-[10px] text-white/50">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
