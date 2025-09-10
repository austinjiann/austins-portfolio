import PhotoCard from '@/components/PhotoCard';

// Edit these placeholders with your real links
const LINKS = {
  waterloo: 'https://uwaterloo.ca/',
  playcreate: 'https://tryplaycreate.com/',
  goplace: 'https://www.goplace.com/',
  hackThe6ix: 'https://hackthe6ix.com/',
  hack404: 'https://hack404.dev/',
  cyc: 'https://www.thecyc.org/',
  twitter: 'https://twitter.com/austinjian',
};

export default function HeroText() {
  return (
    <div className="flex flex-col items-start gap-5 md:gap-6">
      {/* Headline */}
      <div className="w-full">
        <h1 className="mx-auto w-full text-left text-balance bg-gradient-to-br from-white via-[#D9D9D9] to-[#A7A7A7] bg-clip-text text-transparent leading-[1.1] md:leading-[1.07] lg:leading-[1.06] font-medium tracking-tightest2 max-w-[48ch] md:max-w-[44ch] lg:max-w-[42ch]"
          style={{ fontSize: 'clamp(24px, 4.2vw, 54px)' }}>
          I build cool things
          <br />
          and post on social media
        </h1>
      </div>

      {/* Description */}
      <div className="w-full relative md:pl-[18rem] lg:pl-[22rem]">
        {/* Mobile photo cards: stacked inline variant */}
        <div className="md:hidden mb-4 flex items-end justify-center gap-2.5">
          <PhotoCard
            src="/photos/photo1.jpg"
            alt="Photo 1"
            tilt="left"
            tiltStrength="strong"
            style={{ width: 84, height: 110 }}
          />
          <PhotoCard
            src="/photos/photo2.png"
            alt="Photo 2"
            tilt="right"
            tiltStrength="max"
            style={{ width: 88, height: 118 }}
          />
        </div>
        {/* Photo cards cluster positioned to the left of details (hide on mobile) */}
        <div className="hidden md:block absolute left-0 top-2 -translate-x-[26%] sm:-translate-x-[22%] md:-translate-x-[18%] lg:-translate-x-[16%] xl:-translate-x-[14%] 2xl:-translate-x-[12%] translate-y-[2px] sm:translate-y-[6px] md:translate-y-[10px] lg:translate-y-[14px] xl:translate-y-[18px] h-[220px] md:h-[260px] w-[340px] pointer-events-none">
          {/* Base (1920x1080) and MacBook 14" tuned positions via clamp + responsive tweaks */}
          <PhotoCard
            src="/photos/photo1.jpg"
            alt="Photo 1"
            tilt="left"
            tiltStrength="strong"
            className="absolute xl:translate-x-[10px] xl:-translate-y-[4px]"
            style={{
              left: 'clamp(12px, 2vw, 26px)',
              bottom: 'clamp(12px, 1.8vw, 26px)',
              width: 'clamp(110px, 11.8vw, 160px)',
              height: 'clamp(130px, 13.6vw, 196px)',
            }}
          />
          <PhotoCard
            src="/photos/photo2.png"
            alt="Photo 2"
            tilt="right"
            tiltStrength="max"
            className="absolute xl:translate-x-[12px] xl:-translate-y-[22px] 2xl:-translate-x-[16px] 2xl:translate-y-[10px]"
            style={{
              left: 'clamp(110px, 10.6vw, 194px)',
              top: 'clamp(-214px, -12.4vw, -54px)',
              width: 'clamp(112px, 12.8vw, 168px)',
              height: 'clamp(130px, 14.6vw, 206px)',
            }}
          />
        </div>
        <p className="text-left mt-1.5 md:mt-2 text-[15px] sm:text-[17px] md:text-[20px] lg:text-[22px] text-white font-semibold">
          cs @ <a href={LINKS.waterloo} target="_blank" rel="noopener noreferrer" className="link-underline">university of waterloo</a>
        </p>
        <p className="text-left mt-3.5 md:mt-4 text-[12.5px] sm:text-[14px] md:text-[15px] text-[#8B8B8B]">
          cofounder @<a href={LINKS.playcreate} target="_blank" rel="noopener noreferrer" className="link-underline">PlayCreate</a>, swe @<a href={LINKS.goplace} target="_blank" rel="noopener noreferrer" className="link-underline">Go Place</a>
        </p>
        <p className="text-left mt-3.5 md:mt-4 text-[12.5px] sm:text-[14px] md:text-[15px] text-[#8B8B8B]">
          what I've done recently...
        </p>
        <p className="text-left mt-4 text-[13px] sm:text-[14px] md:text-[15px] text-[#8B8B8B]">
          • Building <a href={LINKS.playcreate} target="_blank" rel="noopener noreferrer" className="link-underline">PlayCreate</a> (4 million views)<br />
          • SWE @<a href={LINKS.cyc} target="_blank" rel="noopener noreferrer" className="link-underline">Canadian Youth Champions</a><br />
          • Won $1,500 at <a href={LINKS.hackThe6ix} target="_blank" rel="noopener noreferrer" className="link-underline">Hack the 6ix</a><br />
          • Won first place and $1,000 at <a href={LINKS.hack404} target="_blank" rel="noopener noreferrer" className="link-underline">Hack404</a><br />

        </p>
      </div>
    </div>
  );
}

