"use client";

import { useEffect, useRef, useState } from "react";
import { timeline } from "@/data/timeline";
import clsx from "clsx";

interface HorizontalTimelineProps {
  activeIndex: number;
  onTimelineClick?: (index: number) => void;
}

export default function HorizontalTimeline({ activeIndex, onTimelineClick }: HorizontalTimelineProps) {
  const [progressWidth, setProgressWidth] = useState("0%");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure we handle edge cases properly
    if (timeline.length <= 1) {
      setProgressWidth("100%");
      return;
    }
    
    const pct = Math.max(0, Math.min(100, (activeIndex / (timeline.length - 1)) * 100));
    setProgressWidth(`${pct}%`);

    // Set CSS custom properties on the container
    if (containerRef.current) {
      containerRef.current.style.setProperty('--timeline-columns', `repeat(${timeline.length}, minmax(0, 1fr))`);
      containerRef.current.style.setProperty('--progress-width', `${pct}%`);
    }
  }, [activeIndex]);

  const handleDotClick = (index: number) => {
    if (onTimelineClick) {
      onTimelineClick(index);
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="timeline-container relative w-full max-w-6xl mx-auto mb-12 px-4"
    >
      {/* Timeline base line */}
      <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-white/15 rounded-full"></div>
      
      {/* Progress line with improved animation */}
      <div className="timeline-progress absolute top-1/2 left-4 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-500 transition-all duration-1000 ease-out rounded-full" />

      {/* Interactive dots */}
      <div className="timeline-grid relative z-10 w-full px-4">
        {timeline.map((_, i) => (
          <div key={i} className="flex justify-center">
            <button
              onClick={() => handleDotClick(i)}
              className={clsx(
                "timeline-dot",
                i <= activeIndex ? "timeline-dot-active" : "timeline-dot-inactive"
              )}
              aria-label={`Go to ${timeline[i].title} at ${timeline[i].organization}`}
              disabled={!onTimelineClick}
            />
          </div>
        ))}
      </div>

      {/* Enhanced titles section */}
      <div className="timeline-grid mt-6 w-full text-center px-4">
        {timeline.map((item, i) => (
          <div
            key={i}
            className={clsx(
              "transition-all duration-500 px-1",
              i === activeIndex 
                ? "opacity-100 scale-105" 
                : "opacity-50 hover:opacity-75"
            )}
          >
            <p className={clsx(
              "font-semibold leading-tight break-words",
              timeline.length <= 3 ? "text-base md:text-lg" : "text-sm md:text-base"
            )}>
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Enhanced organization section */}
      <div className="timeline-grid mt-3 w-full text-center px-4">
        {timeline.map((item, i) => (
          <div
            key={i}
            className={clsx(
              "transition-all duration-500 px-1",
              i === activeIndex 
                ? "opacity-90 text-blue-300" 
                : "opacity-50 text-white/70 hover:opacity-70"
            )}
          >
            <p className={clsx(
              "font-medium break-words",
              timeline.length <= 3 ? "text-sm md:text-base" : "text-xs md:text-sm"
            )}>
              {item.organization}
            </p>
          </div>
        ))}
      </div>

      {/* Enhanced dates section */}
      <div className="timeline-grid mt-2 w-full text-center px-4">
        {timeline.map((item, i) => (
          <div
            key={i}
            className={clsx(
              "transition-all duration-500 px-1",
              i === activeIndex 
                ? "opacity-80 text-cyan-300" 
                : "opacity-40 text-white/50 hover:opacity-60"
            )}
          >
            <p className={clsx(
              "font-light break-words",
              timeline.length <= 3 ? "text-xs md:text-sm" : "text-[10px] md:text-xs"
            )}>
              {item.date}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile-friendly indicator */}
      <div className="mt-4 flex justify-center md:hidden">
        <div className="flex space-x-2">
          {timeline.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={clsx(
                "w-2 h-2 rounded-full transition-all duration-300",
                i === activeIndex 
                  ? "bg-gradient-to-r from-blue-400 to-pink-500 scale-125" 
                  : "bg-white/30 hover:bg-white/50"
              )}
              aria-label={`Go to experience ${i + 1}`}
              disabled={!onTimelineClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
