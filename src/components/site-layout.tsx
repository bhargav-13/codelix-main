'use client';

import { SiteHeader } from './site-header';
import { Footer } from './footer';

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-grow bg-black text-white">
        {children}
      </main>
      <Footer />
    </div>
  );
}
