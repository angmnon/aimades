"use client";

import { motion } from "framer-motion";

export function BackgroundAurora({ variant = "default" }: { variant?: "default" | "auth" | "minimal" }) {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Deep base gradient */}
      <div className="absolute inset-0 bg-[#070414]" />

      {/* Starfield fixed image */}
      <div
        className="absolute inset-0 opacity-[0.35] mix-blend-screen"
        style={{
          backgroundImage: "url('/bg-stars.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Twinkling stars (CSS radial) */}
      <div className="starfield absolute inset-0 opacity-60" />

      {/* Large breathing violet glow — top-left */}
      <motion.div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-[120px] animate-breathe"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.45) 0%, rgba(168,85,247,0) 70%)" }}
      />

      {/* Large breathing cyan glow — bottom-right */}
      <motion.div
        className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full blur-[140px] animate-breathe-slow"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.35) 0%, rgba(34,211,238,0) 70%)",
          animationDelay: "2s",
        }}
      />

      {/* Pink/magenta glow — top-right */}
      <motion.div
        className="absolute -top-20 right-1/4 h-[400px] w-[400px] rounded-full blur-[120px] animate-breathe"
        style={{
          background: "radial-gradient(circle, rgba(244,114,182,0.25) 0%, rgba(217,70,239,0) 70%)",
          animationDelay: "4s",
        }}
      />

      {/* Hero space image — only on default variant, fixed to top */}
      {variant === "default" && (
        <div className="absolute top-0 left-0 right-0 h-[100vh] overflow-hidden">
          <div
            className="absolute inset-0 animate-drift"
            style={{
              backgroundImage: "url('/hero-space.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
              opacity: 0.55,
            }}
          />
          {/* Heavy dark gradient to blend into page */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(7,4,20,0.25) 0%, rgba(7,4,20,0.55) 45%, rgba(7,4,20,0.85) 75%, #070414 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, rgba(7,4,20,0.5) 60%, #070414 100%)",
            }}
          />
        </div>
      )}

      {variant === "auth" && (
        <>
          <motion.div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full blur-[120px] animate-breathe"
            style={{ background: "radial-gradient(circle, rgba(168,85,247,0.35) 0%, transparent 70%)" }}
          />
        </>
      )}

      {/* Subtle film grain */}
      <div className="noise-overlay absolute inset-0" />

      {/* Bottom fade to solid */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#070414] to-transparent" />
    </div>
  );
}
