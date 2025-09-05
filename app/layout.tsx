import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Austin Jian – Software Engineer',
  description: 'Portfolio hero section',
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

