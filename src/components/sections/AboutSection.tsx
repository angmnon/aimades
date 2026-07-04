"use client";

import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "@/lib/content";
import { GraduationCap, Building2, Globe2, Headphones } from "lucide-react";

const icons = [GraduationCap, Building2, Globe2, Headphones];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative rounded-[32px] overflow-hidden glass-strong p-2 aspect-[4/5]">
              <div className="relative rounded-[26px] overflow-hidden h-full">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #1a0b3d 0%, #070414 50%, #06101d 100%)",
                  }}
                />
                {/* Grid lines */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(168,85,247,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.08) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                {/* Orbiting dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-56 w-56">
                    <div className="absolute inset-0 rounded-full border border-violet-500/20" />
                    <div className="absolute inset-6 rounded-full border border-cyan-400/20" />
                    <div className="absolute inset-12 rounded-full border border-fuchsia-500/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-24 w-24 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 blur-sm opacity-80 animate-breathe" />
                      <div className="absolute h-16 w-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                        <span className="font-display font-bold text-xl text-white">M</span>
                      </div>
                    </div>
                    {/* Orbiting */}
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2"
                        style={{
                          animation: `orbit ${10 + i * 4}s linear infinite`,
                          // @ts-expect-error css var
                          "--r": `${60 + i * 28}px`,
                        }}
                      >
                        <div
                          className={`h-2.5 w-2.5 rounded-full ${
                            ["bg-violet-400", "bg-cyan-400", "bg-pink-400"][i]
                          } shadow-lg`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-mono text-white/50">
                  <span>AIMADES · HQ SINGAPORE</span>
                  <span>1.3521°N · 103.8198°E</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <span className="chip">{ABOUT_CONTENT.eyebrow}</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-display font-bold tracking-[-0.03em] leading-[1.1] text-white">
              {ABOUT_CONTENT.title}
            </h2>
            <p className="mt-6 text-lg text-white/65 leading-relaxed">
              {ABOUT_CONTENT.description}
            </p>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {ABOUT_CONTENT.highlights.map((h, i) => {
                const Icon = icons[i] ?? GraduationCap;
                return (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="card-surface !rounded-2xl p-4"
                  >
                    <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/30 border border-white/10 flex items-center justify-center text-violet-300">
                      <Icon size={16} />
                    </div>
                    <div className="mt-3 font-display font-bold text-white text-xl">{h.value}</div>
                    <div className="text-[11px] text-white/50 uppercase tracking-wider mt-0.5">
                      {h.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
