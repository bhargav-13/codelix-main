'use client';

import { HoverEffect } from '../components/ui/card-hover-effect';

export const projects = [
  {
    title: 'Stripe',
    description:
      'A technology company that builds economic infrastructure for the internet.',
    link: 'https://stripe.com',
  },
  {
    title: 'Netflix',
    description:
      'A streaming service offering award-winning TV shows, movies, anime, and more.',
    link: 'https://netflix.com',
  },
  {
    title: 'Google',
    description:
      'A multinational tech company specializing in internet-related services and products.',
    link: 'https://google.com',
  },
  {
    title: 'Meta',
    description:
      'A tech company building products that advance Facebook’s mission to bring people together.',
    link: 'https://meta.com',
  },
  {
    title: 'Amazon',
    description:
      'A global tech company focusing on e-commerce, cloud, streaming, and AI.',
    link: 'https://amazon.com',
  },
  {
    title: 'Microsoft',
    description:
      'A multinational corporation developing and supporting software and hardware products.',
    link: 'https://microsoft.com',
  },
];

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
