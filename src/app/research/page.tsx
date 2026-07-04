import { SimplePage } from "@/components/SimplePage";
import Link from "next/link";
import { FlaskConical, FileText, Award, ArrowUpRight } from "lucide-react";

const papers = [
  {
    year: "2025",
    title: "MADES-1: A Latent World Model for Industrial Geometry and Physics",
    venue: "NeurIPS 2025",
    tag: "Oral",
  },
  {
    year: "2025",
    title: "B-Rep Graph Transformers for Feature Recognition Across Manufacturing Domains",
    venue: "ACM SIGGRAPH 2025",
    tag: "Journal",
  },
  {
    year: "2024",
    title: "Latent Multi-Physics Solvers with Process-Aware Tokens",
    venue: "ICML 2024",
    tag: "Poster",
  },
  {
    year: "2024",
    title: "DFM-as-a-Service: Latent Cost and Defect Prediction at 100ms Latency",
    venue: "CIRP Annals",
    tag: "Journal",
  },
];

const areas = [
  { title: "Geometry Learning", desc: "B-Rep, meshes, point clouds and CAD-native transformers.", icon: "◆" },
  { title: "Neural Physics", desc: "Fast surrogate solvers for FEM, thermals, and fluidics.", icon: "✦" },
  { title: "Process Planning", desc: "Decision transformers for CNC, additive and mold workflows.", icon: "◆" },
  { title: "Vision for Drawings", desc: "Parsing 2D drawings, sketches and legacy PDFs.", icon: "✦" },
];

export default function ResearchPage() {
  return (
    <SimplePage
      eyebrow="Research"
      title={<>Pushing the frontier of <span className="gradient-text">industrial intelligence.</span></>}
      subtitle="Our team publishes in top-tier venues and open-sources datasets and benchmarks to advance the field."
    >
      {/* Research areas */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {areas.map((a) => (
          <div key={a.title} className="card-surface !rounded-2xl p-5">
            <div className="text-2xl gradient-text">{a.icon}</div>
            <h3 className="mt-3 font-display font-bold text-white">{a.title}</h3>
            <p className="mt-1 text-sm text-white/60">{a.desc}</p>
          </div>
        ))}
      </div>

      {/* Papers */}
      <div className="mt-16">
        <div className="flex items-center gap-3 mb-6">
          <FlaskConical size={20} className="text-violet-300" />
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Selected publications</h2>
        </div>
        <div className="card-surface !rounded-[28px] overflow-hidden divide-y divide-white/5">
          {papers.map((p) => (
            <Link
              key={p.title}
              href="#"
              className="flex items-start gap-5 p-5 md:p-6 hover:bg-white/[0.04] transition-colors group"
            >
              <div className="font-mono text-sm text-white/40 pt-0.5 shrink-0 w-12">{p.year}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-medium text-white group-hover:text-violet-200 transition-colors">
                    {p.title}
                  </h3>
                  <span className="chip !bg-violet-500/10 !border-violet-400/20 !text-violet-300 !py-0.5 !text-[10px]">
                    {p.tag}
                  </span>
                </div>
                <div className="mt-1 text-sm text-white/55 flex items-center gap-2">
                  <FileText size={12} /> {p.venue}
                </div>
              </div>
              <ArrowUpRight size={16} className="text-white/30 group-hover:text-white mt-1 shrink-0" />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-[28px] glass p-7 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-2xl glass flex items-center justify-center text-cyan-300">
            <Award size={20} />
          </div>
          <div>
            <h3 className="font-display font-bold text-white text-xl">Join our research lab</h3>
            <p className="text-white/60 mt-1">We hire research engineers, scientists and interns year-round.</p>
          </div>
        </div>
        <Link href="/careers" className="btn-primary shrink-0">See open roles</Link>
      </div>
    </SimplePage>
  );
}
