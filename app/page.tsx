import NavBar from '@/components/NavBar';
import WindowCard from '@/components/WindowCard';
import HeroText from '@/components/HeroText';

export default function AboutPage() {
  return (
    <main className="w-full">
      <NavBar />

      <section className="mt-16 sm:mt-[56px] md:mt-[64px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <WindowCard>
            <HeroText />
          </WindowCard>
        </div>
      </section>
    </main>
  );
}


