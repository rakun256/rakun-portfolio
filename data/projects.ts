export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveDemoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Terapini Seç",
    description:
      "Terapini Seç is a mobile mental health platform that helps users improve emotional well-being through mood tracking, task management, group therapy sessions, and a library of resources. Built with React Native (Expo) and backed by a secure Spring Boot API.",
    technologies: [
      "React Native",
      "Expo",
      "Redux Toolkit",
      "Tailwind CSS",
      "Spring Boot",
      "JWT",
    ],
    imageUrl: "/images/projects/TerapiniSec.png",
    githubUrl: "https://github.com/rakun256/TerapiniSec-Mobile",
  },
  {
    id: "2",
    title: "Şehrin Sesi",
    description:
      "Şehrin Sesi is a mobile application that allows citizens to report urban problems on a map and visualize issues through a live heatmap. Built using React Native, Spring Boot, and PostgreSQL with a focus on social impact and accessibility.",
    technologies: [
      "React Native",
      "Spring Boot",
      "JWT",
      "PostgreSQL",
      "MapView",
    ],
    imageUrl: "/images/projects/SehrinSesi.png",
    githubUrl: "https://github.com/rakun256/sehrin-sesi",
  },
  {
    id: "3",
    title: "ClientPulse",
    description:
      "ClientPulse is a behavior-based admin panel for monitoring customer actions and delivering AI-powered suggestions. Built with React, Redux Toolkit, and Spring Boot, and ready for analytics integrations like ApexCharts.",
    technologies: [
      "React",
      "Redux Toolkit",
      "Spring Boot",
      "Kafka",
      "PostgreSQL",
      "OpenAI API",
    ],
    imageUrl: "/images/projects/ClientPulse.png",
    githubUrl: "https://github.com/rakun256/client-pulse",
  },
  {
    id: "4",
    title: "PulsePing",
    description:
      "PulsePing is a modern, real-time website monitoring tool built with React and Firebase. It features secure authentication, user-specific ping tracking, dark/light themes, and a modular design with scoped CSS.",
    technologies: [
      "React",
      "Firebase Auth",
      "Firestore",
      "Axios",
      "React Router",
      "Scoped CSS",
    ],
    imageUrl: "/images/projects/PulsePing.png",
    githubUrl: "https://github.com/rakun256/pulse-ping",
  },
];
