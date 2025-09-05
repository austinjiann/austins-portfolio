import SocialIcons from '@/components/SocialIcons';

const pills = [
  { label: 'About', active: true },
  { label: 'Projects', active: false },
  { label: 'Writing', active: false },
];

export default function NavBar() {
  return (
    <header className="min-h-[72px]">
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
                <div className="flex justify-center gap-1.5 px-1.5 py-1.5 overflow-x-auto scrollbar-none">
                  {pills.map((pill) => (
                    <button
                      key={pill.label}
                      type="button"
                      className={[
                        'px-4 md:px-5 h-9 md:h-10 rounded-full text-[13.5px] md:text-[14px] transition-colors',
                        pill.active
                          ? 'bg-black/10 text-[#F0F0F0] ring-1 ring-white/25'
                          : 'bg-transparent text-[#D8D8D8] hover:text-white',
                      ].join(' ')}
                      aria-pressed={pill.active}
                    >
                      {pill.label}
                    </button>
                  ))}
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

