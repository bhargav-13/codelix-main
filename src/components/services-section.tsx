'use client';

import { HoverEffect } from "./ui/services-hover-effect";

export function ServicesSection() {
  const services = [
    {
      id: 'web-dev',
      title: '🌐 Web Development',
      description:
        'We build fast, secure, and scalable websites tailored to your business needs — from clean corporate sites to complex web platforms. Our focus is on performance, responsiveness, and smooth user experience across all devices.',
      link: '#web-development',
    },
    {
      id: 'app-dev',
      title: '📱 Application Development',
      description:
        'Whether it’s Android, iOS, or cross-platform — we craft mobile apps that are intuitive, reliable, and user-friendly. From concept to launch, we develop applications that deliver real value to your users and business.',
      link: '#application-development',
    },
    {
      id: 'ui-ux',
      title: '🎨 UI/UX Design',
      description:
        'We design seamless digital experiences that are both functional and visually compelling. Using tools like Figma, we create user journeys, wireframes, and interfaces that prioritize clarity, usability, and engagement.',
      link: '#ui-ux-design',
    },
    {
      id: 'agentic-ai',
      title: '🤖 Agentic AI Solutions',
      description:
        'We design and deploy intelligent AI agents tailored to automate tasks, engage users, and enhance decision-making. From chatbots to custom AI workflows, our agentic solutions help businesses scale with smart automation.',
      link: '#agentic-ai',
    },
    {
      id: 'marketing',
      title: '📈 Digital Marketing',
      description:
        'We help brands grow online through data-driven marketing strategies — including high-converting Meta (Facebook & Instagram) and Google Ads, content marketing, and social media campaigns focused on visibility and ROI.',
      link: '#digital-marketing',
    },
    {
      id: 'analytics',
      title: '📊 Data Analytics',
      description:
        'Make informed decisions with data that matters. We provide dashboards, tracking setups, and performance reports that turn raw data into actionable insights — helping you understand user behavior, optimize performance, and grow smarter.',
      link: '#data-analytics',
    },
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
