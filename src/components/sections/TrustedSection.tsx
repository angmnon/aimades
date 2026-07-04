"use client";

import { motion } from "framer-motion";
import { TRUSTED_BY } from "@/lib/content";

export function TrustedSection() {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-white/40 mb-8">
            Trusted by pioneers in advanced manufacturing & research
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
            {TRUSTED_BY.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="text-white/40 hover:text-white/80 transition-colors font-display font-semibold tracking-tight text-base md:text-lg"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
