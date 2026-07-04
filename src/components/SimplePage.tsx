"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BackgroundAurora } from "./BackgroundAurora";

interface SimplePageProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  variant?: "default" | "auth";
}

export function SimplePage({ eyebrow, title, subtitle, children, variant = "default" }: SimplePageProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundAurora variant={variant === "auth" ? "auth" : "default"} />
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            {eyebrow && <span className="chip">{eyebrow}</span>}
            <h1 className="mt-5 text-4xl md:text-6xl font-display font-bold tracking-[-0.03em] leading-[1.05] text-white">
              {title}
            </h1>
            {subtitle && <p className="mt-5 text-lg text-white/60 leading-relaxed">{subtitle}</p>}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            {children}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
