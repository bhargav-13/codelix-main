'use client';

import { SiteLayout } from '@/components/site-layout';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteLayout>{children}</SiteLayout>;
}
