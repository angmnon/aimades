import { SimplePage } from "@/components/SimplePage";
import Link from "next/link";
import { Briefcase, MapPin, Clock, ArrowUpRight } from "lucide-react";

const roles = [
  {
    team: "Research",
    title: "Senior Research Scientist — Neural Physics",
    location: "Singapore · Hybrid",
    type: "Full-time",
    desc: "Lead our surrogate-solver research: build latent models for FEM, thermals, and manufacturing process simulation.",
  },
  {
    team: "Research",
    title: "Research Engineer — Geometry Learning",
    location: "Singapore · Remote-eligible",
    type: "Full-time",
    desc: "Build B-Rep transformers and CAD-native generative models in PyTorch.",
  },
  {
    team: "Product",
    title: "Senior Full-Stack Engineer — Console",
    location: "Singapore",
    type: "Full-time",
    desc: "Ship the MADES console used by thousands of manufacturing engineers worldwide.",
  },
  {
    team: "Product",
    title: "Design Engineer — Motion & UI",
    location: "Remote",
    type: "Full-time",
    desc: "Craft the motion language, 3D previews and premium feel of every surface in the product.",
  },
  {
    team: "Go-to-Market",
    title: "Solutions Engineer — Manufacturing",
    location: "Singapore · Shenzhen",
    type: "Full-time",
    desc: "Partner with aerospace, automotive and mold customers to deploy MADES in production.",
  },
];

const perks = [
  "Competitive salary + early employee equity",
  "Compute budget for research experiments",
  "Annual conference & travel sponsorship",
  "Hardware of your choice",
  "Flexible hours & unlimited PTO",
  "Relocation support to Singapore",
];

export default function CareersPage() {
  return (
    <SimplePage
      eyebrow="Careers"
      title={<>Come build the <span className="gradient-text">industrial future</span> with us.</>}
      subtitle="We're a small, senior team from NTU and leading AI labs, building category-defining AI for the physical world."
    >
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-4">
          {roles.map((r) => (
            <Link
              key={r.title}
              href="#"
              className="group card-surface !rounded-3xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="chip !py-0.5 !text-[10px]">{r.team}</span>
                </div>
                <h3 className="font-display font-bold text-white text-lg group-hover:text-violet-200 transition-colors">
                  {r.title}
                </h3>
                <p className="mt-1 text-sm text-white/55">{r.desc}</p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-white/50">
                  <span className="flex items-center gap-1"><MapPin size={12} />{r.location}</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{r.type}</span>
                </div>
              </div>
              <div className="shrink-0 h-11 w-11 rounded-2xl glass flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/10 transition-all">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          ))}
        </div>

        <div className="space-y-4">
          <div className="card-surface !rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl bg-violet-500/30" />
            <div className="relative">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-white mb-4">
                <Briefcase size={18} />
              </div>
              <h3 className="font-display font-bold text-white text-lg">Why MADES?</h3>
              <ul className="mt-4 space-y-2.5">
                {perks.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="card-surface !rounded-3xl p-6">
            <h3 className="font-display font-bold text-white text-lg">Don&apos;t see your role?</h3>
            <p className="mt-2 text-sm text-white/60">We always want to meet world-class engineers and researchers.</p>
            <Link href="/contact" className="btn-ghost mt-4 w-full justify-center">
              Send us a note
            </Link>
          </div>
        </div>
      </div>
    </SimplePage>
  );
}
