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

      <section className="min-h-dvh py-28">
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
          <div className="relative z-10 flex flex-col items-center gap-10">
            <WindowCard maxWidthClass="max-w-card" contentClassName="py-6 px-6 min-h-[340px] flex items-center">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full">
                <div className="sm:w-1/2 w-full">
                  <div className="w-full bg-black rounded-2xl overflow-hidden" style={{ height: 'clamp(180px, 24vw, 240px)' }}>
                    <video
                      src="/photos/playcreate demo.mp4"
                      className="w-full h-full object-cover pointer-events-none"
                      style={{ objectPosition: 'center 70%', transform: 'scale(1.18)' }}
                      autoPlay
                      muted
                      loop
                      preload="metadata"
                      playsInline
                      disablePictureInPicture
                      controlsList="nodownload noplaybackrate noremoteplayback"
                    />
                  </div>
                </div>
                <div className="sm:w-1/2 w-full flex flex-col justify-center" style={{ minHeight: 'clamp(200px, 22vw, 260px)' }}>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h2 className="font-semibold text-white" style={{ fontSize: 'clamp(18px, 1.6vw, 22px)' }}>PlayCreate</h2>
                    <div className="flex items-center gap-2 shrink-0">
                      <a href="https://tryplaycreate.com/" target="_blank" rel="noopener noreferrer" aria-label="PlayCreate website" className="text-gray-300 hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <path d="M15 3h6v6"/>
                          <path d="M10 14L21 3"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.2vw, 16px)' }}>
                    Traditional tactic boards reinvented with AI.<br />4 million views, working with Canada's biggest basketball clubs.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full" style={{ fontSize: 'clamp(11px, 1vw, 13px)' }}>React</span>
                    <span className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full" style={{ fontSize: 'clamp(11px, 1vw, 13px)' }}>Next.js</span>
                    <span className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full" style={{ fontSize: 'clamp(11px, 1vw, 13px)' }}>TypeScript</span>
                    <span className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full" style={{ fontSize: 'clamp(11px, 1vw, 13px)' }}>Tailwind CSS</span>
                    <span className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full" style={{ fontSize: 'clamp(11px, 1vw, 13px)' }}>OpenAI Api</span>
                  </div>
                </div>
              </div>
            </WindowCard>
            <WindowCard maxWidthClass="max-w-card" contentClassName="py-6 px-6 min-h-[340px] flex items-center">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full">
                <div className="sm:w-1/2 w-full">
                  <div className="w-full bg-black rounded-2xl overflow-hidden" style={{ height: 'clamp(180px, 24vw, 240px)' }}>
                    <video
                      src="/photos/patchy.mp4"
                      className="w-full h-full object-cover pointer-events-none"
                      style={{ objectPosition: 'center 70%', transform: 'scale(1.18)' }}
                      autoPlay
                      muted
                      loop
                      preload="metadata"
                      playsInline
                      disablePictureInPicture
                      controlsList="nodownload noplaybackrate noremoteplayback"
                    />
                  </div>
                </div>
                <div className="sm:w-1/2 w-full flex flex-col justify-center" style={{ minHeight: 'clamp(200px, 22vw, 260px)' }}>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h2 className="font-semibold text-white" style={{ fontSize: 'clamp(18px, 1.6vw, 22px)' }}>Patchy</h2>
                    <div className="flex items-center gap-2 shrink-0">
                      <a href="https://github.com/austinjiann/Patchy" target="_blank" rel="noopener noreferrer" aria-label="Patchy GitHub" className="text-gray-300 hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 .5C5.73.5.99 5.24.99 11.5c0 4.85 3.14 8.96 7.49 10.41.55.1.76-.24.76-.54 0-.27-.01-1.17-.02-2.12-3.05.66-3.69-1.3-3.69-1.3-.5-1.27-1.22-1.6-1.22-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.58 1.19 3.21.91.1-.71.38-1.19.69-1.47-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.41.11-2.93 0 0 .92-.29 3.01 1.13.88-.24 1.82-.36 2.76-.36.94 0 1.88.12 2.76.36 2.09-1.42 3.01-1.13 3.01-1.13.6 1.52.22 2.65.11 2.93.7.77 1.13 1.75 1.13 2.95 0 4.22-2.56 5.14-5 5.41.39.34.73 1.01.73 2.05 0 1.48-.01 2.68-.01 3.05 0 .3.2.65.77.54 4.35-1.45 7.49-5.56 7.49-10.41C23.01 5.24 18.27.5 12 .5z"/>
                        </svg>
                      </a>
                      <a href="https://devpost.com/software/patchy" target="_blank" rel="noopener noreferrer" aria-label="Patchy website" className="text-gray-300 hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <path d="M15 3h6v6"/>
                          <path d="M10 14L21 3"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.2vw, 16px)' }}>
                    Patch all web security issues in your GitHub repo with the click of a button.<br />Won $1,500 at Hack the 6ix.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full" style={{ fontSize: 'clamp(11px, 1vw, 13px)' }}>Python</span>
                    <span className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full" style={{ fontSize: 'clamp(11px, 1vw, 13px)' }}>React</span>
                    <span className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full" style={{ fontSize: 'clamp(11px, 1vw, 13px)' }}>TypeScript</span>
                    <span className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full" style={{ fontSize: 'clamp(11px, 1vw, 13px)' }}>Vellum</span>
                    <span className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full" style={{ fontSize: 'clamp(11px, 1vw, 13px)' }}>OpenAI Api</span>
                    <span className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full" style={{ fontSize: 'clamp(11px, 1vw, 13px)' }}>GitHub Api</span>
                    <span className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full" style={{ fontSize: 'clamp(11px, 1vw, 13px)' }}>Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </WindowCard>
            
          </div>
        </div>
      </section>
    </main>
  );
}