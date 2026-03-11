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
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="text-xs font-mono text-[#2563eb] tracking-widest uppercase">About</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-6">Who I am</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeIn delay={0.1}>
            <p className="text-[#aaa] leading-relaxed text-base">
              {"I'm a full-stack developer with deep experience in React, Next.js, and the MERN stack. Over the past few years I've expanded into AI engineering — building RAG pipelines, LLM-powered chatbots, AI image generation workflows, and MCP-based agent systems. I work across the full product lifecycle: architecture, development, deployment, and iteration."}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">5+</p>
                <p className="text-xs text-[#666] mt-1">Years building</p>
              </div>
              <div className="w-px bg-[#1a1a1a]" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">30+</p>
                <p className="text-xs text-[#666] mt-1">Projects shipped</p>
              </div>
              <div className="w-px bg-[#1a1a1a]" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">24h</p>
                <p className="text-xs text-[#666] mt-1">Response time</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xs font-mono text-[#555] uppercase tracking-widest mb-4">Core Skills</p>
            <div className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center gap-2 bg-[#111] border border-[#1e1e1e] px-4 py-2 rounded text-sm text-[#ccc] hover:border-[#2563eb]/40 transition-colors"
                >
                  <span className="font-mono text-[#2563eb] text-xs">{s.icon}</span>
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
