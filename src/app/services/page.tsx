"use client";

import { Meteors } from "@/components/ui/meteors";
import { SparklesPreview } from "@/components/sparkles-demo";
import { BackgroundLinesDemo } from "@/components/background-lines";

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies like Next.js, React, and TypeScript.",
    icon: "💻"
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that provide exceptional user experiences.",
    icon: "🎨"
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform mobile applications using React Native for iOS and Android.",
    icon: "📱"
  },
  {
    title: "E-commerce",
    description: "Scalable e-commerce solutions with secure payment integrations.",
    icon: "🛒"
  },
  {
    title: "SEO Optimization",
    description: "Improve your search engine rankings and online visibility.",
    icon: "🔍"
  },
  {
    title: "Consulting",
    description: "Expert advice and guidance for your digital transformation journey.",
    icon: "💡"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and reliable cloud infrastructure for your applications.",
    icon: "☁️"
  },
  {
    title: "DevOps",
    description: "Streamline your development and deployment processes with CI/CD pipelines.",
    icon: "⚙️"
  },
  {
    title: "AI & ML",
    description: "Leverage artificial intelligence and machine learning for your business.",
    icon: "🤖"
  },
  {
    title: "Support & Maintenance",
    description: "Ongoing support and maintenance for your digital products.",
    icon: "🔧"
  }
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <SparklesPreview />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative h-64">
              <div className="absolute inset-0 h-full w-full transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-lg opacity-30" />
              <div className="relative h-full flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-xl">
                <div>
                  <div className="mb-4 text-3xl">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </div>
                <button className="mt-4 w-fit rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors">
                  Learn more
                </button>
                <Meteors number={5} />
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="relative">
          <BackgroundLinesDemo />
        </div>
    </div>
  );
}
