"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Cpu,
  FileCog,
  FlaskConical,
  Rocket,
  LogOut,
  Plus,
  Activity,
  Search,
  Bell,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { useSupabase } from "@/lib/supabase-config-inject";
import type { User } from "@supabase/supabase-js";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Cpu, label: "Models" },
  { icon: FileCog, label: "Projects" },
  { icon: FlaskConical, label: "Experiments" },
  { icon: Rocket, label: "Deployments" },
];

const stats = [
  { label: "Inference calls", value: "128,402", delta: "+12.4%", color: "text-emerald-300" },
  { label: "DFM analyses", value: "1,284", delta: "+8.1%", color: "text-emerald-300" },
  { label: "Avg latency", value: "94ms", delta: "-3.2%", color: "text-cyan-300" },
  { label: "Credits used", value: "73%", delta: "Pro plan", color: "text-violet-300" },
];

const recentProjects = [
  { name: "Bracket-Ti-047", model: "Geometry v1", status: "Ready", score: 98.7 },
  { name: "Housing-Al-220", model: "Simulation v1", status: "Running", score: 92.1 },
  { name: "Shaft-Steel-013", model: "Planning v1", status: "Queued", score: 87.4 },
  { name: "Mold-Gate-08", model: "Vision v1", status: "Ready", score: 95.3 },
];

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { supabase } = useSupabase();

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        window.location.href = "/login";
        return;
      }
      setUser(data.user);
      setLoading(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e: string, session) => {
      if (!session?.user) window.location.href = "/login";
      else setUser(session.user);
    });
    return () => sub.subscription.unsubscribe();
  }, [supabase]);

  const signOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#070414]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 rounded-full border-2 border-violet-400/30 border-t-violet-400 animate-spin" />
          <p className="text-white/50 text-sm font-mono">Warming up console...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#070414]" />
        <div
          className="absolute inset-0 opacity-20 mix-blend-screen"
          style={{ backgroundImage: "url('/bg-stars.jpg')", backgroundSize: "cover" }}
        />
        <div className="starfield absolute inset-0 opacity-40" />
        <motion.div
          className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-[120px]"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.4), transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full blur-[140px] opacity-60"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.3), transparent 70%)" }}
        />
      </div>

      {/* Top nav */}
      <header className="fixed top-0 inset-x-0 z-50 pt-4 px-4 md:px-6">
        <div className="mx-auto max-w-[1400px] rounded-full glass-strong flex items-center justify-between px-4 md:px-6 h-14">
          <div className="flex items-center gap-6">
            <Logo size={28} />
            <div className="hidden md:flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 w-72">
              <Search size={14} className="text-white/40" />
              <input
                placeholder="Search models, projects..."
                className="bg-transparent outline-none text-sm text-white/80 placeholder:text-white/30 w-full"
              />
              <kbd className="text-[10px] font-mono text-white/30 border border-white/10 rounded px-1.5 py-0.5">⌘K</kbd>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="h-9 w-9 rounded-full glass flex items-center justify-center text-white/70 hover:text-white">
              <Bell size={15} />
            </button>
            <button
              onClick={signOut}
              className="h-9 px-3 rounded-full glass flex items-center gap-2 text-white/70 hover:text-white text-sm"
            >
              <LogOut size={14} />
              <span className="hidden sm:inline">Sign out</span>
            </button>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-white text-sm font-bold font-display">
              {(user.email ?? "U")[0].toUpperCase()}
            </div>
          </div>
        </div>
      </header>

      <div className="pt-28 pb-10 px-4 md:px-6 max-w-[1400px] mx-auto flex gap-6">
        {/* Sidebar */}
        <aside className="hidden md:flex w-56 shrink-0 flex-col gap-1 sticky top-28 self-start">
          {navItems.map((n) => (
            <button
              key={n.label}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm transition-all ${
                n.active
                  ? "glass text-white shadow-lg"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <n.icon size={16} />
              {n.label}
            </button>
          ))}
          <div className="mt-4 rounded-[24px] glass p-5 relative overflow-hidden">
            <div className="absolute -top-16 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 blur-2xl opacity-50" />
            <div className="relative">
              <div className="text-xs font-mono text-white/50 uppercase tracking-widest">Upgrade</div>
              <div className="mt-2 font-display font-bold text-white leading-tight">Go Pro for unlimited inference</div>
              <button className="btn-primary w-full justify-center mt-4 !py-2 text-xs">
                Upgrade <Plus size={12} />
              </button>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0 space-y-6">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-[28px] glass-strong p-7 md:p-10 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl bg-violet-500/30" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full blur-3xl bg-cyan-400/20" />
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div>
                <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
                  Welcome back,{" "}
                  <span className="gradient-text">{user.user_metadata?.full_name || user.email?.split("@")[0]}</span>
                </h1>
                <p className="mt-3 text-white/60">
                  Your MADES console is ready. 3 new model versions shipped this week.
                </p>
              </div>
              <Link href="#new" className="btn-primary shrink-0">
                <Plus size={16} /> New project
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                className="card-surface !rounded-3xl p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-white/40">{s.label}</span>
                  <Activity size={14} className="text-white/30" />
                </div>
                <div className="mt-2 text-2xl md:text-3xl font-display font-bold text-white">{s.value}</div>
                <div className={`mt-1 text-xs font-medium ${s.color}`}>{s.delta}</div>
              </motion.div>
            ))}
          </div>

          {/* Recent projects */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-surface !rounded-[28px] overflow-hidden"
          >
            <div className="p-6 flex items-center justify-between border-b border-white/8">
              <div>
                <h2 className="font-display font-bold text-white text-lg">Recent projects</h2>
                <p className="text-xs text-white/50">Your latest design & simulation runs</p>
              </div>
              <button className="btn-ghost !py-2 !px-4 text-xs">View all</button>
            </div>
            <div className="divide-y divide-white/5">
              {recentProjects.map((p, i) => (
                <div
                  key={p.name}
                  className="flex items-center justify-between p-5 hover:bg-white/[0.03] transition-colors"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-500/30 to-cyan-400/30 border border-white/10 flex items-center justify-center text-white font-mono text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-white truncate">{p.name}</div>
                      <div className="text-xs text-white/50 font-mono">{p.model}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="hidden sm:flex flex-col items-end">
                      <span className="text-xs text-white/40 font-mono uppercase">DFM score</span>
                      <span className="font-display font-bold text-white">{p.score}</span>
                    </div>
                    <span
                      className={`chip ${
                        p.status === "Ready"
                          ? "!bg-emerald-500/10 !border-emerald-400/20 text-emerald-300"
                          : p.status === "Running"
                          ? "!bg-cyan-500/10 !border-cyan-400/20 text-cyan-300"
                          : "!bg-white/5 text-white/50"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          p.status === "Ready"
                            ? "bg-emerald-400"
                            : p.status === "Running"
                            ? "bg-cyan-400 animate-pulse"
                            : "bg-white/40"
                        }`}
                      />
                      {p.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
