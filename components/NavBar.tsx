'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialIcons from '@/components/SocialIcons';
import { LayoutGroup, motion } from 'framer-motion';
const MDiv: any = motion.div;

const pills = [
  { label: 'About', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Writing', href: '/writing' },
];

export default function NavBar() {
  const pathname = usePathname();
  
  return (
    <header className="relative z-10 min-h-[68px] md:min-h-[72px]">
      <div className="w-full max-w-[1200px] mx-auto px-6 pt-4 md:pt-5 translate-x-[10px] md:translate-x-0">
        {/* Single-row layout on mobile to match desktop structure */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-3 md:gap-x-4">
          {/* Left: name + role */}
          <div className="min-w-0">
            <div className="text-[15px] md:text-[23px] lg:text-[24px] font-semibold text-[#EDEDED] leading-none whitespace-nowrap">
              Austin Jian
            </div>
            <div className="text-[9.5px] md:text-[12.5px] lg:text-[13px] text-[#A3A3A3] mt-1 leading-none whitespace-nowrap">
              Software Engineer
            </div>
          </div>

          {/* Center: pills */}
          <nav className="flex-1 flex justify-center">
            <div className="relative -mx-2 sm:mx-0 w-full max-w-[255px] md:max-w-[320px] px-2 sm:px-0">
              {/* Group container: rounded rectangle with subtle border and backdrop */}
              <div className="mx-auto w-full max-w-[255px] md:max-w-[320px] rounded-full bg-black/10 backdrop-blur-[2px] ring-1 ring-white/25">
                <div className="relative flex justify-center gap-1.5 px-1.5 py-1.5 overflow-x-auto scrollbar-none">
                  <LayoutGroup id="navbar">
                    {pills.map((pill) => {
                      const isActive = pathname === pill.href;
                      return (
                        <Link
                          key={pill.label}
                          href={pill.href}
                          className={[
                            'px-3 md:px-5 h-8 md:h-10 rounded-full text-[11.5px] md:text-[14px] transition-colors relative z-[1] flex items-center justify-center',
                            isActive
                              ? 'text-[#F0F0F0]'
                              : 'text-[#D8D8D8] hover:text-white',
                          ].join(' ')}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          {isActive && (
                            <MDiv
                              layoutId="nav-active-pill"
                              transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                              className="absolute inset-0 rounded-full bg-black/10 ring-1 ring-white/25"
                            />
                          )}
                          <span className="relative z-10">{pill.label}</span>
                        </Link>
                      );
                    })}
                  </LayoutGroup>
                </div>
              </div>
            </div>
          </nav>

          {/* Right: social icons */}
          <div className="hidden md:block shrink-0 relative top-[clamp(2px,0.5vw,14px)] justify-self-end">
            <SocialIcons />
          </div>
        </div>
      </div>
    </header>
  );
}

