import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { UIProvider } from '@/context/ui-context';
import SectionBackground from '@/components/interactive/SectionBackground';
import Spotlight from '@/components/interactive/Spotlight';
import Dock from '@/components/interactive/Dock';
import AssistiveButton from '@/components/interactive/AssistiveButton';
import Terminal from '@/components/interactive/Terminal';
import Pet from '@/components/interactive/Pet';
import PetPanel from '@/components/interactive/PetPanel';

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const siteUrl = 'https://shahadathhs.vercel.app';
const name = 'Shahadath Hossen Sajib';
const shortDescription =
  'Full Stack Engineer (backend-focused) building scalable APIs, real-time systems, and AI-powered applications with TypeScript, React, Next.js, Node.js, NestJS, and Python.';
const longDescription =
  'Full Stack Engineer, backend-focused, building production web applications, scalable APIs, real-time systems, and AI-powered features with TypeScript, React, Next.js, Node.js, NestJS, Python, and FastAPI. Hands-on with PostgreSQL, MongoDB, Redis, RAG and tool calling, Docker, AWS, and Linux-based deployments.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${name} | Full Stack Engineer (Node.js, NestJS, Python)`,
    template: `%s | ${name}`,
  },
  description: longDescription,
  applicationName: `${name}, Portfolio`,
  authors: [{ name, url: siteUrl }],
  creator: name,
  publisher: name,
  keywords: [
    'Shahadath Hossen Sajib',
    'Shahadath H. Sajib',
    'Sajib',
    'Full Stack Engineer',
    'Full Stack Developer',
    'Backend Engineer',
    'Backend Developer',
    'React',
    'Next.js',
    'RAG',
    'Node.js',
    'NestJS',
    'FastAPI',
    'Express.js',
    'TypeScript',
    'JavaScript',
    'Python',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Prisma',
    'Drizzle',
    'Mongoose',
    'Docker',
    'AWS',
    'EC2',
    'S3',
    'Nginx',
    'Caddy',
    'GitHub Actions',
    'CI/CD',
    'Socket.IO',
    'WebRTC',
    'BullMQ',
    'Microservices',
    'REST API',
    'Event-Driven Architecture',
    'OpenAI',
    'Ollama',
    'RAG',
    'Vector Search',
    'AI',
    'LLM',
    'DevOps',
    'Dhaka',
    'Bangladesh',
    'Full Stack Portfolio',
  ],
  category: 'technology',
  classification: 'Full Stack Engineering Portfolio',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteUrl,
    siteName: `${name} | Full Stack Engineer`,
    title: `${name} | Full Stack Engineer`,
    description: shortDescription,
    firstName: 'Shahadath',
    lastName: 'Hossen Sajib',
    username: 'shahadathhs',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${name} | Full Stack Engineer Portfolio`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@shahadathhs',
    creator: '@shahadathhs',
    title: `${name} | Full Stack Engineer`,
    description: shortDescription,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon', type: 'image/png' },
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: ['/icon', '/logo.png'],
    apple: [{ url: '/logo.png', type: 'image/png' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/logo.png',
      },
    ],
  },
  manifest: '/manifest.webmanifest',
  verification: {
    google: 'gDV_gmN6sN_n00leYaqzuPnSrB8EL8lgxvHJJUb8GFM',
  },
  other: {
    // Person schema — primary
    'person-schema': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name,
      givenName: 'Shahadath',
      familyName: 'Hossen Sajib',
      jobTitle: 'Full Stack Engineer',
      description: shortDescription,
      url: siteUrl,
      image: `${siteUrl}/logo.png`,
      email: 'mailto:shahadathhossensajib732@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dhaka',
        addressCountry: 'Bangladesh',
      },
      sameAs: [
        'https://github.com/shahadathhs',
        'https://www.linkedin.com/in/shahadathhs/',
        'https://medium.com/@shahadathhs',
        'https://leetcode.com/u/shahadathhs/',
        'https://x.com/shahadathhs',
        'https://shahadathhs.pages.dev',
      ],
      knowsAbout: [
        'Node.js',
        'NestJS',
        'FastAPI',
        'Express.js',
        'TypeScript',
        'JavaScript',
        'Python',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Prisma',
        'Mongoose',
        'Drizzle',
        'Docker',
        'AWS',
        'Nginx',
        'Caddy',
        'GitHub Actions',
        'Socket.IO',
        'WebRTC',
        'BullMQ',
        'Microservices',
        'REST API',
        'Event-Driven Architecture',
        'OpenAI',
        'Ollama',
        'RAG',
        'Vector Search',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Digital Pylot',
      },
      nationality: {
        '@type': 'Country',
        name: 'Bangladesh',
      },
    }),
    'profilepage-schema': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name,
        url: siteUrl,
      },
    }),
    'website-schema': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: `${name} | Full Stack Engineer Portfolio`,
      url: siteUrl,
      author: { '@type': 'Person', name },
      inLanguage: 'en-US',
    }),
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

const jsonLdScripts = [
  metadata.other?.['person-schema'],
  metadata.other?.['profilepage-schema'],
  metadata.other?.['website-schema'],
].filter(Boolean);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {jsonLdScripts.map((json, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: json as string }}
          />
        ))}
      </head>
      <body className={`${ibmPlexMono.variable} antialiased font-mono`}>
        <Toaster />
        <UIProvider>
          <SectionBackground />
          <Spotlight />
          <Dock />
          <AssistiveButton />
          <Terminal />
          <Pet />
          <PetPanel />
          <main className="min-h-dvh">{children}</main>
        </UIProvider>
      </body>
    </html>
  );
}
