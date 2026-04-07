'use client';

import { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

const PAGES = [
  '/zine-1.png',
  '/zine-2.png',
  '/zine-3.png',
  '/zine-4.png',
  '/zine-5.png',
  '/zine-6.png',
];

const PAGE_COUNT = 4;

// Subtle stacked page edges — just enough to read as a physical object
function BookEdges({ rightOpacity, leftOpacity, topOpacity, flipping }: { rightOpacity: number; leftOpacity: number; topOpacity: number; flipping: boolean }) {
  const strips = Array.from({ length: PAGE_COUNT });
  const color = (i: number) => `rgba(195, 185, 172, ${0.55 - i * 0.1})`;
  // Hide instantly on flip start; re-appear only after the flip has fully settled
  const transition = flipping ? 'opacity 0ms' : 'opacity 200ms ease 400ms';

  return (
    <>
      {/* RIGHT fore-edge */}
      {strips.map((_, i) => (
        <div key={`r${i}`} aria-hidden style={{
          position: 'absolute',
          right: -(i + 1),
          top: 1 + i * 0.5,
          bottom: 1 + i * 0.5,
          width: '1px',
          background: color(i),
          opacity: rightOpacity,
          transition,
          pointerEvents: 'none',
          zIndex: 20,
        }} />
      ))}

      {/* LEFT fore-edge */}
      {strips.map((_, i) => (
        <div key={`l${i}`} aria-hidden style={{
          position: 'absolute',
          left: -(i + 1),
          top: 1 + i * 0.5,
          bottom: 1 + i * 0.5,
          width: '1px',
          background: color(i),
          opacity: leftOpacity,
          transition,
          pointerEvents: 'none',
          zIndex: 20,
        }} />
      ))}

      {/* TOP edge — fades toward center spine */}
      {strips.map((_, i) => (
        <div key={`t${i}`} aria-hidden style={{
          position: 'absolute',
          top: -(i + 1),
          left: 1 + i * 0.5,
          right: 1 + i * 0.5,
          height: '1px',
          background: `linear-gradient(to right, ${color(i)} 0%, rgba(195,185,172,0.1) 48%, transparent 50%, rgba(195,185,172,0.1) 52%, ${color(i)} 100%)`,
          opacity: topOpacity,
          transition,
          pointerEvents: 'none',
          zIndex: 20,
        }} />
      ))}
    </>
  );
}

// Even-indexed pages land on the RIGHT, odd-indexed on the LEFT.
// The spine edge of a right page is its LEFT side; for a left page, its RIGHT side.
function FoldOverlay({ index }: { index: number }) {
  const isRight = index % 2 === 0;
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        // Spine shadow: dark band along the inner edge, fading outward
        background: isRight
          ? 'linear-gradient(to right, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.08) 12%, transparent 35%)'
          : 'linear-gradient(to left,  rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.08) 12%, transparent 35%)',
      }}
    />
  );
}

export default function ZineMagazine() {
  const bookRef = useRef<any>(null);
  const [page, setPage] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [targetPage, setTargetPage] = useState(0);
  // Use targetPage during a flip so strips update at flip-start, not flip-end
  const activePage = flipping ? targetPage : page;
  const isCover = page === 0;
  const total = PAGES.length;

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center gap-6 py-16 px-4">

      {/* Wrapper so we can overlay the spine */}
      <div style={{ position: 'relative', display: 'inline-block', overflow: 'visible' }}>
        <BookEdges
          rightOpacity={!flipping && activePage < total - 1 ? 1 : 0}
          leftOpacity={!flipping && activePage > 0 ? 1 : 0}
          topOpacity={!flipping && activePage > 0 && activePage < total - 1 ? 1 : 0}
          flipping={flipping}
        />

        {/* @ts-ignore – react-pageflip types are loose */}
        <HTMLFlipBook
          ref={bookRef}
          width={420}
          height={560}
          size="fixed"
          drawShadow
          flippingTime={850}
          showCover
          usePortrait={false}
          className="shadow-2xl"
          onFlip={(e: any) => { setPage(e.data); setTargetPage(e.data); setFlipping(false); }}
          onChangeState={(e: any) => setFlipping(e.data === 'flipping' || e.data === 'user_fold')}
          style={{}}
          startPage={0}
          minWidth={200}
          maxWidth={600}
          minHeight={300}
          maxHeight={800}
          startZIndex={0}
          autoSize={false}
          clickEventForward
          useMouseEvents
          swipeDistance={30}
          showPageCorners
          disableFlipByClick={false}
          mobileScrollSupport
        >
          {PAGES.map((src, i) => (
            <div
              key={src}
              style={{ position: 'relative', width: '100%', height: '100%', background: '#111' }}
            >
              <img
                src={src}
                alt={`Zine page ${i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <FoldOverlay index={i} />
            </div>
          ))}
        </HTMLFlipBook>

        {/* Center spine — hidden on cover or while flipping */}
        {!isCover && !flipping && (
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '1px',
              pointerEvents: 'none',
              // Deep crease at center, soft glow each side
              background:
                'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.22) 50%, rgba(0,0,0,0.15) 70%, transparent 100%)',
              zIndex: 10,
            }}
          />
        )}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <button
          onClick={() => { setTargetPage(page === 1 ? 0 : Math.max(0, page - 2)); bookRef.current?.pageFlip().flipPrev(); }}
          style={{
            fontFamily: 'var(--font-handwritten), cursive',
            fontSize: 'clamp(12px, 1.2vw, 18px)',
            color: page === 0 ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.55)',
            background: 'transparent',
            border: 'none',
            cursor: page === 0 ? 'default' : 'pointer',
            letterSpacing: '0.05em',
          }}
          disabled={page === 0}
        >
          ← prev
        </button>

        <span
          style={{
            fontFamily: 'var(--font-typewriter), monospace',
            fontSize: 'clamp(9px, 0.8vw, 12px)',
            color: 'rgba(255,255,255,0.25)',
            letterSpacing: '0.15em',
          }}
        >
          {page + 1} / {total}
        </span>

        <button
          onClick={() => { setTargetPage(page === 0 ? 1 : Math.min(total - 1, page + 2)); bookRef.current?.pageFlip().flipNext(); }}
          style={{
            fontFamily: 'var(--font-handwritten), cursive',
            fontSize: 'clamp(12px, 1.2vw, 18px)',
            color: page >= total - 1 ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.55)',
            background: 'transparent',
            border: 'none',
            cursor: page >= total - 1 ? 'default' : 'pointer',
            letterSpacing: '0.05em',
          }}
          disabled={page >= total - 1}
        >
          next →
        </button>
      </div>
    </div>
  );
}
