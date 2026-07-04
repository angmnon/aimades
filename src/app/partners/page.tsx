import { SimplePage } from "@/components/SimplePage";
import Link from "next/link";
import { Handshake, Building2, Cpu, GraduationCap, ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "Technology Partners",
    icon: Cpu,
    partners: [
      "Supabase", "Cloudflare", "Vercel", "NVIDIA", "Onshape", "Siemens NX",
      "Dassault Systèmes", "Autodesk Fusion",
    ],
  },
  {
    title: "Manufacturing Partners",
    icon: Building2,
    partners: [
      "Advanced Remanufacturing & Technology Centre",
      "National Additive Manufacturing Centre",
      "Singapore Manufacturing Federation member network",
    ],
  },
  {
    title: "Research Partners",
    icon: GraduationCap,
    partners: [
      "Nanyang Technological University",
      "Agency for Science, Technology and Research (A*STAR)",
      "MIT MechE — collaborative research program",
      "TUM Asia",
    ],
  },
];

export default function PartnersPage() {
  return (
    <SimplePage
      eyebrow="Partners"
      title={<>Built with the <span className="gradient-text">best in the world.</span></>}
      subtitle="We partner with leading research institutions, technology platforms and advanced manufacturers to build, deploy and scale the Industrial World Model."
    >
      <div className="space-y-6">
        {categories.map((c) => (
          <div key={c.title} className="card-surface !rounded-[28px] p-7 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-white">
                <c.icon size={18} />
              </div>
              <h2 className="text-2xl font-display font-bold text-white">{c.title}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {c.partners.map((p) => (
                <div
                  key={p}
                  className="rounded-2xl glass p-4 text-center text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm font-medium min-h-[72px] flex items-center justify-center"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[28px] glass p-7 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-60 w-60 rounded-full blur-3xl bg-violet-500/30" />
        <div className="relative flex items-start gap-4">
          <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-violet-300">
            <Handshake size={20} />
          </div>
          <div>
            <h3 className="font-display font-bold text-white text-xl">Become a partner</h3>
            <p className="text-white/60 mt-1">Integrate MADES into your platform, or co-develop industry-specific solutions with us.</p>
          </div>
        </div>
        <Link href="/contact" className="btn-primary shrink-0 relative">
          Get in touch <ArrowUpRight size={16} />
        </Link>
      </div>
    </SimplePage>
  );
}
