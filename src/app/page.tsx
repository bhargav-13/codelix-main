import { HeroParallaxDemo } from '@/components/hero-parallax-demo';
import { BuildAppsSection } from '@/components/build-apps-section';
import { ServicesSection } from '@/components/services-section';
import { TechnologiesSection } from '@/components/technologies-section';
import { TestimonialSliderSection } from '@/components/testimonial-slider-section';
import { BackgroundLinesDemo } from '@/components/background-lines';

export default function Home() {
  return (
    <>
     <div id="home">Add commentMore actions
        <HeroParallaxDemo />
        <BuildAppsSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="technologies">
        <TechnologiesSection />
      </div>
      <TestimonialSliderSection />
      <div className="relative" id="contact">
        <BackgroundLinesDemo />
      </div>
    </>
  );
}
