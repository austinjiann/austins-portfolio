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
      <Link href="https://github.com/austinjiann" aria-label="GitHub" className={common} target="_blank" rel="noopener noreferrer">
        <Github strokeWidth={stroke} className={iconClass} />
      </Link>
      <Link href="https://x.com/austinjian_" aria-label="Twitter" className={common} target="_blank" rel="noopener noreferrer">
        <Twitter strokeWidth={stroke} className={iconClass} />
      </Link>
      <Link href="https://www.linkedin.com/in/austin-jian" aria-label="LinkedIn" className={common} target="_blank" rel="noopener noreferrer">
        <Linkedin strokeWidth={stroke} className={iconClass} />
      </Link>
      <Link href="mailto:austin.jian@uwaterloo.ca" aria-label="Email" className={common} target="_blank" rel="noopener noreferrer">
        <Mail strokeWidth={stroke} className={iconClass} />
      </Link>
    </div>
  );
}

