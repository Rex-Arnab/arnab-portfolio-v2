"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", icon: "⚛" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "⬡" },
  { name: "Python", icon: "🐍" },
  { name: "MongoDB", icon: "🍃" },
  { name: "TypeScript", icon: "TS" },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="text-xs font-mono text-accent tracking-widest uppercase">About</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">Who I am</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeIn delay={0.1}>
            <p className="text-muted-fg leading-relaxed text-base">
              {"I'm a full-stack developer with deep experience in React, Next.js, and the MERN stack. Over the past few years I've expanded into AI engineering — building RAG pipelines, LLM-powered chatbots, AI image generation workflows, and MCP-based agent systems. I work across the full product lifecycle: architecture, development, deployment, and iteration."}
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { value: "2M+", label: "Users reached" },
                { value: "4+",  label: "Years building" },
                { value: "30+", label: "Projects shipped" },
                { value: "24h", label: "Response time" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-card border border-border rounded-lg px-4 py-4 hover:border-accent/40 transition-colors"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">{s.value}</p>
                  <p className="text-[11px] font-mono text-dim-fg uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xs font-mono text-dim-fg uppercase tracking-widest mb-4">Core Skills</p>
            <div className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded text-sm text-foreground hover:border-accent/40 transition-colors"
                >
                  <span className="font-mono text-accent text-xs">{s.icon}</span>
                  {s.name}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
