"use client";

import { Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  showWordmark?: boolean;
  className?: string;
  wordmarkClassName?: string;
}

export function Logo({ size = 32, showWordmark = true, className, wordmarkClassName }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div
        className="relative flex items-center justify-center rounded-2xl"
        style={{ width: size, height: size }}
      >
        {/* Gradient rocket icon mark */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, #A855F7 0%, #D946EF 50%, #22D3EE 100%)",
            boxShadow: "0 8px 24px -6px rgba(168,85,247,0.6), 0 0 0 1px rgba(255,255,255,0.15) inset",
          }}
        />
        <Rocket
          size={size * 0.58}
          className="relative text-white"
          strokeWidth={2.25}
        />
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-2xl"
          style={{
            boxShadow: "0 0 0 0 rgba(168,85,247,0.5)",
            animation: "pulse-ring 2.5s cubic-bezier(0.4,0,0.6,1) infinite",
          }}
        />
      </div>

      {showWordmark && (
        <span
          className={cn(
            "font-display text-white text-[20px] font-bold tracking-tight leading-none",
            wordmarkClassName
          )}
        >
          MADES
          <span className="ml-0.5 align-top text-[10px] font-semibold text-white/50 font-mono tracking-wider">
            v1.0
          </span>
        </span>
      )}
    </div>
  );
}
