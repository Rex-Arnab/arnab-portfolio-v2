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

const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9l3 3-3 3M13 15h3" />
      </svg>
    ),
    title: "Full-Stack Web Apps",
    desc: "End-to-end web applications using React, Next.js, Node.js, Express, and MongoDB. From REST APIs to real-time features.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
        <path d="M8 12s1.5-2 4-2 4 2 4 2" />
        <path d="M12 17V7" />
      </svg>
    ),
    title: "AI & LLM Systems",
    desc: "RAG pipelines, LLM integrations (OpenAI, Anthropic, OpenRouter), AI chatbots with business context, MCP-based agent systems.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="8" height="8" rx="1" />
        <rect x="13" y="3" width="8" height="8" rx="1" />
        <rect x="3" y="13" width="8" height="8" rx="1" />
        <rect x="13" y="13" width="8" height="8" rx="1" />
      </svg>
    ),
    title: "AI Image & Multimodal",
    desc: "Workflows using AI image generation models. Integration with pipelines via APIs and automation tools like N8N.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4v5h5" />
        <path d="M20 20v-5h-5" />
        <path d="M4 9A9 9 0 0 1 20 15" />
        <path d="M20 15A9 9 0 0 1 4 9" opacity="0.4" />
      </svg>
    ),
    title: "Automation & Scraping",
    desc: "Python-based automation scripts, web scrapers, bots, webhook integrations, and N8N workflow automation.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="text-xs font-mono text-[#2563eb] tracking-widest uppercase">Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-10">What I Build</h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="bg-[#111] border border-[#1a1a1a] rounded-lg p-6 h-full hover:border-[#2563eb]/30 transition-colors">
                <div className="text-[#2563eb] mb-4">{s.icon}</div>
                <h3 className="text-white font-semibold text-base mb-2">{s.title}</h3>
                <p className="text-[#777] text-sm leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
