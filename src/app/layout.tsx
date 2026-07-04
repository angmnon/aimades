import type { Metadata } from 'next';
import './globals.css';
import { SupabaseConfigProvider } from '@/lib/supabase-config-inject';
import { BackgroundAurora } from '@/components/BackgroundAurora';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.COZE_PROJECT_DOMAIN_DEFAULT || 'mades.ai'}`),
  title: {
    default: 'MADES — The Industrial World Model',
    template: '%s | MADES',
  },
  description:
    'MADES is the world\'s first industrial foundation model that understands geometry, physics, materials, machines, cost and manufacturing constraints — end-to-end from design to production.',
  keywords: [
    'MADES',
    'Industrial AI',
    'World Model',
    'Manufacturing AI',
    'CAD AI',
    'CAM AI',
    'DFM',
    'Industrial LLM',
    'Generative Engineering',
    'AIMADES',
  ],
  authors: [{ name: 'AIMADES Pte. Ltd.' }],
  openGraph: {
    title: 'MADES — The Industrial World Model',
    description:
      'Understand geometry, physics, materials, machines, cost and manufacturing constraints. From design to production — with one model.',
    siteName: 'MADES',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#05060A] text-[#F5F7FA] min-h-screen overflow-x-hidden">
        <BackgroundAurora />
        <SupabaseConfigProvider>{children}</SupabaseConfigProvider>
      </body>
    </html>
  );
}
