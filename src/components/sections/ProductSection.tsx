"use client";

import { motion } from "framer-motion";
import { PRODUCT_POSITIONING } from "@/lib/content";
import { BrainCircuit, Compass, Hexagon, Sparkles, Cog, Atom, DollarSign, ShieldCheck } from "lucide-react";

const iconMap: Record<string, typeof Sparkles> = {
  Geometry: Hexagon,
  Physics: Atom,
  Process: Cog,
  Materials: Compass,
  Machines: BrainCircuit,
  Cost: DollarSign,
  Constraints: ShieldCheck,
};

const colorMap: Record<string, string> = {
  Geometry: "from-cyan-400 to-blue-500",
  Physics: "from-violet-400 to-fuchsia-500",
  Process: "from-fuchsia-400 to-pink-500",
  Materials: "from-teal-400 to-cyan-500",
  Machines: "from-indigo-400 to-violet-500",
  Cost: "from-amber-400 to-orange-500",
  Constraints: "from-rose-400 to-pink-500",
};

export function ProductSection() {
  return (
    <section id="product" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              {PRODUCT_POSITIONING.eyebrow}
            </span>
            <h2 className="mt-5 text-4xl md:text-6xl font-display font-bold tracking-[-0.03em] leading-[1.05] text-white">
              {PRODUCT_POSITIONING.title.split(".").map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 ? (
                    <span className="gradient-text">.</span>
                  ) : null}
                </span>
              ))}
              <br />
              <span className="gradient-text-warm">{PRODUCT_POSITIONING.subtitle}</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-white/65 leading-relaxed max-w-xl">
              {PRODUCT_POSITIONING.description}
            </p>

            <div className="mt-10">
              <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
                MADES understands
              </p>
              <div className="flex flex-wrap gap-2">
                {PRODUCT_POSITIONING.coreUnderstandings.map((c, i) => {
                  const Icon = iconMap[c] ?? Sparkles;
                  const grad = colorMap[c] ?? "from-violet-400 to-cyan-400";
                  return (
                    <motion.div
                      key={c}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="group relative rounded-2xl glass px-4 py-3 flex items-center gap-2.5 hover:!bg-white/[0.10] transition-all cursor-default"
                    >
                      <div className={`h-8 w-8 rounded-xl bg-gradient-to-br ${grad} flex items-center justify-center shadow-lg`}>
                        <Icon size={15} className="text-white" />
                      </div>
                      <span className="text-sm font-medium text-white">{c}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-[32px] overflow-hidden glass-strong p-2">
              <div className="relative rounded-[26px] overflow-hidden aspect-[4/5] md:aspect-square">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url('/engine-detail.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(7,4,20,0) 30%, rgba(7,4,20,0.7) 70%, rgba(7,4,20,0.95) 100%)",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 20%, rgba(168,85,247,0.25), transparent 50%), radial-gradient(circle at 70% 80%, rgba(34,211,238,0.25), transparent 50%)",
                  }}
                />

                {/* Outcome chips */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 space-y-3">
                  {PRODUCT_POSITIONING.outcomes.map((o, i) => (
                    <motion.div
                      key={o}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                      className="rounded-2xl glass px-4 py-3 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-white text-sm font-bold font-display">
                          {i + 1}
                        </div>
                        <span className="font-display font-semibold text-white">{o}</span>
                      </div>
                      <span className="text-xs font-mono text-white/50 uppercase">READY</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating tag */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 md:-right-8 rounded-2xl glass-strong px-4 py-3 flex items-center gap-2 shadow-2xl"
            >
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-white/50 font-mono">PHYSICS ENGINE</div>
                <div className="text-sm font-semibold text-white">Real-time sim</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
