'use client';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

export default function TypewriterEffectSmoothDemo() {
  const words = [
    { text: 'Build', className: 'text-white' },
    { text: 'awesome', className: 'text-white' },
    { text: 'apps', className: 'text-white' },
    { text: 'with', className: 'text-white' },
    {
      text: 'Aceternity.',
      className: 'text-blue-500',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] text-white">
      <p className="text-white text-xs sm:text-base mb-2">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} className="mb-12" />
    </div>
  );
}
