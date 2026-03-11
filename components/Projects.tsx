"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Lightbox from "./Lightbox";

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

const projects = [
  {
    title: "Receipt AI — Gas Transaction Pipeline",
    desc: "AI pipeline that processes 2,000+ gas station receipts daily. Handles OCR extraction, business logic validation, fraud detection, and anomaly flagging — fully automated end-to-end.",
    tags: ["Python", "OCR", "AI Pipeline", "Fraud Detection", "FastAPI"],
    image: "/images/receipt-tester.jpg",
  },
  {
    title: "N8N MCP Chatbot with Vector Search",
    desc: "Chatbot built with N8N, MCP protocol, pgvector for semantic search, and HuggingFace embeddings. Users query a knowledge base in natural language and get contextual answers in real time.",
    tags: ["N8N", "MCP", "pgvector", "HuggingFace", "LLM"],
    image: "/images/n8n-workflow.jpg",
  },
  {
    title: "PistonPay — Business Knowledgebase Chat",
    desc: "Customer-facing chatbot for a payment platform, powered by MCP + RAG over a live business knowledgebase. Handles policy queries, transaction FAQs, and escalation routing.",
    tags: ["MCP", "RAG", "LLM", "TypeScript", "Node.js"],
    image: "/images/pistonpay-chat.jpg",
  },
  {
    title: "AI Image Generation Pipeline",
    desc: "Automated content pipeline for a DTC e-commerce brand — generates product lifestyle images on demand using AI image models, triggered via N8N workflows and delivered through a REST API to their CMS.",
    tags: ["N8N", "AI Image Models", "REST API", "Python", "Automation"],
    image: null,
  },
  {
    title: "MERN SaaS — Team Task Manager",
    desc: "Full-stack project management app with real-time updates, role-based access control, Kanban boards, and email notifications. Built for a 50-person remote team replacing their spreadsheet workflow.",
    tags: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
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
                  <div className="w-full h-40 bg-background-alt border-b border-border flex items-center justify-center">
                    <div className="w-10 h-10 rounded bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
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
