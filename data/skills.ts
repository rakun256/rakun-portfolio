export type Skill = {
  name: string;
  level: number; 
  category: "Frontend" | "Backend" | "Tools" | "Soft";
};

export const skills: Skill[] = [
  { name: "React & React Native", level: 90, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "Redux Toolkit", level: 85, category: "Frontend" },
  { name: "JavaScript & TypeScript", level: 88, category: "Frontend" },
  { name: "Ionic & Angular", level: 70, category: "Frontend" },

  { name: "Spring Boot", level: 80, category: "Backend" },
  { name: "REST API", level: 85, category: "Backend" },
  { name: "Java", level: 78, category: "Backend" },
  { name: "Firebase Services", level: 75, category: "Backend" },
  { name: "Python & Flask", level: 70, category: "Backend" },

  { name: "Docker", level: 60, category: "Tools" },
  { name: "PostgreSQL / MySQL", level: 80, category: "Tools" },
  { name: "Git & GitHub", level: 85, category: "Tools" },
  { name: "Postman", level: 80, category: "Tools" },
  { name: "Chart.js", level: 70, category: "Tools" },

  { name: "UI/UX Design", level: 75, category: "Soft" },
  { name: "Responsive Design", level: 90, category: "Soft" },
  { name: "Team Leadership", level: 85, category: "Soft" },
  { name: "Problem Solving", level: 88, category: "Soft" }
];
