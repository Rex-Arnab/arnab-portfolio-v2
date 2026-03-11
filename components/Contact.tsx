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

const contactLinks = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    label: "Hire me on Freelancer",
    sublabel: "freelancer.in/u/Arnab00725",
    href: "https://www.freelancer.in/u/Arnab00725",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    label: "See my code on GitHub",
    sublabel: "github.com/Rex-Arnab",
    href: "https://github.com/Rex-Arnab",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Send me a message",
    sublabel: "arnab00725@gmail.com",
    href: "mailto:arnab00725@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="text-xs font-mono text-accent tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-2">
            {"Let's work together"}
          </h2>
          <p className="text-muted-fg text-sm mb-10">
            {"I'm available for freelance projects. Response time: under 24 hours."}
          </p>
        </FadeIn>

        <div className="flex flex-col gap-3 max-w-xl">
          {contactLinks.map((link, i) => (
            <FadeIn key={link.label} delay={i * 0.1}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-card border border-border rounded-lg px-5 py-4 hover:border-accent/40 group transition-all"
              >
                <span className="text-accent shrink-0">{link.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-foreground text-sm font-medium group-hover:text-accent transition-colors">
                    {link.label}
                  </p>
                  <p className="text-dim-fg text-xs truncate">{link.sublabel}</p>
                </div>
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5"
                  className="text-border group-hover:text-accent transition-colors shrink-0"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
