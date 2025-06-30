"use client";

import { SparklesPreview } from "@/components/sparkle-contact";
import { BackgroundLinesDemo } from "@/components/background-lines";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import ContactForm from "@/components/contact-form";
import CodelixLogo from "@/components/CodelixLogo";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <SiteHeader />
      <SparklesPreview />

      <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Codelix Logo and Tagline */}
            <div className="flex items-center justify-center p-4">
              <CodelixLogo className="max-w-lg" />
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="flex items-center justify-center p-4">
              <ContactForm />
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
