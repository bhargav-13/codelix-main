'use client';

import { SiteLayout } from '@/components/site-layout';

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteLayout>{children}</SiteLayout>;
}
