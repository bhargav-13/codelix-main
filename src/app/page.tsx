import { HeroParallaxDemo } from '@/components/hero-parallax-demo';
import { BuildAppsSection } from '@/components/build-apps-section';
import { ServicesSection } from '@/components/services-section';
import { TechnologiesSection } from '@/components/technologies-section';
import { TestimonialSliderSection } from '@/components/testimonial-slider-section';
import { BackgroundLinesDemo } from '@/components/background-lines';

export default function Home() {
  return (
    <>
      <section id="home">
        <HeroParallaxDemo />
      </section>
      <section id="services">
        <BuildAppsSection />
        <ServicesSection />
      </section>
      <section id="technologies">
        <TechnologiesSection />
      </section>
      <section id="testimonials">
        <TestimonialSliderSection />
      </section>
      <div className="relative">
        <BackgroundLinesDemo />
      </div>
    </>
  );
}
