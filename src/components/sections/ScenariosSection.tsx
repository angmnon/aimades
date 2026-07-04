"use client";

import { motion } from "framer-motion";
import { SCENARIOS } from "@/lib/content";
import { Rocket, Car, Box, Smartphone, Cog, HeartPulse, ArrowUpRight } from "lucide-react";

const iconMap: Record<string, typeof Rocket> = {
  Rocket,
  Car,
  Box,
  Smartphone,
  Cog,
  HeartPulse,
};

export function ScenariosSection() {
  return (
    <section id="scenarios" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="chip">Industry Scenarios</span>
            <h2 className="mt-5 text-4xl md:text-6xl font-display font-bold tracking-[-0.03em] leading-[1.05] text-white">
              Built for the industries that <span className="gradient-text">build the world.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md md:text-right">
            From titanium airframe brackets to medical implants — MADES is shipping in production
            across six of the world&apos;s most demanding manufacturing verticals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SCENARIOS.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Rocket;
            return (
              <motion.div
                key={s.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group card-surface !rounded-3xl p-7 relative overflow-hidden"
              >
                {/* Gradient wash */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl bg-white/5 group-hover:bg-violet-500/20 transition-all" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-2xl glass flex items-center justify-center text-white group-hover:text-violet-200 transition-colors">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-white/30 group-hover:text-white transition-colors -translate-x-1 group-hover:translate-x-0"
                    />
                  </div>
                  <h3 className="mt-6 text-2xl font-display font-bold text-white tracking-tight">
                    {s.industry}
                  </h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                    {s.description}
                  </p>

                  {/* Stats-ish footer */}
                  <div className="mt-6 pt-5 border-t border-white/8 flex items-center gap-4 text-xs font-mono text-white/50">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      SHIPPING
                    </span>
                    <span>v1.0</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
