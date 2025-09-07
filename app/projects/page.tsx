import { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import WindowCard from '@/components/WindowCard';

export const metadata: Metadata = {
  title: 'Austin Jian - Projects',
  description: 'Projects and experiments by Austin Jian: demos, prototypes, and shipped work.',
  openGraph: {
    title: 'Austin Jian - Projects',
    description: 'Projects and experiments by Austin Jian: demos, prototypes, and shipped work.',
    url: 'https://austinjian.ca/projects',
    images: [
      {
        url: '/photos/photo1.jpg',
        width: 1200,
        height: 630,
        alt: 'Austin Jian projects',
      },
    ],
  },
  twitter: {
    title: 'Austin Jian - Projects',
    description: 'Projects and experiments by Austin Jian: demos, prototypes, and shipped work.',
    images: ['/photos/photo1.jpg'],
  },
};

export default function ProjectsPage() {
  return (
    <main className="relative w-full min-h-dvh">
      <div className="fixed inset-x-0 top-0 z-20">
        <NavBar />
      </div>

      <section className="min-h-dvh flex items-center">
        <div className="w-full max-w-[1200px] mx-auto px-6 relative">
          {/* Center radial glow behind the window card */}
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
            <div
              className="rounded-[44px]"
              style={{
                width: 'min(1400px, 98vw)',
                height: 'min(780px, 76vh)',
                background:
                  'radial-gradient(820px 440px at 50% 50%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.14) 42%, rgba(255,255,255,0.06) 68%, rgba(255,255,255,0.0) 88%)',
                opacity: 0.85,
                filter: 'blur(16px)',
              }}
            />
          </div>
          <div className="relative z-10">
            <WindowCard>
              <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20">
                <div className="h-10 w-44 bg-white/5 border border-white/15 rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[30px] rounded-br-[30px]" />
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
                  Projects
                </h1>
                <p className="text-[#8B8B8B] text-lg">
                  Coming soon...
                </p>
              </div>
            </WindowCard>
          </div>
        </div>
      </section>
    </main>
  );
}