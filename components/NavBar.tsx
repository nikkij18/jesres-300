'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LINKS = [
  { label: 'invite',  href: '/' },
  { label: 'zine',    href: '/zine' },
  { label: 'gallery', href: '/gallery' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 60 || y < lastY);
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'center',
      gap: '3rem',
      padding: '1.1rem 0',
      transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'transform 0.35s ease',
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)',
    }}>
      {LINKS.map(({ label, href }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            style={{
              fontFamily: 'var(--font-typewriter), "Courier New", monospace',
              fontSize: 'clamp(9px, 0.8vw, 12px)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: isActive ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)',
              textDecoration: 'none',
              transition: 'color 0.2s',
              borderBottom: isActive ? '1px solid rgba(255,255,255,0.3)' : '1px solid transparent',
              paddingBottom: '2px',
            }}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
