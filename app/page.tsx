import NavBar from '@/components/NavBar';
import WindowCard from '@/components/WindowCard';
import HeroText from '@/components/HeroText';

// Inherit global SEO metadata from layout

export default function AboutPage() {
  return (
    <main className="relative w-full min-h-dvh grid grid-rows-[auto_1fr] pb-0 md:pb-0">
      <NavBar />

      <section className="min-h-[calc(100dvh-68px)] md:min-h-0 flex items-center md:items-center mt-0 md:-mt-[36px]">
        <div className="w-full max-w-[1200px] mx-auto px-6 relative">
          <div className="relative z-10">
            <WindowCard maxWidthClass="max-w-card" contentClassName="py-5 md:py-6 px-5 sm:px-8 md:px-10 lg:px-12 h-[clamp(340px,64vh,460px)] flex items-center">
              <HeroText />
            </WindowCard>
          </div>
        </div>
      </section>
    </main>
  );
}



