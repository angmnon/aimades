import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProductSection } from '@/components/sections/ProductSection';
import { ArchitectureSection } from '@/components/sections/ArchitectureSection';
import { MatrixSection } from '@/components/sections/MatrixSection';
import { ModelsSection } from '@/components/sections/ModelsSection';
import { ScenariosSection } from '@/components/sections/ScenariosSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { CTASection } from '@/components/sections/CTASection';
import { TrustedSection } from '@/components/sections/TrustedSection';

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustedSection />
        <ProductSection />
        <ArchitectureSection />
        <MatrixSection />
        <ModelsSection />
        <ScenariosSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
