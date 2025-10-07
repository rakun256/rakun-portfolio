"use client";

import { useEffect, useRef } from "react";
import { timeline } from "@/data/timeline";
import clsx from "clsx";
import "@/styles/animations.css";

interface HorizontalTimelineProps {
  activeIndex: number;
  onTimelineClick?: (index: number) => void;
}

export default function HorizontalTimeline({
  activeIndex,
  onTimelineClick,
}: HorizontalTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // progress & grid değişkenleri sadece mount sonrası 1 kez ayarlanır,
  // progress-width aktifIndex değiştikçe güncellenir.
  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      "--timeline-columns",
      `repeat(${timeline.length}, minmax(0, 1fr))`
    );
  }, []); // sadece bir kez

  useEffect(() => {
    if (!containerRef.current) return;
    const pct =
      timeline.length > 1
        ? (activeIndex / (timeline.length - 1)) * 100
        : 100;
    containerRef.current.style.setProperty("--progress-width", `${pct}%`);
  }, [activeIndex]); // sadece aktifIndex değişince güncellenir

  const handleDotClick = (index: number) => {
    if (onTimelineClick) onTimelineClick(index);
  };

  return (
    <div
      ref={containerRef}
      className="timeline-container w-full max-w-6xl mx-auto px-4 mb-12 relative"
    >
      {/* Timeline içerikleri */}
      <div
        className="timeline-grid relative z-10 pt-8"
        style={{
          alignItems: "center",
        }}
      >
        {timeline.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center space-y-2"
          >
            {/* Dot */}
            <button
              onClick={() => handleDotClick(i)}
              disabled={!onTimelineClick}
              className={clsx(
                "timeline-dot",
                i <= activeIndex
                  ? "timeline-dot-active"
                  : "timeline-dot-inactive"
              )}
              aria-label={`Go to ${item.title} at ${item.organization}`}
            />

            {/* Job Title */}
            <p
              className={clsx(
                "font-semibold leading-tight transition-all duration-500",
                i === activeIndex
                  ? "opacity-100 scale-105 text-white"
                  : "opacity-60 hover:opacity-80 text-white/80",
                timeline.length <= 3
                  ? "text-base md:text-lg"
                  : "text-sm md:text-base"
              )}
            >
              {item.title}
            </p>

            {/* Company */}
            <p
              className={clsx(
                "font-medium transition-all duration-500 pt-6 border-t border-white/15 w-full",
                "mt-2",
                i === activeIndex
                  ? "text-blue-300 opacity-90"
                  : "text-white/70 opacity-50 hover:opacity-70",
                timeline.length <= 3
                  ? "text-sm md:text-base"
                  : "text-xs md:text-sm"
              )}
            >
              {item.organization}
            </p>

            {/* Date */}
            <p
              className={clsx(
                "font-light transition-all duration-500",
                i === activeIndex
                  ? "text-cyan-300 opacity-80"
                  : "text-white/50 opacity-40 hover:opacity-60",
                timeline.length <= 3
                  ? "text-xs md:text-sm"
                  : "text-[10px] md:text-xs"
              )}
            >
              {item.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
