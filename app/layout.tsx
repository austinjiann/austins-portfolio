import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://austinjian.ca'),
  title: {
    default: 'Austin Jian – Software Engineer',
    template: '%s · Austin Jian',
  },
  description:
    'Software engineer and builder.',
  keywords: [
    'Austin Jian',
    'Austin Jian portfolio',
    'software engineer',
    'developer',
    'projects',
    'writing',
  ],
  authors: [{ name: 'Austin Jian' }],
  creator: 'Austin Jian',
  publisher: 'Austin Jian',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://austinjian.ca/',
    title: 'Austin Jian – Software Engineer',
    description:
      'Software engineer and builder.',
    siteName: 'Austin Jian',
    locale: 'en_US',
    images: [
      {
        url: '/photos/photo1.jpg',
        width: 1200,
        height: 630,
        alt: 'Austin Jian portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@austinjian',
    title: 'Austin Jian – Software Engineer',
    description:
      'Software engineer and builder. Projects, writing, and contact information for Austin Jian.',
    images: ['/photos/photo1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="relative min-h-dvh bg-vignette font-inter text-white/90 antialiased">
        <GoogleAnalytics />
        <div className="top-radial-overlay z-40" />
        {children}
        {/* Webring widget pinned to bottom-right, aligned to page container */}
        <div className="fixed inset-x-0 bottom-4 z-40 pointer-events-none">
          <div className="w-full max-w-[1200px] mx-auto px-6">
            <div className="flex justify-end">
              <div className="pointer-events-auto flex items-center gap-2 text-white/80">
                <a href="https://cs.uwatering.com/#https://austinjian.ca?nav=prev" aria-label="Previous site in webring" className="px-1 py-0.5 rounded hover:text-white/100 transition-colors">←</a>
                <a href="https://cs.uwatering.com/#https://austinjian.ca" target="_blank" rel="noopener noreferrer" aria-label="CS Webring">
                  <img src="https://cs.uwatering.com/icon.white.svg" alt="CS Webring" style={{ width: 24, height: 'auto', opacity: 0.9 }} />
                </a>
                <a href="https://cs.uwatering.com/#https://austinjian.ca?nav=next" aria-label="Next site in webring" className="px-1 py-0.5 rounded hover:text-white/100 transition-colors">→</a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

