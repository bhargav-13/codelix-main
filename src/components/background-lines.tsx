import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

import Link from 'next/link';

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Let’s build something extraordinary together.
      </h2>
      <Link href="/contact">
        <button className="z-30 relative mt-4 px-8 py-3 rounded-full bg-[#3E7DFC] text-white text-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200">
          Contact Us
        </button>
      </Link>
    </BackgroundLines>
  );
}
