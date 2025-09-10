'use client';

import { usePathname } from 'next/navigation';

export default function TopRadialOverlay() {
  const pathname = usePathname();

  if (pathname === '/projects') {
    return <div className="top-radial-overlay top-radial-overlay--projects z-40" />;
  }

  return <div className="top-radial-overlay z-40" />;
}


