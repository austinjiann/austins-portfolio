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
            <WindowCard className="mb-8" maxWidthClass="max-w-[740px]" contentClassName="pt-0 pb-8 px-0 h-[460px]">
              {/* VIDEO */}
              <div className="w-full h-[300px] bg-black rounded-b-[20px] overflow-hidden">
                <video
                  src="/photos/playcreate demo.mp4"
                  className="w-full h-full object-cover pointer-events-none"
                  style={{ objectPosition: 'center 70%', transform: 'scale(1.15)' }}
                  autoPlay
                  muted
                  loop
                  preload="metadata"
                  playsInline
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate noremoteplayback"
                />
              </div>

              {/* PROJECT DESCRIPTION */}
              <div className="px-6 pt-4">
                <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">PlayCreate</h2>
                <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">
                  Coaching reinvented with AI.
                </p>
                
                {/* TECHNOLOGY TAGS */}
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full text-xs sm:text-sm">React</span>
                  <span className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full text-xs sm:text-sm">Next.js</span>
                  <span className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full text-xs sm:text-sm">TypeScript</span>
                </div>
              </div>
            </WindowCard>
          </div>
        </div>
      </section>
    </main>
  );
}