import { SimplePage } from "@/components/SimplePage";

export default function PrivacyPage() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="Last updated: July 1, 2025."
    >
      <div className="space-y-6 text-white/70 leading-relaxed">
        <section>
          <h2 className="text-white font-display text-xl font-bold">1. Information we collect</h2>
          <p>When you create a MADES account, we collect your email address, name, organization and authentication credentials. When you use our services, we collect CAD files, manufacturing parameters, prompts, API requests and usage telemetry needed to operate, secure and improve the service.</p>
        </section>
        <section>
          <h2 className="text-white font-display text-xl font-bold">2. How we use information</h2>
          <ul className="list-disc pl-5 space-y-2 marker:text-violet-400">
            <li>To deliver the MADES console, APIs and inferences you request.</li>
            <li>To authenticate you, secure your workspace and prevent abuse.</li>
            <li>To improve model quality; Enterprise customer data is never used to train shared models.</li>
            <li>To send product updates and critical service notifications.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-white font-display text-xl font-bold">3. Data processing & sub-processors</h2>
          <p>We use Supabase for authentication and database services, Cloudflare for hosting and networking, and NVIDIA GPU cloud for inference. Data may be processed in Singapore, the United States and the European Union. A current list of sub-processors is available on request.</p>
        </section>
        <section>
          <h2 className="text-white font-display text-xl font-bold">4. Your rights</h2>
          <p>You may request access, correction, export or deletion of your personal data at any time by emailing privacy@aimades.ai. We respond to verified requests within 30 days.</p>
        </section>
        <section>
          <h2 className="text-white font-display text-xl font-bold">5. Security</h2>
          <p>All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Workspaces are logically isolated by tenant, and Enterprise tenants support VPC peering, bring-your-own-key and on-premise deployment options.</p>
        </section>
        <section>
          <h2 className="text-white font-display text-xl font-bold">6. Contact</h2>
          <p>Questions about this policy? Write to <a href="mailto:privacy@aimades.ai" className="text-violet-300 hover:text-violet-200">privacy@aimades.ai</a>.</p>
        </section>
      </div>
    </SimplePage>
  );
}
