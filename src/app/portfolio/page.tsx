"use client";

import { SparklesPreview } from "@/components/sparkle-portfolio";
import { BackgroundLinesDemo } from "@/components/background-lines";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <SiteHeader />
      <SparklesPreview />

      <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Work</span>
          </h2>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio items will go here */}
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all">
              <div className="aspect-video bg-gray-800 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-white mb-2">Project Title</h3>
              <p className="text-gray-400">Brief description of the project and the technologies used.</p>
            </div>
            
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all">
              <div className="aspect-video bg-gray-800 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-white mb-2">Project Title</h3>
              <p className="text-gray-400">Brief description of the project and the technologies used.</p>
            </div>
            
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all">
              <div className="aspect-video bg-gray-800 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-white mb-2">Project Title</h3>
              <p className="text-gray-400">Brief description of the project and the technologies used.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <BackgroundLinesDemo />
      </div>
      <SiteFooter />
    </div>
  );
}
