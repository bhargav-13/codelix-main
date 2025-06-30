'use client';

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from 'next/image';

export function BuildAppsSection() {
  const words = [
    {
      text: "Build",
      className: "text-2xl md:text-4xl font-bold text-black"
    },
    {
      text: "awesome",
      className: "text-2xl md:text-4xl font-bold text-black"
    },
    {
      text: "apps",
      className: "text-2xl md:text-4xl font-bold text-black"
    },
    {
      text: "with",
      className: "text-2xl md:text-4xl font-bold text-black"
    },
    {
      text: "Codelix",
      className: "text-2xl md:text-4xl font-bold text-blue-600"
    },
    {
      text: "|",
      className: "text-2xl md:text-4xl font-bold text-blue-600 animate-pulse"
    },
  ];

  return (
    <section className="w-full py-8 md:py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <div className="space-y-4">
              <TypewriterEffectSmooth 
                words={words} 
                className="text-left" 
                cursorClassName="h-8 md:h-10"
              />
              <p className="text-gray-600 text-base">
                We help startups and enterprises build beautiful, functional, and scalable web and mobile applications.
              </p>
              <button className="bg-black text-white px-6 py-2 rounded-full text-base font-medium hover:bg-gray-800">
                Hire Us
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative w-full max-w-md">
              <img 
                src="build.png" 
                alt="People working with Codelix" 
                className="w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
