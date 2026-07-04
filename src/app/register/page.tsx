"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Check } from "lucide-react";
import { Logo } from "@/components/Logo";
import { useSupabase } from "@/lib/supabase-config-inject";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const { supabase } = useSupabase();

  const pwdChecks = [
    { label: "At least 8 characters", ok: password.length >= 8 },
    { label: "One uppercase letter", ok: /[A-Z]/.test(password) },
    { label: "One number", ok: /\d/.test(password) },
  ];

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
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: name } },
      });
      if (signUpError) {
        setError(signUpError.message);
      } else {
        setSuccess(
          "Account created! Check your inbox to confirm your email, then head to the console."
        );
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
          className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full blur-[140px] opacity-60"
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
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              LAUNCH WITH MADES
            </span>
            <h1 className="mt-5 text-3xl md:text-4xl font-display font-bold tracking-tight text-white">
              Create your <span className="gradient-text">account</span>
            </h1>
            <p className="mt-2 text-white/60 text-sm">
              Already with us?{" "}
              <Link href="/login" className="text-violet-300 hover:text-violet-200 font-medium">
                Sign in
              </Link>
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2 block">
                  Full name
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Ada Lovelace"
                    className="input-field !pl-11"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2 block">
                  Work email
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
                <label className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2 block">
                  Password
                </label>
                <div className="relative">
                  <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Create a strong password"
                    className="input-field !pl-11 !pr-11"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {pwdChecks.map((c) => (
                    <span
                      key={c.label}
                      className={`inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full border ${
                        c.ok
                          ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                          : "bg-white/5 border-white/10 text-white/40"
                      }`}
                    >
                      <Check size={10} />
                      {c.label}
                    </span>
                  ))}
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
                {loading ? "Creating account..." : "Create account"}
                {!loading && <ArrowRight size={16} />}
              </button>
              <p className="text-xs text-white/40 text-center">
                Free tier includes 100 inference credits · No credit card required
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
