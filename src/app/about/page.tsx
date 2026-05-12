"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  Backend: ["Node.js", "Python", "Go", "PostgreSQL", "Redis"],
  Design: ["Figma", "Design Systems", "UI/UX", "Prototyping"],
  DevOps: ["Docker", "Kubernetes", "CI/CD", "AWS", "Vercel"],
};

const experience = [
  {
    period: "2022 — Present",
    role: "Senior Full-Stack Developer",
    company: "Freelance / Contract",
    description:
      "Building digital products for startups and agencies. Specializing in Next.js, design systems, and creative technology.",
  },
  {
    period: "2020 — 2022",
    role: "Full-Stack Developer",
    company: "Tech Agency",
    description:
      "Led development of client projects from concept to deployment. Managed small teams and client relationships.",
  },
  {
    period: "2019 — 2020",
    role: "Frontend Developer",
    company: "SaaS Startup",
    description:
      "Built the product frontend from scratch. Established coding standards and component architecture.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] mb-4"
        >
          [About] — Background & Skills
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight mb-8"
        >
          ABOUT
        </motion.h1>

        <div className="border-t border-dotted border-border" />
      </section>

      {/* Bio */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <p className="font-display text-2xl md:text-3xl leading-snug mb-8">
              I&apos;m a creative full-stack developer who bridges the gap between{" "}
              <span className="font-serif italic text-accent">design</span> and{" "}
              <span className="font-serif italic text-accent">engineering</span>.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              With 4+ years of experience building digital products, I specialize in
              creating performant, accessible, and visually compelling web
              applications. I believe great software is built at the intersection of
              technical excellence and thoughtful design.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I work across the full stack — from crafting pixel-perfect UIs and
              design systems to architecting scalable backend services. My approach
              is methodical: understand the problem deeply, design the solution
              carefully, and execute with precision.
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-dotted lg:border-border"
          >
            <div className="grid grid-cols-2 gap-8">
              {[
                { number: 4, label: "Years Active", suffix: "+" },
                { number: 12, label: "Projects Shipped", suffix: "+" },
                { number: 8, label: "Technologies", suffix: "" },
                { number: 3, label: "Industries", suffix: "" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-4xl md:text-5xl leading-none mb-1">
                    <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Skills */}
      <section className="border-y border-border bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] block mb-2">
              Capabilities
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-12">
              Technical Skills
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border border-border p-6 bg-bg-primary"
              >
                <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent mb-4">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-text-secondary font-mono"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] block mb-2">
            Timeline
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-12">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border-t border-border py-8 grid grid-cols-1 md:grid-cols-12 gap-4"
            >
              <div className="md:col-span-3">
                <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em]">
                  {exp.period}
                </span>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display font-bold text-lg mb-1">
                  {exp.role}
                </h3>
                <p className="font-mono text-xs text-accent uppercase tracking-[0.1em] mb-3">
                  {exp.company}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
