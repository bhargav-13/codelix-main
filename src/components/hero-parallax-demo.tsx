'use client';
import { HeroParallax } from './ui/hero-parallax';

export const HeroParallaxDemo = () => {
  return <HeroParallax products={frames} />;
};

const frames = [
  {
    title: 'Container',
    link: '/',
    thumbnail: '/frames/Container.png',
  },
  {
    title: 'Dashboard',
    link: '/',
    thumbnail: '/frames/Dashboard.png',
  },
  {
    title: 'Finance',
    link: '/',
    thumbnail: '/frames/Finance.png',
  },
  {
    title: 'For Social Media',
    link: '/',
    thumbnail: '/frames/For Social media.png',
  },
  {
    title: 'Frame 1707480033',
    link: '/',
    thumbnail: '/frames/Frame 1707480033.png',
  },
  {
    title: 'Frame 2118388201',
    link: '/',
    thumbnail: '/frames/Frame 2118388201.png',
  },
  {
    title: 'Frame 2118388216',
    link: '/',
    thumbnail: '/frames/Frame 2118388216.png',
  },
  {
    title: 'Frame 2118388217',
    link: '/',
    thumbnail: '/frames/Frame 2118388217.png',
  },
  {
    title: 'Frame 3',
    link: '/',
    thumbnail: '/frames/Frame 3.png',
  },
];
