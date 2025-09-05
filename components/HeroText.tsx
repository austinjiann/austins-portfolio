import PhotoCard from '@/components/PhotoCard';

export default function HeroText() {
  return (
    <div className="flex flex-col items-start gap-6">
      {/* Headline */}
      <div className="w-full">
        <h1 className="mx-auto w-full text-left text-balance text-hero-gradient leading-[1.06] md:leading-[1.05] lg:leading-[1.04] font-medium tracking-tightest2 max-w-[56ch] md:max-w-[52ch] lg:max-w-[48ch]"
          style={{ fontSize: 'clamp(34px, 6vw, 64px)' }}>
          I build cool things
          <br />
          and post on social media
        </h1>
      </div>

      {/* Description */}
      <div className="w-full pl-32 sm:pl-64 md:pl-96 lg:pl-128 relative">
        {/* Photo cards cluster positioned to the left of details */}
        <div className="absolute left-0 top-6 -translate-x-[22%] sm:-translate-x-[18%] md:-translate-x-[14%] lg:-translate-x-[12%] -translate-y-[clamp(6px,0.6vw,20px)] h-[240px] md:h-[280px] w-[380px] pointer-events-none">
          <PhotoCard
            src="/photos/photo1.jpg"
            alt="Photo 1"
            tilt="left"
            tiltStrength="strong"
            className="absolute left-[clamp(8px,2vw,24px)] bottom-[clamp(8px,1.4vw,18px)] w-[clamp(120px,14vw,180px)] h-[clamp(140px,16vw,220px)]"
          />
          <PhotoCard
            src="/photos/photo2.png"
            alt="Photo 2"
            tilt="right"
            tiltStrength="max"
            className="absolute left-[clamp(100px,10vw,190px)] top-[clamp(-250px,-14.5vw,-65px)] w-[clamp(120px,14vw,180px)] h-[clamp(140px,16vw,220px)]"
          />
        </div>
        <p className="text-left mt-2 text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] text-white font-semibold">
          cs @ university of waterloo
        </p>
        <p className="text-left mt-3 text-[14px] sm:text-[15px] md:text-[16px] text-[#8B8B8B]">
          cofounder @PlayCreate, swe @Go Place
        </p>
        <p className="text-left mt-3 text-[14px] sm:text-[15px] md:text-[16px] text-[#8B8B8B]">
          what I've done recently...
        </p>
        <p className="text-left mt-3 text-[14px] sm:text-[15px] md:text-[16px] text-[#8B8B8B]">
          • Building PlayCreate (4 million views)<br />
          • Won $1,500 at Hack the 6ix<br />
          • Won first place and $1,000 at Hack404
        </p>
      </div>
    </div>
  );
}

