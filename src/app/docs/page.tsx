import { SimplePage } from "@/components/SimplePage";
import Link from "next/link";
import { BookOpen, Code2, Rocket, Zap, ArrowUpRight, Terminal, Layers } from "lucide-react";

const groups = [
  {
    title: "Getting started",
    icon: Rocket,
    items: [
      { title: "Quickstart", desc: "Run your first industrial inference in 5 minutes." },
      { title: "Installation", desc: "SDK setup for Python, TypeScript & REST." },
      { title: "Authentication", desc: "API keys, OAuth and service roles." },
    ],
  },
  {
    title: "Core concepts",
    icon: Layers,
    items: [
      { title: "The World Model", desc: "How the six reasoning layers compose." },
      { title: "Modalities", desc: "B-Rep, meshes, sketches, drawings, NC code." },
      { title: "Prompts & recipes", desc: "Prompt patterns for industrial tasks." },
    ],
  },
  {
    title: "Model APIs",
    icon: Code2,
    items: [
      { title: "Geometry Model", desc: "CAD import, feature recognition & STEP generation." },
      { title: "Physics Model", desc: "Latent FEM, stress and defect prediction." },
      { title: "Planning Model", desc: "Process route generation & G-code output." },
    ],
  },
  {
    title: "Console",
    icon: Terminal,
    items: [
      { title: "Projects", desc: "Organize parts, teams and revisions." },
      { title: "Billing & credits", desc: "Usage, quotas and plan upgrades." },
      { title: "Security", desc: "SSO, audit logs and data residency." },
    ],
  },
];

export default function DocsPage() {
  return (
    <SimplePage
      eyebrow="Documentation"
      title={<>Everything you need to <span className="gradient-text">build with MADES.</span></>}
      subtitle="Guides, API references, recipes and SDK references for the Industrial World Model."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {groups.map((g) => (
          <div key={g.title} className="card-surface !rounded-3xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-white">
                <g.icon size={18} />
              </div>
              <h2 className="font-display font-bold text-white text-xl">{g.title}</h2>
            </div>
            <ul className="space-y-2">
              {g.items.map((i) => (
                <li key={i.title}>
                  <Link href="#" className="group flex items-start justify-between gap-4 rounded-2xl p-3 -mx-3 hover:bg-white/5 transition-colors">
                    <div>
                      <div className="text-white font-medium group-hover:text-violet-200 transition-colors flex items-center gap-2">
                        {i.title}
                      </div>
                      <div className="text-sm text-white/55 mt-0.5">{i.desc}</div>
                    </div>
                    <ArrowUpRight size={16} className="text-white/30 group-hover:text-white mt-1 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[28px] glass p-7 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-2xl glass flex items-center justify-center text-violet-300">
            <BookOpen size={20} />
          </div>
          <div>
            <h3 className="font-display font-bold text-white text-xl">Can&apos;t find what you need?</h3>
            <p className="text-white/60 mt-1">Our engineering team responds within 24 hours on Pro plans.</p>
          </div>
        </div>
        <Link href="/contact" className="btn-primary shrink-0">
          Contact support <Zap size={14} />
        </Link>
      </div>
    </SimplePage>
  );
}
