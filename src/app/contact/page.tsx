"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
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
          Have a project in mind? Whether it&apos;s a brand film, 3D visuals, music,
          or something entirely new — reach out through any of the channels below.
        </motion.p>

        <div className="border-t border-dotted border-border mt-12" />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted mb-4">
              Email
            </h3>
            <a
              href="mailto:yogaadidhrm@gmail.com"
              className="block font-body text-text-primary hover:text-accent transition-colors duration-200"
            >
              yogaadidhrm@gmail.com
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted mb-4">
              WhatsApp
            </h3>
            <a
              href="https://wa.me/6285156056929"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-body text-text-primary hover:text-accent transition-colors duration-200"
            >
              +62 851 5605 6929
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted mb-4">
              LinkedIn
            </h3>
            <a
              href="https://www.linkedin.com/in/yogaadid/"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-mono text-sm text-text-primary hover:text-accent transition-colors duration-200"
            >
              yogaadid ↗
            </a>
          </motion.div>

          {/* Instagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted mb-4">
              Instagram
            </h3>
            <a
              href="https://instagram.com/yoga.ia"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-mono text-sm text-text-primary hover:text-accent transition-colors duration-200"
            >
              @yoga.ia ↗
            </a>
          </motion.div>
        </div>

        {/* Availability card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="mt-16 border border-border p-6 max-w-sm"
        >
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
        </motion.div>
      </section>
    </div>
  );
}
