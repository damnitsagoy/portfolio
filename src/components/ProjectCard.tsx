"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block border border-border hover:border-text-primary transition-colors duration-200"
      >
        {/* Thumbnail placeholder */}
        <div className="aspect-[16/10] bg-bg-secondary border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-30" />
          <div className="absolute top-4 left-4 font-mono text-xs text-text-muted uppercase tracking-[0.15em]">
            [{project.id}]
          </div>
          <div className="absolute bottom-4 right-4 font-mono text-[4rem] font-bold text-border leading-none opacity-50 group-hover:text-accent/30 transition-colors duration-200">
            {project.id}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
              {project.category[0]}
            </span>
            <span className="text-dot">&middot;</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
              {project.year}
            </span>
          </div>

          <div className="hairline mb-3" />

          <h3 className="font-display font-bold text-xl mb-2 group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>

          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="font-mono text-[10px] text-text-muted self-center">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
