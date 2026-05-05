"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Lightbox from "./Lightbox";

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

const projects = [
  {
    title: "PistonPay — Business Knowledgebase Chat",
    desc: "Customer-facing chatbot for a payment platform, powered by MCP + RAG over a live business knowledgebase. Handles policy queries, transaction FAQs, and escalation routing.",
    tags: ["MCP", "RAG", "LLM", "TypeScript", "Node.js"],
    image: "/images/pistonpay-chat.jpg",
  },
  {
    title: "Receipt AI — Gas Transaction Pipeline",
    desc: "AI pipeline that processes 2,000+ gas station receipts daily. Handles OCR extraction, business logic validation, fraud detection, and anomaly flagging — fully automated end-to-end.",
    tags: ["Python", "OCR", "AI Pipeline", "Fraud Detection", "FastAPI"],
    image: "/images/receipt-tester.jpg",
  },
  {
    title: "CyberForceHQ — Cybersecurity Job Board",
    desc: "Job portal for cybersecurity professionals with AI-driven candidate screening and an AI-powered test-creation wizard for hiring managers. End-to-end build from auth to AI workflows.",
    tags: ["Next.js", "AI Screening", "MongoDB", "LLM", "Tailwind"],
    image: null,
  },
  {
    title: "FlowScrape — Drag-and-Drop Workflow Builder",
    desc: "Visual workflow automation tool where users compose their own web scrapers via a drag-and-drop builder. Built on Next.js, TanStack, and Prisma with a node-based execution engine.",
    tags: ["Next.js", "TanStack", "Prisma", "TypeScript", "PostgreSQL"],
    image: null,
  },
  {
    title: "Devhives — Learning Management Platform",
    desc: "Udemy-style LMS where teachers upload courses and students consume content. Tracks activity logs, sends email reminders, and handles the full course/enrollment lifecycle.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "NextAuth"],
    image: null,
  },
  {
    title: "N8N MCP Chatbot with Vector Search",
    desc: "Chatbot built with N8N, MCP protocol, pgvector for semantic search, and HuggingFace embeddings. Users query a knowledge base in natural language and get contextual answers in real time.",
    tags: ["N8N", "MCP", "pgvector", "HuggingFace", "LLM"],
    image: "/images/n8n-workflow.jpg",
  },
  {
    title: "AI Image Generation Pipeline",
    desc: "Automated content pipeline for a DTC e-commerce brand — generates product lifestyle images on demand using AI image models, triggered via N8N workflows and delivered through a REST API to their CMS.",
    tags: ["N8N", "AI Image Models", "REST API", "Python", "Automation"],
    image: null,
  },
  {
    title: "Web Scraper & Automation Suite",
    desc: "Competitive intelligence scraper for a retail analytics startup — scrapes 15+ e-commerce sites daily, extracts pricing and stock data, and delivers structured reports via webhook to their dashboard.",
    tags: ["Python", "Playwright", "Automation", "REST API"],
    image: null,
  },
];

export default function Projects() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="projects" className="py-24 bg-background">
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="text-xs font-mono text-accent tracking-widest uppercase">Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-10">Selected Projects</h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.2 }}
                className="bg-card border border-border rounded-lg overflow-hidden h-full flex flex-col"
              >
                {p.image ? (
                  <button
                    onClick={() => setLightbox({ src: p.image!, alt: p.title })}
                    className="relative w-full h-40 bg-background-alt overflow-hidden group/thumb block"
                    aria-label={`View ${p.title} screenshot`}
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover object-top opacity-90 transition-transform duration-300 group-hover/thumb:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover/thumb:bg-black/30 transition-colors duration-200" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200">
                      <div className="bg-black/60 border border-white/20 rounded-full p-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                ) : (
                  <div className="relative w-full h-40 bg-background-alt border-b border-border dot-pattern flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
                    <div className="relative z-10 flex items-center gap-3 bg-background/70 backdrop-blur-sm border border-border rounded-full px-4 py-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-[10px] font-mono text-muted-fg uppercase tracking-widest">
                        {p.tags[0] ?? "Project"}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-foreground font-semibold text-sm mb-2 leading-snug">{p.title}</h3>
                  <p className="text-muted-fg text-xs leading-relaxed flex-1 mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono text-dim-fg bg-background-alt border border-border px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
