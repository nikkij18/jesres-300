import ZineMagazine from '@/components/ZineMagazine';
import Link from 'next/link';

export default function ZinePage() {
  return (
    <>
      <ZineMagazine />
      <div style={{ background: '#000', textAlign: 'center', paddingBottom: '5rem' }}>
        <Link href="/gallery" style={{
          fontFamily: 'var(--font-handwritten), cursive',
          fontSize: 'clamp(12px, 1.1vw, 17px)',
          color: 'rgba(255,255,255,0.3)',
          textDecoration: 'none',
          letterSpacing: '0.04em',
          borderBottom: '1px solid rgba(255,255,255,0.15)',
          paddingBottom: '2px',
        }}>
          see past dinners →
        </Link>
      </div>
    </>
  );
}
