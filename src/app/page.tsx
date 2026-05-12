"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import { getFeaturedProjects, type Project } from "@/lib/projects";
import Link from "next/link";

export default function Home() {
  const [featured, setFeatured] = useState<Project[]>([]);

  useEffect(() => {
    getFeaturedProjects().then(setFeatured);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] mb-8"
        >
          [01] — Introduction
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="font-display font-bold text-[clamp(3rem,8vw,8rem)] leading-[0.9] tracking-tight mb-8"
        >
          MULTI-
          <br />
          <span className="text-text-secondary">DISCIPLINARY</span>
          <br />
          CREATIVE
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="border-t border-dotted border-border my-8 origin-left"
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
        >
          <p className="text-text-secondary text-sm max-w-md">
            Crafting visual stories across mediums — 3D, motion, film, sound, and brand.
            Where creative vision meets technical execution.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/projects"
              className="border-2 border-text-primary px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] hover:bg-text-primary hover:text-bg-primary transition-colors duration-200"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary hover:text-accent transition-colors duration-200 underline underline-offset-4"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: 12, label: "Projects", suffix: "+" },
            { number: 6, label: "Disciplines", suffix: "" },
            { number: 4, label: "Years Creating", suffix: "+" },
            { number: 100, label: "Passion", suffix: "%" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="font-display font-bold text-[clamp(2.5rem,5vw,4rem)] leading-none mb-2">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] block mb-2">
              [02] — Selected Work
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary hover:text-accent transition-colors duration-200 hidden sm:block"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/projects"
            className="border-2 border-text-primary px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] hover:bg-text-primary hover:text-bg-primary transition-colors duration-200 inline-block"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] block mb-4">
              [03] — Collaboration
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-tight mb-6">
              Let&apos;s create something
              <br />
              <span className="font-serif italic text-accent">extraordinary</span>
            </h2>
            <Link
              href="/contact"
              className="inline-block border-2 border-text-primary px-8 py-4 font-mono text-xs uppercase tracking-[0.15em] hover:bg-text-primary hover:text-bg-primary transition-colors duration-200"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
