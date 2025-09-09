import Image from 'next/image';

type PhotoCardProps = {
  src: string;
  alt?: string;
  tilt?: 'left' | 'right' | 'none';
  tiltStrength?: 'default' | 'strong' | 'max';
  className?: string;
  style?: React.CSSProperties;
};

export default function PhotoCard({ src, alt = '', tilt = 'none', tiltStrength = 'default', className, style }: PhotoCardProps) {
  const rotateDefault = tilt === 'left' ? '-rotate-3' : tilt === 'right' ? 'rotate-3' : '';
  const rotateStrong = tilt === 'left' ? '-rotate-6' : tilt === 'right' ? 'rotate-6' : '';
  const rotateMax = tilt === 'left' ? '-rotate-12' : tilt === 'right' ? 'rotate-12' : '';
  const rotateClass = tiltStrength === 'max' ? rotateMax : tiltStrength === 'strong' ? rotateStrong : rotateDefault;
  return (
    <div className={[
      'relative w-[120px] h-[160px] sm:w-[140px] sm:h-[180px] md:w-[160px] md:h-[200px] lg:w-[176px] lg:h-[216px]',
      'rounded-xl overflow-hidden',
      rotateClass,
      className ?? '',
    ].join(' ')} style={style}>
      {/* Outer white stroke outline fading toward bottom to match window card */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl z-10"
        style={{
          border: '2px solid rgba(255,255,255,1)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 55%, rgba(0,0,0,0.25) 80%, rgba(0,0,0,0) 100%)',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 55%, rgba(0,0,0,0.25) 80%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* Backing and image */}
      <div className="absolute inset-0 rounded-xl bg-[#1F2123]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={false}
          className="object-cover"
          sizes="(max-width: 768px) 140px, 176px"
        />
      </div>
    </div>
  );
}


