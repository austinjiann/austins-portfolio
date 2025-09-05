import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

type SocialIconsProps = {
  className?: string;
};

export default function SocialIcons({ className }: SocialIconsProps) {
  const iconClass = 'size-6 md:size-6 lg:size-7 text-[#EDEDED]';
  const common = 'transition-opacity duration-150 hover:opacity-80';
  const stroke = 2;
  return (
    <div className={"flex items-start gap-4 md:gap-4 lg:gap-5 leading-none " + (className ?? '')}>
      <Link href="#" aria-label="GitHub" className={common}>
        <Github strokeWidth={stroke} className={iconClass} />
      </Link>
      <Link href="#" aria-label="Twitter" className={common}>
        <Twitter strokeWidth={stroke} className={iconClass} />
      </Link>
      <Link href="#" aria-label="LinkedIn" className={common}>
        <Linkedin strokeWidth={stroke} className={iconClass} />
      </Link>
      <Link href="#" aria-label="Mail" className={common}>
        <Mail strokeWidth={stroke} className={iconClass} />
      </Link>
    </div>
  );
}

