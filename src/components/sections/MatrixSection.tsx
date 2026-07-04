"use client";

import { motion } from "framer-motion";
import { CAPABILITY_MATRIX } from "@/lib/content";
import { Check, Minus, X } from "lucide-react";

function CellValue({ v }: { v: boolean | "weak" }) {
  if (v === true)
    return (
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-white shadow-lg">
        <Check size={16} strokeWidth={3} />
      </div>
    );
  if (v === "weak")
    return (
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/50">
        <Minus size={14} strokeWidth={2.5} />
      </div>
    );
  return (
    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.03] border border-white/5 text-white/25">
      <X size={14} strokeWidth={2.5} />
    </div>
  );
}

export function MatrixSection() {
  return (
    <section id="matrix" className="py-24 md:py-32 relative">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(168,85,247,0.12), transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="chip">Capability Matrix</span>
          <h2 className="mt-5 text-4xl md:text-6xl font-display font-bold tracking-[-0.03em] leading-[1.05] text-white">
            Built for the <span className="gradient-text">physical world</span> — not just pixels.
          </h2>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            Text-first AI breaks down when geometry, physics and tolerances matter. MADES models
            are trained from the ground up on CAD, CAE, CAM, and process data.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-12 card-surface !rounded-[28px] overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-5 text-xs font-mono uppercase tracking-widest text-white/40 font-medium w-[28%]">
                    Capability
                  </th>
                  {CAPABILITY_MATRIX.tools.map((t) => (
                    <th
                      key={t.name}
                      className={`p-5 text-center text-sm font-semibold tracking-tight ${
                        t.highlight ? "text-white" : "text-white/60"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1.5">
                        {t.highlight ? (
                          <span className="chip !bg-gradient-to-r !from-violet-500/20 !to-cyan-400/20 !border-violet-400/30 text-white">
                            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                            {t.name}
                          </span>
                        ) : (
                          t.name
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CAPABILITY_MATRIX.rows.map((row, ri) => (
                  <tr
                    key={row.capability}
                    className={`border-b border-white/5 transition-colors ${
                      ri % 2 === 0 ? "bg-white/[0.015]" : ""
                    } hover:bg-white/[0.04]`}
                  >
                    <td className="p-5">
                      <div className="font-medium text-white text-sm md:text-base">
                        {row.capability}
                      </div>
                    </td>
                    {row.cells.map((cell, ci) => (
                      <td key={ci} className="p-5 text-center">
                        <CellValue v={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <p className="mt-5 text-center text-xs text-white/40 font-mono">
          ✓ Full native support · ○ Limited / plugin · ✗ Unsupported
        </p>
      </div>
    </section>
  );
}
