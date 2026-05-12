"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects, getAllCategories, type Project } from "@/lib/projects";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  useEffect(() => {
    getAllProjects().then(setProjects);
    getAllCategories().then((cats) => setCategories(["All", ...cats]));
  }, []);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] mb-4"
        >
          [All Work] — {projects.length} Projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight mb-8"
        >
          PROJECTS
        </motion.h1>

        <div className="border-t border-dotted border-border mb-8" />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] transition-colors duration-200 ${
                activeFilter === cat
                  ? "border-accent text-accent bg-accent/5"
                  : "border-border text-text-secondary hover:border-text-primary hover:text-text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-mono text-sm text-text-muted">
              No projects found for &quot;{activeFilter}&quot;
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
