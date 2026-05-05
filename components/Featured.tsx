"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
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

const stats = [
  { value: "2M+", label: "Users reached" },
  { value: "2.4y", label: "Tenure" },
  { value: "MERN", label: "Full-stack" },
];

const stack = ["Next.js", "MongoDB", "React", "Express", "Node.js"];

export default function Featured() {
  return (
    <section
      id="featured"
      className="relative py-24 bg-background-alt overflow-hidden border-y border-border"
    >
      {/* dot accent on the right */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 dot-pattern opacity-50 pointer-events-none"
        aria-hidden
      />
      {/* fade dots into background near the center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--p-bg-alt) 30%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="inline-flex items-center gap-2 text-xs font-mono text-accent tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Featured · Case Study
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-5 tracking-tight text-balance max-w-3xl">
            Relias — Healthcare Workforce Platform
          </h2>
          <p className="text-muted-fg text-base sm:text-lg leading-relaxed max-w-2xl text-balance">
            Built and maintained a workforce management platform serving{" "}
            <span className="text-foreground font-medium">2M+ doctors and care workers</span>{" "}
            across the US. End-to-end ownership across the Next.js + MERN stack.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-card border border-border rounded-lg px-5 py-6 hover:border-accent/40 transition-colors"
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-none">
                  {s.value}
                </p>
                <p className="text-[11px] font-mono text-dim-fg uppercase tracking-widest mt-3">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-sm text-muted-fg">
              <span>
                Built at{" "}
                <span className="text-foreground font-medium">Eigerlab Technology</span>
              </span>
              <span className="text-border hidden sm:inline">·</span>
              <div className="flex flex-wrap gap-1.5">
                {stack.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono text-foreground bg-background border border-border px-2.5 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-foreground transition-colors group"
            >
              See more work
              <ArrowUpRight
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
