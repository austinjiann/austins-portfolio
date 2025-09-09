import NavBar from '@/components/NavBar';
import WindowCard from '@/components/WindowCard';
import HeroText from '@/components/HeroText';

// Inherit global SEO metadata from layout

export default function AboutPage() {
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
            <WindowCard className="mb-8" maxWidthClass="max-w-[740px]" contentClassName="pt-9 pb-8 px-6 sm:px-8 md:px-10 lg:px-12 h-[460px]">
              <HeroText />
            </WindowCard>
          </div>
        </div>
      </section>
    </main>
  );
}



