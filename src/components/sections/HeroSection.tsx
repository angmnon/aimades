"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Play, Sparkles, Rocket, Cpu, Zap } from "lucide-react";
import { HERO_CONTENT } from "@/lib/content";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export function HeroSection() {
  return (
    <section className="relative pt-40 md:pt-48 pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div variants={container} initial="hidden" animate="show" className="text-center">
          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2">
            <span className="chip !bg-white/8 !border-white/15">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-400" />
              </span>
              <span className="gradient-text font-semibold">NEW</span>
              <span className="text-white/70">Introducing MADES v1.0</span>
              <Sparkles size={12} className="text-amber-300" />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="mt-8 text-[44px] sm:text-6xl md:text-7xl lg:text-[92px] font-bold font-display tracking-[-0.035em] leading-[1.02] text-white max-w-5xl mx-auto"
          >
            The World Model <br className="hidden md:block" />
            for{" "}
            <span className="gradient-text">everything that is made.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl mx-auto text-base md:text-lg text-white/65 leading-relaxed"
          >
            {HERO_CONTENT.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link href="/register" className="btn-primary text-base !py-3.5 !px-6">
              Start building <ArrowRight size={17} />
            </Link>
            <Link href="#product" className="btn-ghost text-base !py-3.5 !px-6">
              <Play size={15} />
              Watch overview
            </Link>
          </motion.div>

          {/* Floating mini-cards */}
          <motion.div
            variants={fadeUp}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto"
          >
            {HERO_CONTENT.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.6 }}
                className="card-surface !rounded-2xl p-4 md:p-5 text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-violet-400/80">
                    {i === 0 && <Cpu size={16} />}
                    {i === 1 && <Rocket size={16} />}
                    {i === 2 && <Zap size={16} />}
                    {i === 3 && <Sparkles size={16} />}
                  </div>
                </div>
                <div className="mt-1 text-[11px] md:text-xs text-white/50 font-medium uppercase tracking-wider">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Hero spacecraft visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 relative max-w-5xl mx-auto"
          >
            <div className="relative rounded-[32px] overflow-hidden glass-strong !rounded-[32px] p-2">
              <div className="relative rounded-[26px] overflow-hidden aspect-[16/9]">
                {/* Hero image */}
                <div
                  className="absolute inset-0 animate-drift"
                  style={{
                    backgroundImage: "url('/hero-space.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(7,4,20,0.1) 0%, rgba(7,4,20,0.5) 60%, rgba(7,4,20,0.8) 100%)",
                  }}
                />
                {/* HUD overlay */}
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="chip !bg-black/30 !border-white/20 backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        LIVE · MADES CONSOLE
                      </div>
                    </div>
                    <div className="chip !bg-black/30 !border-white/20 backdrop-blur-md font-mono text-white/80">
                      v1.0.2
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { k: "Part under analysis", v: "Bracket-Ti-047" },
                      { k: "Process", v: "5-axis CNC · Ti-6Al-4V" },
                      { k: "DFM score", v: "98.7 / 100" },
                    ].map((hud) => (
                      <div
                        key={hud.k}
                        className="rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 p-4"
                      >
                        <div className="text-[10px] uppercase tracking-widest text-white/50 font-mono">
                          {hud.k}
                        </div>
                        <div className="mt-1 text-white font-display font-semibold text-lg">
                          {hud.v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Corner brackets */}
                <CornerBrackets />
              </div>
            </div>

            {/* Glow beneath */}
            <div
              className="absolute -inset-x-10 -bottom-10 h-40 blur-3xl opacity-60 -z-10"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(168,85,247,0.4), transparent 70%)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function CornerBrackets() {
  const corner = "absolute w-6 h-6 border-white/40";
  return (
    <>
      <div className={`${corner} top-3 left-3 border-t-2 border-l-2 rounded-tl-lg`} />
      <div className={`${corner} top-3 right-3 border-t-2 border-r-2 rounded-tr-lg`} />
      <div className={`${corner} bottom-3 left-3 border-b-2 border-l-2 rounded-bl-lg`} />
      <div className={`${corner} bottom-3 right-3 border-b-2 border-r-2 rounded-br-lg`} />
    </>
  );
}
