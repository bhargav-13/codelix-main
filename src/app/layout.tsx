import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Mulish } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/footer";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "Codelix | IT Solutions & Consulting",
  description: "Codelix is a leading IT company providing software development, cloud solutions, digital transformation, and technology consulting for businesses worldwide.",
  keywords: [
    "Codelix",
    "IT Solutions",
    "IT Consulting",
    "Software Development",
    "Cloud Services",
    "Digital Transformation",
    "Business Technology",
    "Enterprise Solutions",
    "Tech Company",
    "Managed IT Services"
  ],
  openGraph: {
    title: "Codelix | IT Solutions & Consulting",
    description: "Codelix is a leading IT company providing software development, cloud solutions, digital transformation, and technology consulting for businesses worldwide.",
    url: "https://codelix.com/", // Update with your actual domain
    siteName: "Codelix IT Company",
    images: [
      {
        url: "https://codelix.com/og-image.jpg", // Update with your actual image
        width: 1200,
        height: 630,
        alt: "Codelix IT Solutions Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codelix | IT Solutions & Consulting",
    description: "Codelix is a leading IT company providing software development, cloud solutions, digital transformation, and technology consulting for businesses worldwide.",
    images: ["https://codelix.com/og-image.jpg"], // Update with your actual image
    creator: "@codelix", // Update with your actual Twitter handle
  },
  metadataBase: new URL("https://codelix.com"), // Update with your actual domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${mulish.variable} antialiased`}
      >
        <SiteHeader />
        <main>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
