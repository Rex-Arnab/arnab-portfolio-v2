"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

const categories = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Python", "FastAPI", "Laravel"],
  },
  {
    label: "Database",
    items: ["MongoDB", "PostgreSQL", "SQLite"],
  },
  {
    label: "AI / ML",
    items: ["OpenAI", "Claude (Anthropic)", "OpenRouter", "LangChain", "RAG", "N8N", "MCP"],
  },
  {
    label: "DevOps",
    items: ["Docker", "AWS", "Vercel", "Git"],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="text-xs font-mono text-[#2563eb] tracking-widest uppercase">Tools</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-10">Tech Stack</h2>
        </FadeIn>

        <div className="space-y-6">
          {categories.map((cat, i) => (
            <FadeIn key={cat.label} delay={i * 0.1}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <span className="text-xs font-mono text-[#444] w-28 shrink-0 pt-1 uppercase tracking-wider">
                  {cat.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-[#999] bg-[#111] border border-[#1e1e1e] px-3 py-1.5 rounded hover:border-[#2563eb]/30 hover:text-[#ccc] transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
