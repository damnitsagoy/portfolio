"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Demo only)");
  };

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] mb-4"
        >
          [Contact] — Get in Touch
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight mb-4"
        >
          LET&apos;S TALK
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-text-secondary max-w-lg"
        >
          Have a project in mind? I&apos;d love to hear about it. Whether it&apos;s a
          brand film, 3D visuals, music, or something entirely new — let&apos;s talk.
        </motion.p>

        <div className="border-t border-dotted border-border mt-12" />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted block mb-3">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-border bg-transparent py-3 text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors duration-200 font-body"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted block mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-border bg-transparent py-3 text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors duration-200 font-body"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted block mb-3">
                  Project Type
                </label>
                <select
                  name="project"
                  value={formState.project}
                  onChange={handleChange}
                  className="w-full border-b-2 border-border bg-transparent py-3 text-text-primary focus:border-accent focus:outline-none transition-colors duration-200 font-body appearance-none cursor-pointer"
                >
                  <option value="">Select a project type</option>
                  <option value="3d-animation">3D & Animation</option>
                  <option value="video-film">Video & Film</option>
                  <option value="brand-identity">Brand Identity</option>
                  <option value="music-audio">Music & Audio</option>
                  <option value="photography">Photography</option>
                  <option value="motion-graphics">Motion Graphics</option>
                  <option value="other">Other / Multi-Discipline</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted block mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border-b-2 border-border bg-transparent py-3 text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors duration-200 font-body resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="border-2 border-text-primary px-8 py-4 font-mono text-xs uppercase tracking-[0.15em] hover:bg-text-primary hover:text-bg-primary transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-dotted lg:border-border"
          >
            <div className="mb-12">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted mb-4">
                Direct
              </h3>
              <a
                href="mailto:yogaadidhrm@gmail.com"
                className="block font-body text-text-primary hover:text-accent transition-colors duration-200"
              >
                yogaadidhrm@gmail.com
              </a>
            </div>

            <div className="mb-12">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted mb-4">
                Social
              </h3>
              <div className="space-y-3">
                {[
                  { label: "LinkedIn", url: "https://www.linkedin.com/in/yogaadid/" },
                  { label: "Instagram", url: "https://instagram.com/yoga.ia" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-mono text-sm text-text-secondary hover:text-accent transition-colors duration-200"
                  >
                    {social.label} ↗
                  </a>
                ))}
              </div>
            </div>

            <div className="border border-border p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
                  Available for Work
                </span>
              </div>
              <p className="text-sm text-text-secondary">
                Currently accepting new projects and collaborations. Response time:
                24–48 hours.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
}
