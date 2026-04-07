'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabase';

const BASE = 'https://dylgawidxrgptktapsem.supabase.co/storage/v1/object/public/assets';
const FRAMES = [7, 6, 5, 4, 3, 2].map(n => `${BASE}/${n}.png`);
const VH_PER_FRAME = 15;
const TOTAL_SCROLL_VH = VH_PER_FRAME * FRAMES.length;

interface Invitation {
  Title: string;
  Body: string;
  Date: string;
  'Signed By': string;
}

const tw: React.CSSProperties = {
  fontFamily: 'var(--font-typewriter), "Courier New", monospace',
  color: '#2C2C2C',
};

const hw: React.CSSProperties = {
  fontFamily: 'var(--font-handwritten), cursive',
  color: '#2C2C2C',
};

export default function PaperUnravel() {
  const [frameIdx, setFrameIdx] = useState(0);
  const [showInvite, setShowInvite] = useState(false);
  const [invitation, setInvitation] = useState<Invitation | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [flipEnabled, setFlipEnabled] = useState(false);
  const [rsvpChecked, setRsvpChecked] = useState(false);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpNote, setRsvpNote] = useState('');
  const [saved, setSaved] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    FRAMES.forEach(src => { const img = new Image(); img.src = src; });
  }, []);

  useEffect(() => {
    const audio = new Audio('/papercrumpling2.wav');
    audio.preload = 'auto';
    audioRef.current = audio;

    // unlock audio on first user click
    const unlock = () => {
      audio.play().then(() => { audio.pause(); audio.currentTime = 0; }).catch(() => {});
      window.removeEventListener('click', unlock);
    };
    window.addEventListener('click', unlock);

    return () => {
      audio.pause();
      window.removeEventListener('click', unlock);
    };
  }, []);

  useEffect(() => {
    supabase
      .from('invitations')
      .select('*')
      .limit(1)
      .then(({ data, error }) => {
        console.log('supabase result:', JSON.stringify(data), 'error:', error?.message);
        const row = data?.[0];
        if (row) {
          const d = row as Record<string, string>;
          setInvitation({
            Title: d.Title || d.title || '',
            Body: d.Body || d.body || '',
            Date: d.Date || d.date || '',
            'Signed By': d['Signed By'] || d['signed_by'] || d['signed by'] || '',
          });
        } else {
          setInvitation({
            Title: "You're invited",
            Body: 'Join us for an evening together.',
            Date: new Date().toISOString(),
            'Signed By': 'the host',
          });
        }
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const { top, height } = container.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -top / (height - window.innerHeight)));
      const idx = Math.min(Math.floor(progress * FRAMES.length), FRAMES.length - 1);
      setFrameIdx(idx);
      setShowInvite(progress >= 1);

      // play audio while paper is unraveling
      const audio = audioRef.current;
      if (audio) {
        if (progress > 0 && progress < 1) {
          if (audio.paused) audio.play().catch(() => {});
        } else if (progress >= 1) {
          audio.pause();
          audio.currentTime = 0;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // enable flipping only after the invitation has been visible for 2 seconds
  useEffect(() => {
    if (showInvite) {
      const t = setTimeout(() => setFlipEnabled(true), 400);
      return () => clearTimeout(t);
    } else {
      setFlipEnabled(false);
      setFlipped(false);
    }
  }, [showInvite]);

  const handleRsvp = async () => {
    if (!rsvpChecked || !rsvpName.trim()) return;
    await supabase.from('rsvps').insert({ name: rsvpName.trim(), note: rsvpNote.trim() || null });
    setSaved(true);
  };

  return (
    <div
      ref={containerRef}
      className="bg-black"
      style={{ height: `${100 + TOTAL_SCROLL_VH}vh` }}
    >
      {/* SVG filter for hand-drawn look */}
      <svg id="rough-filter" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="rough">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-4">

        {/* ── SCROLL FRAMES ── */}
        <div
          className="relative"
          style={{
            height: '95vh',
            aspectRatio: '1080/1350',
            display: frameIdx === FRAMES.length - 1 ? 'none' : 'block',
          }}
        >
          {FRAMES.slice(0, -1).map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-contain"
              style={{ opacity: i === frameIdx ? 1 : 0 }}
              animate={i === 0 && frameIdx === 0 ? { rotate: [0, -4, 4, -2, 2, 0] } : { rotate: 0 }}
              transition={i === 0 && frameIdx === 0
                ? { duration: 4, repeat: Infinity, ease: 'easeInOut' }
                : { duration: 0.3 }}
            />
          ))}
        </div>

        {/* ── FINAL FRAME: flip card ── */}
        {frameIdx === FRAMES.length - 1 && (
          <div
            style={{
              display: 'table',
              perspective: '1400px',
            }}
            onMouseEnter={() => flipEnabled && setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
          >
            {/* flip inner */}
            <div
              style={{
                position: 'relative',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.75s cubic-bezier(0.4, 0.2, 0.2, 1)',
                transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* ── FRONT ── */}
              <div style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                <img
                  src={FRAMES[FRAMES.length - 1]}
                  alt="flat paper"
                  style={{ height: '100vh', width: 'auto', display: 'block' }}
                />

                {/* Doodles */}
                <img src={`${BASE}/Doodle1.png`} alt="" style={{ position: 'absolute', width: '18%', top: '25%', left: '20%', zIndex: 20 }} />
                <img src={`${BASE}/Doodle2.png`} alt="" style={{ position: 'absolute', width: '22%', top: '22%', left: '34%', zIndex: 21 }} />
                <img src={`${BASE}/Doodle3.png`} alt="" style={{ position: 'absolute', width: '18%', top: '23%', left: '53%', zIndex: 20 }} />
                <img src={`${BASE}/Doodle4.png`} alt="" style={{ position: 'absolute', width: '17%', top: '27%', left: '69%', zIndex: 20 }} />

                {/* Invitation text */}
                {invitation && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    style={{
                      position: 'absolute',
                      top: '43%',
                      left: '50%',
                      transform: 'translateX(-50%) rotate(-1deg)',
                      width: '70%',
                      color: '#2C2C2C',
                      fontFamily: 'var(--font-typewriter), "Courier New", monospace',
                      textAlign: 'center',
                      overflowWrap: 'break-word',
                      pointerEvents: 'none',
                    }}
                  >
                    <p style={{ fontSize: 'clamp(7px, 0.8vw, 12px)', letterSpacing: '0.18em', marginBottom: '0.8em', opacity: 0.4, textTransform: 'uppercase' }}>
                      {invitation.Date
                        ? new Date(invitation.Date.replace(' ', 'T')).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
                        : ''}
                    </p>
                    <p style={{ fontSize: 'clamp(14px, 2.2vw, 32px)', fontWeight: 'bold', marginBottom: '0.8em', lineHeight: 1.15 }}>
                      {invitation.Title}
                    </p>
                    <p style={{ fontSize: 'clamp(9px, 0.85vw, 14px)', marginBottom: '1.2em', opacity: 0.8, lineHeight: 1.8 }}>
                      {invitation.Body}
                    </p>
                    <p style={{ fontSize: 'clamp(7px, 0.8vw, 12px)', opacity: 0.45, fontStyle: 'italic' }}>
                      — {invitation['Signed By']}
                    </p>
                  </motion.div>
                )}

                {/* Flip prompt */}
                <AnimatePresence>
                  {showInvite && !flipped && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.4, 0.9, 0.4] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      style={{
                        position: 'absolute',
                        bottom: '6%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-handwritten), cursive',
                        fontSize: 'clamp(10px, 1.1vw, 16px)',
                        color: '#555',
                        letterSpacing: '0.05em',
                        zIndex: 30,
                      }}
                    >
                      flip over →
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              {/* ── BACK: same paper, RSVP side ── */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <img
                  src={FRAMES[FRAMES.length - 1]}
                  alt="paper back"
                  style={{ height: '100vh', width: 'auto', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingBottom: '8%',
                  boxSizing: 'border-box',
                  transform: 'scaleX(-1)',
                }}><div style={{ transform: 'scaleX(-1)', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '60%', display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 2vh, 28px)' }}>

                  {!saved ? (
                    <>
                      {/* header */}
                      <div>
                        <p style={{ ...tw, fontSize: 'clamp(18px, 2.2vw, 34px)', fontWeight: '700', transform: 'rotate(-1deg)', display: 'block', marginBottom: '0.2em', textAlign: 'center' }}>
                          RSVP
                        </p>
                        <p style={{ ...tw, fontSize: 'clamp(10px, 1vw, 15px)', opacity: 0.5, transform: 'rotate(-0.5deg)', textAlign: 'center' }}>
                          please return by Friday
                        </p>
                      </div>

                      {/* are you in? */}
                      {/* are you in? */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.7em', userSelect: 'none', position: 'relative' }}>
                        <div
                          onMouseDown={e => { e.stopPropagation(); setRsvpChecked(c => !c); }}
                          style={{
                            width: 'clamp(14px, 1.6vw, 24px)',
                            height: 'clamp(14px, 1.6vw, 24px)',
                            border: '2px solid #555',
                            borderRadius: '2px',
                            flexShrink: 0,
                            position: 'relative',
                            cursor: 'pointer',
                            WebkitTapHighlightColor: 'transparent',
                          }}
                        >
                          {rsvpChecked && (
                            <svg
                              viewBox="0 0 36 36"
                              pointerEvents="none"
                              style={{
                                position: 'absolute',
                                width: 'clamp(20px, 2vw, 30px)',
                                height: 'clamp(20px, 2vw, 30px)',
                                top: '25%',
                                left: '70%',
                                transform: 'translate(-50%, -50%)',
                                overflow: 'visible',
                                pointerEvents: 'none',
                              }}
                            >
                              <motion.path
                                d="M4,19 Q8,22 13,29 Q20,18 32,7"
                                fill="none"
                                stroke="#6A0136"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ filter: 'url(#rough)' }}
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.45, ease: 'easeOut' }}
                              />
                            </svg>
                          )}
                        </div>
                        <span
                          onMouseDown={e => { e.stopPropagation(); setRsvpChecked(c => !c); }}
                          style={{ ...tw, fontSize: 'clamp(11px, 1.1vw, 17px)', cursor: 'pointer' }}
                        >
                          yes, i&apos;ll be there
                        </span>
                      </div>

                      {/* name line */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5em' }}>
                        <span style={{ ...tw, fontSize: 'clamp(10px, 1vw, 15px)', opacity: 0.55, paddingBottom: '3px', whiteSpace: 'nowrap' }}>
                          signed,
                        </span>
                        <input
                          type="text"
                          value={rsvpName}
                          onChange={e => setRsvpName(e.target.value)}
                          onKeyDown={e => e.key === 'Enter' && handleRsvp()}
                          placeholder="sign here"
                          style={{
                            ...hw,
                            flex: 1,
                            background: 'transparent',
                            border: 'none',
                            borderBottom: '1.5px solid #888',
                            outline: 'none',
                            fontSize: 'clamp(10px, 1.1vw, 17px)',
                            paddingBottom: '2px',
                            caretColor: '#6A0136',
                          }}
                        />
                      </div>

                      {/* note line */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5em' }}>
                        <span style={{ ...tw, fontSize: 'clamp(8px, 0.85vw, 13px)', opacity: 0.55, paddingBottom: '3px', whiteSpace: 'nowrap' }}>
                          leave a note,
                        </span>
                        <input
                          type="text"
                          value={rsvpNote}
                          onChange={e => setRsvpNote(e.target.value)}
                          onKeyDown={e => e.key === 'Enter' && handleRsvp()}
                          placeholder="(optional)"
                          style={{
                            ...hw,
                            flex: 1,
                            background: 'transparent',
                            border: 'none',
                            borderBottom: '1.5px solid #888',
                            outline: 'none',
                            fontSize: 'clamp(10px, 1.1vw, 17px)',
                            paddingBottom: '2px',
                            caretColor: '#6A0136',
                          }}
                        />
                      </div>

                      {/* submit row */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{
                            fontFamily: 'var(--font-typewriter), monospace',
                            fontSize: 'clamp(8px, 0.8vw, 12px)',
                            color: '#aaa',
                            letterSpacing: '0.1em',
                          }}
                        >
                          hover off to go back
                        </span>
                        <button
                          onClick={handleRsvp}
                          disabled={!rsvpChecked || !rsvpName.trim()}
                          style={{
                            ...tw,
                            fontSize: 'clamp(11px, 1.2vw, 18px)',
                            color: rsvpChecked && rsvpName.trim() ? '#6A0136' : '#bbb',
                            background: 'transparent',
                            border: 'none',
                            cursor: rsvpChecked && rsvpName.trim() ? 'pointer' : 'default',
                            padding: 0,
                            transition: 'color 0.2s',
                          }}
                        >
                          send in →
                        </button>
                      </div>
                    </>
                  ) : (
                    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 2vh, 28px)', alignItems: 'center' }}>
                      <p style={{ ...hw, fontSize: 'clamp(16px, 2vw, 30px)', color: '#6A0136', transform: 'rotate(-1deg)', display: 'inline-block' }}>
                        see you there, {rsvpName}
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6em', alignItems: 'center' }}>
                        <p style={{ ...tw, fontSize: 'clamp(7px, 0.75vw, 11px)', opacity: 0.35, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                          in the meantime
                        </p>
                        <a href="/zine" style={{ ...hw, fontSize: 'clamp(10px, 1vw, 15px)', color: '#2C2C2C', opacity: 0.6, textDecoration: 'none', borderBottom: '1px solid rgba(44,44,44,0.3)', paddingBottom: '1px' }}>
                          read the zine →
                        </a>
                        <a href="/gallery" style={{ ...hw, fontSize: 'clamp(10px, 1vw, 15px)', color: '#2C2C2C', opacity: 0.6, textDecoration: 'none', borderBottom: '1px solid rgba(44,44,44,0.3)', paddingBottom: '1px' }}>
                          past dinners →
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── SCROLL PROMPT ── */}
        <AnimatePresence>
          {frameIdx === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="fixed bottom-8 left-0 right-0 text-center text-white/50 text-xs tracking-[0.25em] uppercase"
            >
              scroll to open
            </motion.p>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
