import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shahadath Hossen Sajib | Full Stack Engineer Portfolio',
    short_name: 'Sajib · Full Stack',
    description:
      'Full Stack Engineer (backend-focused) building scalable APIs, real-time systems, and AI-powered applications with TypeScript, React, Next.js, Node.js, NestJS, and Python.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    orientation: 'portrait-primary',
    categories: ['technology', 'developer', 'portfolio', 'engineering'],
    lang: 'en-US',
    dir: 'ltr',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/logo.png',
        sizes: '304x233',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/logo.png',
        sizes: 'apple-touch-icon',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      {
        name: 'About',
        short_name: 'About',
        url: '/#about',
      },
      {
        name: 'Experience',
        short_name: 'Experience',
        url: '/#experience',
      },
      {
        name: 'Skills',
        short_name: 'Skills',
        url: '/#skills',
      },
      {
        name: 'Projects',
        short_name: 'Projects',
        url: '/#projects',
      },
      {
        name: 'Contact',
        short_name: 'Contact',
        url: '/#contact',
      },
    ],
  };
}
