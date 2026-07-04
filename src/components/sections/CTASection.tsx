"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Rocket } from "lucide-react";
import { CTA_CONTENT } from "@/lib/content";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[36px] overflow-hidden"
        >
          {/* Gradient bg */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #2d0b5e 0%, #0c0425 40%, #06101d 100%)",
            }}
          />
          {/* Orbs */}
          <div
            className="absolute -top-32 -left-20 h-80 w-80 rounded-full blur-3xl animate-breathe"
            style={{ background: "radial-gradient(circle, rgba(168,85,247,0.6), transparent 70%)" }}
          />
          <div
            className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full blur-3xl animate-breathe-slow"
            style={{ background: "radial-gradient(circle, rgba(34,211,238,0.45), transparent 70%)" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(244,114,182,0.3), transparent 70%)" }}
          />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
            }}
          />

          <div className="relative px-6 py-16 md:p-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-6"
            >
              <Rocket size={26} className="text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-[-0.035em] leading-[1.05] text-white max-w-4xl mx-auto">
              {CTA_CONTENT.title.split(" ").map((w, i) =>
                i === 3 ? (
                  <span key={i} className="gradient-text">
                    {" "}
                    intelligent manufacturing.
                  </span>
                ) : i === 0 ? (
                  <span key={i}>{w}</span>
                ) : (
                  <span key={i}> {w}</span>
                )
              )}
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              {CTA_CONTENT.subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/register" className="btn-white !py-3.5 !px-6 text-base">
                {CTA_CONTENT.primaryCta} <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-ghost !py-3.5 !px-6 text-base">
                <MessageCircle size={16} />
                {CTA_CONTENT.secondaryCta}
              </Link>
            </div>

            {/* Trust row */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/40 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                No credit card required
              </span>
              <span className="hidden sm:block">·</span>
              <span>Free tier available</span>
              <span className="hidden sm:block">·</span>
              <span>SOC2-ready infrastructure</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
