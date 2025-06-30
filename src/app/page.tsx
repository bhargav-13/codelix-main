import { HeroParallaxDemo } from '@/components/hero-parallax-demo';
import { BuildAppsSection } from '@/components/build-apps-section';
import { ServicesSection } from '@/components/services-section';
import { TechStackSection } from '@/components/tech-stack-section';

export default function Home() {
  return (
    <>
      <HeroParallaxDemo />
      <BuildAppsSection />
      <ServicesSection />
      <TechStackSection />
    </>
  );
}
