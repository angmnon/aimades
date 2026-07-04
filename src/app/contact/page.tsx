"use client";

import { useState } from "react";
import { SimplePage } from "@/components/SimplePage";
import { Mail, MapPin, MessageCircle, Send, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  };

  return (
    <SimplePage
      eyebrow="Contact"
      title={<>Let&apos;s build <span className="gradient-text">something real.</span></>}
      subtitle="Tell us about your manufacturing challenge — our team will get back within one business day."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="card-surface !rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl bg-violet-500/30" />
            <div className="relative flex gap-4">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <h3 className="font-display font-bold text-white">Email</h3>
                <p className="text-sm text-white/60 mt-1">For sales, partnerships & press</p>
                <a href="mailto:hello@aimades.ai" className="text-violet-300 hover:text-violet-200 text-sm mt-2 inline-block">
                  hello@aimades.ai
                </a>
              </div>
            </div>
          </div>

          <div className="card-surface !rounded-3xl p-6">
            <div className="flex gap-4">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <h3 className="font-display font-bold text-white">HQ</h3>
                <p className="text-sm text-white/60 mt-1">
                  AIMADES Pte. Ltd.<br />
                  71 Nanyang Drive<br />
                  Singapore 638075
                </p>
              </div>
            </div>
          </div>

          <div className="card-surface !rounded-3xl p-6">
            <div className="flex gap-4">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-pink-400 to-violet-500 flex items-center justify-center text-white shrink-0">
                <MessageCircle size={18} />
              </div>
              <div>
                <h3 className="font-display font-bold text-white">Support</h3>
                <p className="text-sm text-white/60 mt-1">24/7 for Pro & Enterprise customers</p>
                <a href="mailto:support@aimades.ai" className="text-cyan-300 hover:text-cyan-200 text-sm mt-2 inline-block">
                  support@aimades.ai
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <div className="card-surface !rounded-[28px] p-7 md:p-9 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-60 w-60 rounded-full blur-3xl bg-cyan-400/20" />
            <div className="relative">
              {sent ? (
                <div className="text-center py-12">
                  <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-white mb-4">
                    <Send size={20} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">Message sent!</h3>
                  <p className="text-white/60 mt-2">We&apos;ll be in touch shortly.</p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ name: "", email: "", company: "", message: "" });
                    }}
                    className="btn-ghost mt-6"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2 block">Name</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="input-field"
                        placeholder="Ada Lovelace"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2 block">Email</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="input-field"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2 block">Company</label>
                    <input
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="input-field"
                      placeholder="Acme Manufacturing"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2 block">What are you building?</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="input-field !rounded-2xl resize-none"
                      placeholder="Tell us about your parts, processes and timelines..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full !py-3.5 justify-center" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send message <Send size={16} />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-white/40 text-center">By submitting you agree to our privacy policy.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </SimplePage>
  );
}
