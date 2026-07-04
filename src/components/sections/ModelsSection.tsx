"use client";

import { motion } from "framer-motion";
import { FOUNDATION_MODELS } from "@/lib/content";
import {
  Cpu,
  Eye,
  GitBranch,
  Atom,
  ArrowUpRight,
} from "lucide-react";

const iconMap: Record<string, typeof Cpu> = {
  "Language Model": Cpu,
  "Geometry Model": GitBranch,
  "Industrial Vision": Eye,
  "Planning Model": Cpu,
  "Simulation Model": Atom,
};

const accentMap: Record<string, { grad: string; ring: string; glow: string }> = {
  cyan: {
    grad: "from-cyan-400 to-blue-500",
    ring: "ring-cyan-400/30",
    glow: "bg-cyan-400/30",
  },
  indigo: {
    grad: "from-indigo-400 to-violet-500",
    ring: "ring-indigo-400/30",
    glow: "bg-indigo-400/30",
  },
  violet: {
    grad: "from-violet-400 to-fuchsia-500",
    ring: "ring-violet-400/30",
    glow: "bg-violet-400/30",
  },
};

export function ModelsSection() {
  return (
    <section id="models" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="chip">Foundation Models</span>
          <h2 className="mt-5 text-4xl md:text-6xl font-display font-bold tracking-[-0.03em] leading-[1.05] text-white">
            A constellation of <span className="gradient-text">specialist models.</span>
          </h2>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            MADES isn&apos;t one monolithic LLM. It is a carefully orchestrated fleet of foundation
            models — each built for a distinct industrial modality — composed into one world model.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FOUNDATION_MODELS.map((m, i) => {
            const Icon = iconMap[m.name] ?? Cpu;
            const accent = accentMap[m.accent] ?? accentMap.violet;
            return (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="card-surface !rounded-3xl p-6 relative overflow-hidden group"
              >
                <div
                  className={`absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl ${accent.glow} opacity-50 group-hover:opacity-80 transition-opacity`}
                />
                <div className="relative">
                  <div
                    className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${accent.grad} flex items-center justify-center shadow-xl ring-1 ${accent.ring}`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-2">
                    <h3 className="text-lg font-display font-bold text-white tracking-tight">
                      {m.name}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider rounded-full px-2 py-1 bg-white/5 border border-white/10 text-white/60 shrink-0">
                      {m.scale}
                    </span>
                  </div>
                  <p className={`mt-1 text-sm font-medium text-${m.accent}-300`}>{m.tagline}</p>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">{m.positioning}</p>

                  <div className="mt-5 space-y-3">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1.5">
                        Inputs
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {m.inputs.map((inp) => (
                          <span
                            key={inp}
                            className="text-[11px] rounded-full px-2 py-0.5 bg-white/5 border border-white/10 text-white/70"
                          >
                            {inp}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1.5">
                        Outputs
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {m.outputs.map((o) => (
                          <span
                            key={o}
                            className="text-[11px] rounded-full px-2 py-0.5 bg-white/5 border border-white/10 text-white/70"
                          >
                            {o}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/8 flex items-center justify-between">
                    <span className="text-xs text-white/50 font-mono">MODEL_v1</span>
                    <ArrowUpRight size={16} className="text-white/40 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Coming soon card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: FOUNDATION_MODELS.length * 0.08 }}
            className="card-surface !rounded-3xl p-6 relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[260px] border-dashed"
          >
            <div className="h-12 w-12 rounded-2xl border border-dashed border-white/20 flex items-center justify-center">
              <span className="text-white/40 text-2xl font-display">+</span>
            </div>
            <h3 className="mt-4 text-lg font-display font-bold text-white/80">More models soon</h3>
            <p className="mt-1 text-sm text-white/50">Robotics · Inspection · Quality</p>
            <LinkBtn />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LinkBtn() {
  return (
    <a
      href="/research"
      className="mt-4 inline-flex items-center gap-1 text-sm text-violet-300 hover:text-violet-200 transition-colors"
    >
      See research roadmap <ArrowUpRight size={14} />
    </a>
  );
}
