"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center dot-pattern overflow-hidden bg-background"
    >
      {/* Vignette — fades dot pattern into bg at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, var(--p-bg) 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
            Available for freelance
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight leading-none mb-4">
            Arnab Biswas
          </h1>
          <p className="text-xl sm:text-2xl text-accent font-medium mb-4">
            Full-Stack &amp; AI Developer
          </p>
          <p className="text-muted-fg text-base sm:text-lg max-w-xl mx-auto mb-10">
            I build production-grade web apps, AI pipelines, and automation systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#projects"
              className="bg-accent hover:bg-blue-700 text-white font-medium px-7 py-3 rounded transition-colors text-sm"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-border hover:border-muted-fg text-muted-fg hover:text-foreground font-medium px-7 py-3 rounded transition-colors text-sm"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-xs text-dim-fg tracking-widest uppercase">scroll</span>
          <div className="w-px h-8 bg-border" />
        </motion.div>
      </div>
    </section>
  );
}
