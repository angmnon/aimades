"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Logo } from "@/components/Logo";
import { useSupabase } from "@/lib/supabase-config-inject";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const { supabase } = useSupabase();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!supabase) {
      setError("Auth is still initializing...");
      return;
    }
    setLoading(true);
    try {
      const { error: resetErr } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/dashboard`,
      });
      if (resetErr) setError(resetErr.message);
      else setSent(true);
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
        <div className="noise-overlay absolute inset-0" />
      </div>

      <Link href="/" className="absolute top-6 left-6">
        <Logo size={32} />
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-md"
      >
        <div className="rounded-[28px] glass-strong p-7 md:p-9 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full blur-3xl bg-violet-500/30" />
          <div className="relative">
            <Link
              href="/login"
              className="inline-flex items-center gap-1 text-xs text-white/50 hover:text-white transition-colors"
            >
              <ArrowLeft size={12} /> Back to sign in
            </Link>
            <h1 className="mt-5 text-3xl md:text-4xl font-display font-bold tracking-tight text-white">
              Reset your <span className="gradient-text">password</span>
            </h1>
            <p className="mt-2 text-white/60 text-sm">
              Enter your email and we&apos;ll send you a secure reset link.
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-6 text-center"
              >
                <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Check className="text-emerald-300" size={22} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">Check your inbox</h3>
                <p className="mt-2 text-sm text-white/60">
                  We sent a reset link to <span className="text-white font-medium">{email}</span>.
                  It may take a minute to arrive.
                </p>
                <Link href="/login" className="btn-primary mt-6 justify-center">
                  Back to sign in <ArrowRight size={14} />
                </Link>
              </motion.div>
            ) : (
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
                {error && (
                  <div className="rounded-2xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-300">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading || !supabase}
                  className="btn-primary w-full !py-3.5 justify-center disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send reset link"}
                  {!loading && <ArrowRight size={16} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
