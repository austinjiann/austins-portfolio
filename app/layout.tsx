import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
        <div className="top-radial-overlay" />
        {children}
      </body>
    </html>
  );
}

