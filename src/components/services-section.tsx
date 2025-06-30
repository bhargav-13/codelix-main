'use client';

import { HoverEffect } from "./ui/services-hover-effect";

export function ServicesSection() {
  const services = [
    {
      id: 'web-dev',
      title: "Web Development",
      description: "Custom, responsive websites built with modern technologies to ensure fast loading and great user experience.",
      link: "#web-development"
    },
    {
      id: 'mobile-apps',
      title: "Mobile Apps",
      description: "Cross-platform mobile applications that work seamlessly on both iOS and Android devices.",
      link: "#mobile-apps"
    },
    {
      id: 'ui-ux',
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces designed to enhance user experience and engagement.",
      link: "#ui-ux-design"
    },
    {
      id: 'ecommerce',
      title: "E-commerce Solutions",
      description: "Complete online store setup with secure payment gateways and inventory management.",
      link: "#ecommerce-solutions"
    },
    {
      id: 'cloud',
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions for your applications.",
      link: "#cloud-services"
    },
    {
      id: 'support',
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your applications running smoothly.",
      link: "#maintenance-support"
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Services</h2>
        </div>
        <HoverEffect items={services} />
      </div>
    </section>
  );
}
