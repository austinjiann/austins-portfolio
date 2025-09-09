import NavBar from '@/components/NavBar';
import WindowCard from '@/components/WindowCard';
import HeroText from '@/components/HeroText';

// Inherit global SEO metadata from layout

export default function AboutPage() {
  return (
    <main className="relative w-full min-h-dvh grid grid-rows-[auto_1fr] overflow-hidden">
      <NavBar />

      <section className="min-h-0 flex items-center -mt-[36px]">
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
            <WindowCard maxWidthClass="max-w-card" contentClassName="py-6 px-6 sm:px-8 md:px-10 lg:px-12 h-[clamp(360px,38vw,460px)] flex items-center">
              <HeroText />
            </WindowCard>
          </div>
        </div>
      </section>
    </main>
  );
}



