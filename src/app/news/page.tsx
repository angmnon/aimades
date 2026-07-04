"use client";

import { SimplePage } from "@/components/SimplePage";
import Link from "next/link";
import { useState } from "react";
import { Newspaper, ArrowUpRight, Calendar, Loader2 } from "lucide-react";

const news = [
  {
    date: "Jul 2025",
    tag: "Product",
    title: "MADES v1.0 launches with six foundation models",
    desc: "General availability of the world's first industrial world model, covering language, geometry, vision, planning and simulation.",
  },
  {
    date: "Jun 2025",
    tag: "Research",
    title: "Two papers accepted at NeurIPS 2025",
    desc: "Our work on latent physics solvers and B-Rep transformers will appear as oral and spotlight presentations.",
  },
  {
    date: "May 2025",
    tag: "Partnership",
    title: "ARTC Singapore selects MADES for smart manufacturing pilot",
    desc: "Multi-year collaboration to deploy AI-driven DFM and process planning across precision machining lines.",
  },
  {
    date: "Apr 2025",
    tag: "Company",
    title: "AIMADES closes seed round led by leading deep-tech VCs",
    desc: "Funding to expand the team and accelerate deployment with aerospace and automotive customers.",
  },
];

export default function NewsPage() {
  return (
    <SimplePage
      eyebrow="News"
      title={<>Updates from the <span className="gradient-text">MADES</span> mission.</>}
      subtitle="Product launches, research, partnerships and company announcements."
    >
      <div className="space-y-4">
        {news.map((n) => (
          <Link
            key={n.title}
            href="#"
            className="group card-surface !rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-5 md:gap-8"
          >
            <div className="md:w-32 shrink-0">
              <div className="flex items-center gap-2 text-xs font-mono text-white/40">
                <Calendar size={12} /> {n.date}
              </div>
              <span className="mt-2 inline-block chip !py-0.5 !text-[10px]">{n.tag}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-violet-200 transition-colors">
                {n.title}
              </h3>
              <p className="mt-2 text-white/60">{n.desc}</p>
            </div>
            <ArrowUpRight size={20} className="text-white/30 group-hover:text-white self-start md:self-center shrink-0 transition-colors" />
          </Link>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center text-center">
        <NewsletterCard />
      </div>
    </SimplePage>
  );
}

function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  return (
    <>
      <div className="h-12 w-12 rounded-2xl glass flex items-center justify-center text-violet-300 mb-3">
        <Newspaper size={20} />
      </div>
      <h3 className="font-display font-bold text-white text-xl">Subscribe for launch updates</h3>
      <p className="text-white/60 mt-1 max-w-md">Get product news and research drops — no spam, one email a month at most.</p>
      {subscribed ? (
        <div className="mt-5 text-emerald-300 text-sm">Thanks — you are on the list.</div>
      ) : (
        <form
          className="mt-5 flex gap-2 w-full max-w-md"
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              setSubscribed(true);
              setEmail("");
            }, 700);
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="input-field"
            required
          />
          <button className="btn-primary !px-5" type="submit" disabled={loading}>
            {loading ? <Loader2 size={14} className="animate-spin" /> : "Subscribe"}
          </button>
        </form>
      )}
    </>
  );
}
