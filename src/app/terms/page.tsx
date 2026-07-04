import { SimplePage } from "@/components/SimplePage";

export default function TermsPage() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Terms of Service"
      subtitle="Last updated: July 1, 2025."
    >
      <div className="space-y-6 text-white/70 leading-relaxed">
        <section>
          <h2 className="text-white font-display text-xl font-bold">1. Acceptance</h2>
          <p>By accessing or using MADES, you agree to be bound by these Terms and our Privacy Policy. If you are using the services on behalf of an organization, you represent that you have authority to bind that organization.</p>
        </section>
        <section>
          <h2 className="text-white font-display text-xl font-bold">2. Service description</h2>
          <p>MADES provides industrial world-model capabilities including generative CAD, material and process recommendation, simulation, cost estimation and workflow automation through a web console and APIs. We may evolve, add or remove features at any time.</p>
        </section>
        <section>
          <h2 className="text-white font-display text-xl font-bold">3. Accounts</h2>
          <p>You are responsible for safeguarding credentials and all activity under your account. You must provide accurate information and notify us immediately of any unauthorized access.</p>
        </section>
        <section>
          <h2 className="text-white font-display text-xl font-bold">4. Content & IP</h2>
          <p>You retain ownership of CAD files, specifications and prompts you upload. You grant AIMADES a limited license to host, process and serve your content solely to operate the service. Generated outputs are provided as-is; you are responsible for validating engineering accuracy before manufacturing.</p>
        </section>
        <section>
          <h2 className="text-white font-display text-xl font-bold">5. Acceptable use</h2>
          <p>You may not use MADES for weapons, critical-life-safety systems without independent validation, IP infringement, reverse engineering the models, or to build competing industrial AI services on top of our APIs.</p>
        </section>
        <section>
          <h2 className="text-white font-display text-xl font-bold">6. Warranty & liability</h2>
          <p>The service is provided &quot;as is&quot; without warranty of merchantability or fitness for a particular purpose. AIMADES is not liable for manufacturing losses, tooling damage or production downtime arising from unvalidated outputs; customers must run independent engineering review prior to production.</p>
        </section>
        <section>
          <h2 className="text-white font-display text-xl font-bold">7. Termination</h2>
          <p>You may cancel at any time. We may suspend accounts for breach of these Terms. Upon termination you may export your data within 30 days; after that it is deleted.</p>
        </section>
        <section>
          <h2 className="text-white font-display text-xl font-bold">8. Governing law</h2>
          <p>These Terms are governed by the laws of Singapore. Disputes will be resolved in the courts of Singapore.</p>
        </section>
      </div>
    </SimplePage>
  );
}
