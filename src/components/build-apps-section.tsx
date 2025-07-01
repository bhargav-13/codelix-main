'use client';

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from 'next/image';

export function BuildAppsSection() {
  const wordsLine1 = [
    {
      text: "Build something extraordinary",
      className: "text-base md:text-2xl lg:text-4xl font-bold text-black"
    },
  ];

  const wordsLine2 = [
    {
      text: "with codelix.",
      className: "text-base md:text-2xl lg:text-4xl font-bold text-blue-600"
    },
  ];

  return (
    <section className="w-full py-8 md:py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:gap-16 lg:gap-24">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <div className="space-y-4">
              <div className="overflow-x-auto w-full">
                <div>
                  <TypewriterEffectSmooth 
                    words={wordsLine1} 
                    className="text-left text-lg md:text-2xl lg:text-4xl font-bold whitespace-nowrap"
                    cursorClassName="h-6 md:h-10"
                  />
                </div>
                <div className="mt-2">
                  <TypewriterEffectSmooth 
                    words={wordsLine2} 
                    className="text-left text-lg md:text-2xl lg:text-4xl font-bold whitespace-nowrap"
                    cursorClassName="h-6 md:h-10"
                  />
                </div>
              </div>
              <p className="text-gray-600 text-base">
              Codelix was founded with a simple belief — that technology should empower, not overwhelm. Our vision is to build a digital future that feels intuitive, beautiful, and built for people.
              </p>
              <button className="bg-black text-white px-6 py-2 rounded-full text-base font-medium hover:bg-gray-800">
                Hire Us
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center px-4 md:px-0">
            <div className="relative w-full max-w-md md:max-w-xs lg:max-w-md xl:max-w-lg">
              <img 
                src="build.png" 
                alt="People working with Codelix" 
                className="w-full h-auto object-contain" 
                style={{ maxHeight: '370px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
