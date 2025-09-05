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
      'relative w-[140px] h-[180px] sm:w-[160px] sm:h-[200px] md:w-[180px] md:h-[220px] lg:w-[200px] lg:h-[240px]',
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
          sizes="(max-width: 768px) 160px, 200px"
        />
      </div>
    </div>
  );
}


