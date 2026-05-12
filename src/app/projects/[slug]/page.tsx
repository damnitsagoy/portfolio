"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getProjectBySlug, getAllProjects, getThumbnailUrl, type Project } from "@/lib/projects";
import { urlFor } from "@/sanity/client";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [project, setProject] = useState<Project | undefined>();
  const [allProjects, setAllProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjectBySlug(slug).then(setProject);
    getAllProjects().then(setAllProjects);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em]">
          Loading...
        </span>
      </div>
    );
  }

  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects.length > 0
    ? allProjects[(currentIndex + 1) % allProjects.length]
    : null;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/projects"
            className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted hover:text-accent transition-colors duration-200 inline-flex items-center gap-2"
          >
            ← Back to Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-8 flex items-center gap-4"
        >
          <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em]">
            [{project.id}]
          </span>
          {project.category.map((cat) => (
            <span
              key={cat}
              className="border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted"
            >
              {cat}
            </span>
          ))}
          <span className="font-mono text-xs text-text-muted">
            {project.year}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-display font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight mt-6 mb-4"
        >
          {project.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="text-lg text-text-secondary max-w-2xl"
        >
          {project.tagline}
        </motion.p>

        <div className="border-t border-dotted border-border mt-12" />
      </section>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="aspect-[21/9] bg-bg-secondary border border-border relative overflow-hidden"
        >
          {project.heroMedia?.asset ? (
            <img
              src={urlFor(project.heroMedia).width(1400).url()}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <>
              <div className="absolute inset-0 dot-grid opacity-20" />
              <div className="absolute bottom-6 right-6 font-display font-bold text-[8rem] text-border/50 leading-none">
                {project.id}
              </div>
              <div className="absolute top-6 left-6 font-mono text-xs text-text-muted uppercase tracking-[0.15em]">
                Project Hero — {project.title}
              </div>
            </>
          )}
        </motion.div>
      </section>

      {/* Project Details */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="lg:col-span-3"
          >
            <div className="mb-8">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-2 border-text-primary px-4 py-3 font-mono text-xs uppercase tracking-[0.15em] text-center hover:bg-text-primary hover:text-bg-primary transition-colors duration-200"
                >
                  View Live ↗
                </a>
              )}
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-border px-4 py-3 font-mono text-xs uppercase tracking-[0.15em] text-center text-text-secondary hover:border-text-primary hover:text-text-primary transition-colors duration-200"
                >
                  Source Code ↗
                </a>
              )}
            </div>
          </motion.aside>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-9 space-y-12"
          >
            <div>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted mb-4">
                Overview
              </h2>
              <p className="text-text-primary leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            <div className="hairline" />

            <div>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted mb-4">
                Challenge
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted mb-4">
                Solution
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted mb-4">
                Outcome
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {project.outcome}
              </p>
            </div>

            {/* Gallery */}
            <div className="hairline" />
            <div>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted mb-4">
                Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery && project.gallery.length > 0
                  ? project.gallery.map((img, n) => (
                      <div
                        key={n}
                        className="aspect-[4/3] bg-bg-secondary border border-border relative overflow-hidden"
                      >
                        {img.asset ? (
                          <img
                            src={urlFor(img).width(600).url()}
                            alt={img.caption || `Screenshot ${n + 1}`}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        ) : (
                          <>
                            <div className="absolute inset-0 dot-grid opacity-10" />
                            <span className="absolute bottom-3 left-3 font-mono text-[10px] text-text-muted">
                              Screenshot {n + 1}
                            </span>
                          </>
                        )}
                      </div>
                    ))
                  : [1, 2, 3, 4].map((n) => (
                      <div
                        key={n}
                        className="aspect-[4/3] bg-bg-secondary border border-border relative"
                      >
                        <div className="absolute inset-0 dot-grid opacity-10" />
                        <span className="absolute bottom-3 left-3 font-mono text-[10px] text-text-muted">
                          Screenshot {n}
                        </span>
                      </div>
                    ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Project */}
      {nextProject && (
        <section className="border-t border-border bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted block mb-4">
              Next Project
            </span>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group inline-block"
            >
              <h3 className="font-display font-bold text-3xl md:text-4xl group-hover:text-accent transition-colors duration-200">
                {nextProject.title} →
              </h3>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
