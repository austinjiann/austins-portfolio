"use client";
import { PropsWithChildren, useEffect, useRef } from 'react';

type WindowCardProps = PropsWithChildren<{
  className?: string;
}>;

export default function WindowCard({ className, children }: WindowCardProps) {
  // Prevent repeated triggers by applying a cooldown after each animation
  const isOnCooldownRef = useRef(false);
  const cooldownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (cooldownTimeoutRef.current) {
        clearTimeout(cooldownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-card">
      {/* Thin backdrop behind the window card */}
      <div
        className="pointer-events-none absolute -inset-[6px] rounded-[28px] bg-[#35383D] backdrop-blur-[1px] -z-10"
        style={{ boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.10) inset' }}
      />

      <div
        onMouseEnter={(e) => {
          const shine = e.currentTarget.querySelector('.windowcard-shine') as HTMLElement | null;
          if (!shine) return;
          // Block while animating or during cooldown window
          if (shine.classList.contains('is-animating') || isOnCooldownRef.current) return;
          // Start animation and immediately set cooldown; it will be released 5s after animation ends
          shine.classList.add('is-animating');
          isOnCooldownRef.current = true;
        }}
        className={[
          'relative rounded-3xl shadow-hero-outer overflow-hidden',
          // Background surface
          'bg-gradient-to-b from-[#0E0F10] to-[#121314]',
          className ?? '',
        ].join(' ')}
      >
      {/* Sweep shine animation overlay (triggered on hover) */}
      <div
        className="windowcard-shine z-20 rounded-[40px]"
        onAnimationEnd={(e) => {
          e.currentTarget.classList.remove('is-animating');
          if (cooldownTimeoutRef.current) {
            clearTimeout(cooldownTimeoutRef.current);
          }
          cooldownTimeoutRef.current = setTimeout(() => {
            isOnCooldownRef.current = false;
          }, 5000);
        }}
      />
      {/* Fading outer white outline (stronger at top, fades towards bottom) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl z-30"
        style={{
          border: '2px solid rgba(255,255,255,1)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 55%, rgba(0,0,0,0.25) 80%, rgba(0,0,0,0) 100%)',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 55%, rgba(0,0,0,0.25) 80%, rgba(0,0,0,0) 100%)',
        }}
      />
      {/* Card-only top radial overlay (under content, clipped to radius) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0"
        style={{
          height: 'clamp(20px, 4vw, 38px)',
          background:
            [
              // Brighter silver center with slightly brighter silver edges
              'linear-gradient(90deg, rgba(98,98,98,0.62) 0%, rgba(122,122,122,0.48) 16%, rgba(212,212,212,0.80) 50%, rgba(122,122,122,0.48) 84%, rgba(98,98,98,0.62) 100%)',
              'radial-gradient(600px 240px at 50% 0%, rgba(200,200,200,0.18) 0%, rgba(185,185,185,0.10) 42%, rgba(0,0,0,0.0) 70%)',
              'linear-gradient(to bottom, rgba(185,185,185,0.22), rgba(0,0,0,0.0) 56%)',
            ].join(', '),
          mixBlendMode: 'normal',
          opacity: 0.88,
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 96%, rgba(0,0,0,0) 100%)',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 96%, rgba(0,0,0,0) 100%)',
        }}
      />
      {/* Slim title bar with traffic lights */}
      <div className="relative z-10 px-4 pt-4">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#FF5F57' }} />
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#FEBC2E' }} />
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#28C840' }} />
        </div>
      </div>

      {/* Inner bezel line */}
      <div className="relative z-10 mt-3 mx-0 border-t border-white/12 rounded-none" />

        {/* Content */}
        <div className="relative z-10 pt-8 pb-10 px-6 sm:px-8 md:px-10 lg:px-12 min-h-[360px] md:min-h-[420px] lg:min-h-[460px]">
          {children}
        </div>
      </div>
    </div>
  );
}

