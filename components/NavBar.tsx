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
    <header className="relative z-10 min-h-[72px]">
      <div className="w-full max-w-[1200px] mx-auto px-6 pt-5">
        <div className="grid grid-cols-[auto_1fr_auto] items-start gap-4">
          {/* Left: name + role */}
          <div className="min-w-0">
            <div className="text-[22px] md:text-[23px] lg:text-[24px] font-semibold text-[#EDEDED] leading-none">
              Austin Jian
            </div>
            <div className="text-[12px] md:text-[12.5px] lg:text-[13px] text-[#A3A3A3] mt-1 leading-none">
              Software Engineer
            </div>
          </div>

          {/* Center: pills */}
          <nav className="flex-1 flex justify-center">
            <div className="relative -mx-3 sm:mx-0 w-full max-w-[300px] px-3 sm:px-0">
              {/* Group container: rounded rectangle with subtle border and backdrop */}
              <div className="mx-auto w-full max-w-[300px] rounded-full bg-black/10 backdrop-blur-[2px] ring-1 ring-white/25">
                <div className="relative flex justify-center gap-1.5 px-1.5 py-1.5 overflow-x-auto scrollbar-none">
                  <LayoutGroup id="navbar">
                    {pills.map((pill) => {
                      const isActive = pathname === pill.href;
                      return (
                        <Link
                          key={pill.label}
                          href={pill.href}
                          className={[
                            'px-4 md:px-5 h-9 md:h-10 rounded-full text-[13.5px] md:text-[14px] transition-colors relative z-[1] flex items-center justify-center',
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
          <div className="shrink-0 relative top-[clamp(2px,0.5vw,14px)]">
            <SocialIcons />
          </div>
        </div>
      </div>
    </header>
  );
}

