import PhotoCard from '@/components/PhotoCard';

// Edit these placeholders with your real links
const LINKS = {
  waterloo: 'https://uwaterloo.ca/',
  playcreate: 'https://tryplaycreate.com/',
  goplace: 'https://www.goplace.com/',
  hackThe6ix: 'https://hackthe6ix.com/',
  hack404: 'https://hack404.dev/',
};

export default function HeroText() {
  return (
    <div className="flex flex-col items-start gap-6">
      {/* Headline */}
      <div className="w-full">
        <h1 className="mx-auto w-full text-left text-balance bg-gradient-to-br from-white via-[#D9D9D9] to-[#A7A7A7] bg-clip-text text-transparent leading-[1.06] md:leading-[1.05] lg:leading-[1.04] font-medium tracking-tightest2 max-w-[56ch] md:max-w-[52ch] lg:max-w-[48ch]"
          style={{ fontSize: 'clamp(34px, 6vw, 64px)' }}>
          I build cool things
          <br />
          and post on social media
        </h1>
      </div>

      {/* Description */}
      <div className="w-full pl-32 sm:pl-64 md:pl-96 lg:pl-128 relative">
        {/* Photo cards cluster positioned to the left of details */}
        <div className="absolute left-0 top-6 -translate-x-[22%] sm:-translate-x-[18%] md:-translate-x-[14%] lg:-translate-x-[12%] xl:-translate-x-[10%] 2xl:-translate-x-[8%] translate-y-[2px] sm:translate-y-[6px] md:translate-y-[10px] lg:translate-y-[14px] xl:translate-y-[18px] h-[240px] md:h-[280px] w-[380px] pointer-events-none">
          {/* Base (1920x1080) and MacBook 14" tuned positions via clamp + responsive tweaks */}
          <PhotoCard
            src="/photos/photo1.jpg"
            alt="Photo 1"
            tilt="left"
            tiltStrength="strong"
            className="absolute xl:translate-x-[10px] xl:-translate-y-[4px]"
            style={{
              left: 'clamp(12px, 2.3vw, 28px)',
              bottom: 'clamp(16px, 2vw, 28px)',
              width: 'clamp(118px, 12.8vw, 170px)',
              height: 'clamp(138px, 14.8vw, 210px)',
            }}
          />
          <PhotoCard
            src="/photos/photo2.png"
            alt="Photo 2"
            tilt="right"
            tiltStrength="max"
            className="absolute xl:translate-x-[12px] xl:-translate-y-[22px] 2xl:-translate-x-[16px] 2xl:translate-y-[10px]"
            style={{
              left: 'clamp(120px, 11.4vw, 206px)',
              top: 'clamp(-230px, -13.2vw, -58px)',
              width: 'clamp(120px, 13.8vw, 178px)',
              height: 'clamp(140px, 15.8vw, 218px)',
            }}
          />
        </div>
        <p className="text-left mt-2 text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] text-white font-semibold">
          cs @ <a href={LINKS.waterloo} target="_blank" rel="noopener noreferrer" className="link-underline">university of waterloo</a>
        </p>
        <p className="text-left mt-3 text-[14px] sm:text-[15px] md:text-[16px] text-[#8B8B8B]">
          cofounder @<a href={LINKS.playcreate} target="_blank" rel="noopener noreferrer" className="link-underline">PlayCreate</a>, swe @<a href={LINKS.goplace} target="_blank" rel="noopener noreferrer" className="link-underline">Go Place</a>
        </p>
        <p className="text-left mt-3 text-[14px] sm:text-[15px] md:text-[16px] text-[#8B8B8B]">
          what I've done recently...
        </p>
        <p className="text-left mt-3 text-[14px] sm:text-[15px] md:text-[16px] text-[#8B8B8B]">
          • Building <a href={LINKS.playcreate} target="_blank" rel="noopener noreferrer" className="link-underline">PlayCreate</a> (4 million views)<br />
          • Won $1,500 at <a href={LINKS.hackThe6ix} target="_blank" rel="noopener noreferrer" className="link-underline">Hack the 6ix</a><br />
          • Won first place and $1,000 at <a href={LINKS.hack404} target="_blank" rel="noopener noreferrer" className="link-underline">Hack404</a>
        </p>
      </div>
    </div>
  );
}

