"use client";

import SkillBar from "./SkillsBar";
import { Skill } from "@/data/skills";

interface SkillsGridProps {
  skills: Skill[];
}

const categoryTitles: Record<Skill["category"], string> = {
  Frontend: "Frontend Development",
  Backend: "Backend Development",
  Tools: "Tools & Technologies",
  Soft: "Soft Skills",
};

export default function SkillsGrid({ skills }: SkillsGridProps) {
  const categories = Object.keys(categoryTitles) as Skill["category"][];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full">
      {categories.map((category) => {
        const filtered = skills.filter((s) => s.category === category);
        return (
          <div key={category}>
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-400 mb-4">
              {categoryTitles[category]}
            </h3>
            <div className="space-y-4">
              {filtered.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
