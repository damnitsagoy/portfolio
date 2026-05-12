"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

const skills = {
  "3D & Animation": {
    software: ["Blender"],
    skills: ["Hard Surface Modelling", "Organic Surface Modelling", "Animating"],
  },
  "Film & Photography": {
    software: ["Premiere Pro", "DaVinci Resolve", "Lightroom"],
    skills: ["Directing", "Color Grading", "Cinematography"],
  },
  "Brand & Design": {
    software: ["Illustrator", "Photoshop", "InDesign"],
    skills: ["Brand Development", "Art Direction", "Brand Logo Design"],
  },
  "Music & Audio": {
    software: ["Ableton Live", "FL Studio", "Pro Tools"],
    skills: ["Music Production", "Mixing", "Mastering", "Sound Design"],
  },
};

const experience = [
  {
    period: "2024 — Present",
    role: "Brand Marketing Specialist",
    company: "DIGITAMA",
    description:
      "Managing Instagram (@inavoicecom), TikTok (@inavoice), and YouTube for Inavoice Voice Over Agency. Creating content plans, designing briefs, and preparing content for upload. Building campaigns aligned with Inavoice's vision. Grew Instagram beyond follower targets and achieved an average of 50k views per TikTok video.",
  },
  {
    period: "2023 — Present",
    role: "Freelance Creative",
    company: "Independent",
    description:
      "Working on a wide range of creative projects — branding, 3D modelling and animation, video production, and other creative endeavors across multiple disciplines.",
  },
  {
    period: "2023 — Present",
    role: "Freelance Audio Engineer",
    company: "INAVOICE",
    description:
      "Editing audio for various needs at INAVOICE Voice Over Agency — from Chinese drama dubbing to audiobook production.",
  },
  {
    period: "2023",
    role: "Music Producer",
    company: "PT Sebangku Jaya Abadi",
    description:
      "Managed the entire production process — engineering, mixing, and mastering — for various audio content including jingles, background music, and voice overs used in the educational media platform \"MARICA.\"",
  },
  {
    period: "2023",
    role: "Creative Video Campaign Team",
    company: "PT Stechoq Robotika Indonesia",
    description:
      "Designed concepts for a Creative Video Campaign with the team, serving as Producer — managing budget, scheduling production, and overseeing the entire process. Also composed the soundtrack, added SFX, and handled mixing and mastering.",
  },
  {
    period: "2022 — 2023",
    role: "Audio Editor",
    company: "INAVOICE (partnered with NOICE)",
    description:
      "Edited, paced, and added CUE SFX to raw audiobook recordings for NOICE. Several titles released on NOICE reached Top Trending Audioseries, including: Salma dan Tuan 40, Issues, Life Takers, Zombie Zone: The Real Pandemic, Diari Merah Diah, and more.",
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
          [About] — Background & Craft
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
              I&apos;m a multi-disciplinary creative who moves fluidly between{" "}
              <span className="font-serif italic text-accent">visual</span>,{" "}
              <span className="font-serif italic text-accent">motion</span>, and{" "}
              <span className="font-serif italic text-accent">sound</span>.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              I don&apos;t fit into one box. I model in 3D, animate characters, edit films,
              produce music, shoot photography, and build brand identities — whatever the
              project demands. I believe the best creative work happens when you can think
              across mediums and bring unexpected connections to the table.
            </p>
            <p className="text-text-secondary leading-relaxed">
              My approach is obsessive attention to detail combined with a willingness to
              experiment. Every project is an opportunity to push into new territory, blend
              disciplines, and create something that feels both fresh and intentional.
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
                { number: 4, label: "Years Creating", suffix: "+" },
                { number: 12, label: "Projects Delivered", suffix: "+" },
                { number: 6, label: "Disciplines", suffix: "" },
                { number: 5, label: "Industries", suffix: "" },
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
              Creative Skills
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, data], i) => (
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
                <div className="mb-4">
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-text-muted block mb-2">
                    Software
                  </span>
                  <ul className="space-y-1">
                    {data.software.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-text-primary font-mono"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-text-muted block mb-2">
                    Skills
                  </span>
                  <ul className="space-y-1">
                    {data.skills.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-text-secondary font-mono"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
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
