"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import {
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "World Model", href: "/#product" },
      { label: "Architecture", href: "/#architecture" },
      { label: "Foundation Models", href: "/#models" },
      { label: "Scenarios", href: "/#scenarios" },
      { label: "Console", href: "/dashboard" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Research", href: "/research" },
      { label: "Partners", href: "/partners" },
      { label: "News", href: "/news" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Careers", href: "/careers" },
      { label: "Press kit", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Mail, href: "mailto:hello@aimades.ai", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative mt-32 pt-20 pb-10">
      {/* Top glow divider */}
      <div className="glow-line absolute top-0 left-1/2 -translate-x-1/2 w-[80%]" />

      {/* Decorative orbital */}
      <div
        className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full blur-[140px] opacity-30"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.4), transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full blur-[140px] opacity-20"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.4), transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* CTA row */}
        <div className="rounded-[28px] glass p-8 md:p-12 mb-16 overflow-hidden relative">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl bg-violet-500/30" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-3xl bg-cyan-400/20" />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white">
                Ready to launch into the <span className="gradient-text">industrial future?</span>
              </h3>
              <p className="mt-3 text-white/60">
                Start building with MADES today — from sketch to shipping part, in one model.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link href="/register" className="btn-white">
                Start free <ArrowUpRight size={16} />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Talk to sales
              </Link>
            </div>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-12">
          <div className="col-span-2">
            <Logo size={34} />
            <p className="mt-4 text-sm text-white/50 max-w-xs leading-relaxed">
              The Industrial World Model. Building the cognitive layer for the world&apos;s physical production.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="h-9 w-9 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <s.icon size={15} />
                </Link>
              ))}
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {l.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-mono">
            © {new Date().getFullYear()} AIMADES Pte. Ltd. · Built in Singapore · All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-white/40">
            <Link href="/privacy" className="hover:text-white/80 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white/80 transition-colors">Terms</Link>
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
