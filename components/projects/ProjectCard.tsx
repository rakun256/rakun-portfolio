"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative flex flex-col bg-white/10 border border-white/20 rounded-2xl overflow-hidden 
                 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
    >
      {/* Project Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5 text-white">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-white/80 leading-relaxed mb-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-auto mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-white/10 border border-white/20 rounded-full text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/80 hover:text-pink-400 transition-colors"
            >
              <FaGithub /> GitHub
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/80 hover:text-cyan-400 transition-colors"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Hover Glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 
                   opacity-0 blur-3xl group-hover:opacity-20 transition-opacity duration-500 -z-10"
      />
    </motion.div>
  );
}
