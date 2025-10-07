import React from "react";

interface ExperienceCardProps {
  title: string;
  organization: string;
  date: string;
  description: string[];
  isActive: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  organization,
  date,
  description,
  isActive,
}) => {
  return (
    <div
      className={`relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl text-white max-w-2xl w-full transition-all duration-500 hover:shadow-cyan-400/20 hover:border-cyan-400/30 group ${
        isActive ? "ring-1 ring-cyan-400/50" : "opacity-80"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-cyan-400/5 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 " />
      <div className="relative z-10 space-y-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {title}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-lg text-cyan-300 font-medium">
              {organization}
            </span>
            <span className="text-sm text-white/60 bg-white/10 px-3 py-1 rounded-full">
              {date}
            </span>
          </div>
        </div>
        <div className="space-y-3">
          {description.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 " />
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl " />
    </div>
  );
};

export default ExperienceCard;
