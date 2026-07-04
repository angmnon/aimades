"use client";

import { motion } from "framer-motion";
import { ARCHITECTURE_LAYERS } from "@/lib/content";
import { Layers, ArrowUpRight } from "lucide-react";

const colorClass = {
  cyan: {
    glow: "from-cyan-400/40 to-transparent",
    chip: "bg-cyan-400/15 text-cyan-300 border-cyan-400/30",
    dot: "bg-cyan-400",
    text: "text-cyan-300",
    line: "from-cyan-400/60 via-cyan-400/20 to-transparent",
  },
  indigo: {
    glow: "from-indigo-400/40 to-transparent",
    chip: "bg-indigo-400/15 text-indigo-300 border-indigo-400/30",
    dot: "bg-indigo-400",
    text: "text-indigo-300",
    line: "from-indigo-400/60 via-indigo-400/20 to-transparent",
  },
  violet: {
    glow: "from-violet-400/50 to-transparent",
    chip: "bg-violet-400/15 text-violet-300 border-violet-400/30",
    dot: "bg-violet-400",
    text: "text-violet-300",
    line: "from-violet-500/60 via-violet-400/20 to-transparent",
  },
};

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="chip">
            <Layers size={12} /> Six-Layer Architecture
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-display font-bold tracking-[-0.03em] leading-[1.05] text-white">
            One model. <span className="gradient-text">Six reasoning layers.</span>
          </h2>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            From human language to machined part — every reasoning modality a senior engineer uses,
            distilled into a single foundation model.
          </p>
        </div>

        {/* Layer stack */}
        <div className="mt-14 md:mt-20 relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:-translate-x-px" />

          <div className="space-y-8 md:space-y-12">
            {ARCHITECTURE_LAYERS.map((layer, i) => {
              const c = colorClass[layer.color];
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={layer.level}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                  className="relative md:grid md:grid-cols-2 md:gap-16 items-center"
                >
                  {/* Dot on timeline */}
                  <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className={`h-4 w-4 rounded-full ${c.dot} ring-4 ring-[#070414] z-10 relative`} />
                      <div
                        className={`absolute inset-0 rounded-full ${c.dot} animate-ping opacity-40`}
                      />
                    </div>
                  </div>
                  {/* Mobile dot */}
                  <div className="md:hidden absolute left-6 top-8 -translate-x-1/2 z-10">
                    <div className={`h-3 w-3 rounded-full ${c.dot} ring-4 ring-[#070414]`} />
                  </div>

                  {/* Card */}
                  <div
                    className={`pl-14 md:pl-0 ${
                      left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`card-surface !rounded-3xl p-6 md:p-8 relative overflow-hidden ${
                        layer.highlight ? "ring-1 ring-violet-500/30" : ""
                      }`}
                    >
                      {/* Accent glow */}
                      <div
                        className={`absolute -top-20 ${
                          left ? "-right-20" : "-left-20"
                        } h-48 w-48 rounded-full blur-3xl bg-gradient-to-br ${c.glow} pointer-events-none`}
                      />
                      <div className="relative">
                        <div className={`flex items-center gap-3 ${left ? "md:justify-end" : ""}`}>
                          <div
                            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-mono font-medium uppercase tracking-wider ${c.chip}`}
                          >
                            Layer {String(layer.level).padStart(2, "0")}
                          </div>
                          {layer.highlight && (
                            <span className="chip !bg-white/10 !border-white/20 text-white text-[10px]">
                              CORE
                            </span>
                          )}
                        </div>
                        <h3
                          className={`mt-4 text-2xl md:text-3xl font-display font-bold text-white tracking-tight`}
                        >
                          {layer.title}
                        </h3>
                        <p className={`mt-1 text-sm md:text-base ${c.text} font-medium`}>
                          {layer.subtitle}
                        </p>
                        <p className="mt-3 text-sm text-white/60 leading-relaxed">
                          {layer.example}
                        </p>

                        {layer.capabilities && layer.capabilities.length > 0 && (
                          <div
                            className={`mt-5 flex flex-wrap gap-2 ${
                              left ? "md:justify-end" : ""
                            }`}
                          >
                            {layer.capabilities.slice(0, 4).map((cap) => (
                              <span
                                key={cap}
                                className="text-xs rounded-full px-2.5 py-1 bg-white/5 border border-white/10 text-white/70"
                              >
                                {cap}
                              </span>
                            ))}
                            {layer.capabilities.length > 4 && (
                              <span className="text-xs rounded-full px-2.5 py-1 bg-white/5 border border-white/10 text-white/50">
                                +{layer.capabilities.length - 4} more
                              </span>
                            )}
                          </div>
                        )}

                        {layer.outputs && (
                          <div
                            className={`mt-4 pt-4 border-t border-white/8 text-xs font-mono text-white/40 ${
                              left ? "md:text-right" : ""
                            }`}
                          >
                            <span className={c.text}>OUTPUTS · </span>
                            {layer.outputs.join(" · ")}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-sm text-white/70">
              <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
              End-to-end from requirement → geometry → physics → process → machine → outcome
              <ArrowUpRight size={14} className="text-violet-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
