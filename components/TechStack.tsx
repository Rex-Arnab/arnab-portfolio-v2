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
    <section id="stack" className="py-24 bg-background-alt">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="text-xs font-mono text-accent tracking-widest uppercase">Tools</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-10">Tech Stack</h2>
        </FadeIn>

        <div className="space-y-6">
          {categories.map((cat, i) => (
            <FadeIn key={cat.label} delay={i * 0.1}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <span className="text-xs font-mono text-dim-fg w-28 shrink-0 pt-1 uppercase tracking-wider">
                  {cat.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-muted-fg bg-card border border-border px-3 py-1.5 rounded hover:border-accent/30 hover:text-foreground transition-colors"
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
