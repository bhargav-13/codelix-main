import { HeroParallaxDemo } from '@/components/hero-parallax-demo';
import TypewriterEffectSmoothDemo from '@/components/typewriter-effect-demo-1';
import { UnapologeticButtonsGrid } from '@/components/UnapologeticButtonsGrid';
import InfiniteMovingCardsDemo from '@/components/infinite-moving-cards-demo';
import { BackgroundLinesDemo } from '@/components/background-lines';

export default function Home() {
  return (
    <>
      <HeroParallaxDemo />
      <TypewriterEffectSmoothDemo />
      <UnapologeticButtonsGrid />
      <InfiniteMovingCardsDemo />
      <div className="relative">
        <BackgroundLinesDemo />
      </div>
    </>
  );
}
