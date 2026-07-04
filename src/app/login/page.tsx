"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Github, Chrome } from "lucide-react";
import { Logo } from "@/components/Logo";
import { useSupabase } from "@/lib/supabase-config-inject";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const { supabase } = useSupabase();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!supabase) {
      setError("Auth is still initializing...");
      return;
    }
    setLoading(true);
    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      if (signInError) {
        setError(signInError.message);
      } else {
        setSuccess("Signed in! Redirecting to console...");
        window.location.href = "/dashboard";
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Unexpected error";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 md:p-6 pt-28 pb-20">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#070414]" />
        <div
          className="absolute inset-0 opacity-30 mix-blend-screen"
          style={{
            backgroundImage: "url('/bg-stars.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="starfield absolute inset-0 opacity-60" />
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full blur-[130px]"
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.4), transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full blur-[140px] opacity-60"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.35), transparent 70%)" }}
        />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <Link href="/" className="absolute top-6 left-6">
        <Logo size={32} />
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-md"
      >
        <div className="rounded-[28px] glass-strong p-7 md:p-9 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full blur-3xl bg-violet-500/30" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full blur-3xl bg-cyan-400/20" />
          <div className="relative">
            <div className="flex items-center gap-2">
              <span className="chip">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                WELCOME BACK
              </span>
            </div>
            <h1 className="mt-5 text-3xl md:text-4xl font-display font-bold tracking-tight text-white">
              Sign in to <span className="gradient-text">MADES</span>
            </h1>
            <p className="mt-2 text-white/60 text-sm">
              New here?{" "}
              <Link href="/register" className="text-violet-300 hover:text-violet-200 font-medium">
                Create an account
              </Link>
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2 block">
                  Email
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@company.com"
                    className="input-field !pl-11"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-white/40">
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-violet-300 hover:text-violet-200"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••••"
                    className="input-field !pl-11 !pr-11"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                    aria-label="Toggle password"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="rounded-2xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-300">
                  {error}
                </div>
              )}
              {success && (
                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 text-sm text-emerald-300">
                  {success}
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !supabase}
                className="btn-primary w-full !py-3.5 justify-center disabled:opacity-50"
              >
                {loading ? "Signing in..." : "Sign in"}
                {!loading && <ArrowRight size={16} />}
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-white/10" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-transparent px-3 text-xs text-white/40 font-mono">OR CONTINUE WITH</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="btn-ghost !py-3 justify-center" type="button" onClick={() => setError("OAuth coming soon")}>
                <Chrome size={16} /> Google
              </button>
              <button className="btn-ghost !py-3 justify-center" type="button" onClick={() => setError("OAuth coming soon")}>
                <Github size={16} /> GitHub
              </button>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          By signing in you agree to our{" "}
          <Link href="/terms" className="text-white/60 hover:text-white">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-white/60 hover:text-white">
            Privacy Policy
          </Link>
          .
        </p>
      </motion.div>
    </div>
  );
}
