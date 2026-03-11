import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Arnab Biswas — Full-Stack & AI Developer",
  description:
    "Full-stack and AI developer specializing in React, Next.js, MERN, LLM integrations, RAG, MCP, and automation.",
  openGraph: {
    title: "Arnab Biswas — Full-Stack & AI Developer",
    description:
      "Full-stack and AI developer specializing in React, Next.js, MERN, LLM integrations, RAG, MCP, and automation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnab Biswas — Full-Stack & AI Developer",
    description:
      "Full-stack and AI developer specializing in React, Next.js, MERN, LLM integrations, RAG, MCP, and automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
