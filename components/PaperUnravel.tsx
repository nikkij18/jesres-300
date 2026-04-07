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

export default function PaperUnravel() {
  const [frameIdx, setFrameIdx] = useState(0);
  const [showInvite, setShowInvite] = useState(false);
  const [invitation, setInvitation] = useState<Invitation | null>(null);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpNote, setRsvpNote] = useState('');
  const [saved, setSaved] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // preload frames
  useEffect(() => {
    FRAMES.forEach(src => { const img = new Image(); img.src = src; });
  }, []);

  // fetch invitation from Supabase
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
            Title: 'You\'re invited',
            Body: 'Join us for an evening together.',
            Date: new Date().toISOString(),
            'Signed By': 'the host',
          });
        }
      });
  }, []);

  // scroll → frame
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
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleRsvp = () => {
    if (!rsvpName.trim()) return;
    setSaved(true);
  };

  return (
    <div
      ref={containerRef}
      className="bg-black"
      style={{ height: `${100 + TOTAL_SCROLL_VH}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-4">

        {/* ── SCROLL FRAMES (frames 0–4) ── */}
        <div className="relative" style={{ height: '70vh', aspectRatio: '1080/1350', display: frameIdx === FRAMES.length - 1 ? 'none' : 'block' }}>
          {FRAMES.slice(0, -1).map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-contain"
              style={{ opacity: i === frameIdx ? 1 : 0 }}
              animate={i === 0 && frameIdx === 0
                ? { rotate: [0, -4, 4, -2, 2, 0] }
                : { rotate: 0 }
              }
              transition={i === 0 && frameIdx === 0
                ? { duration: 4, repeat: Infinity, ease: 'easeInOut' }
                : { duration: 0.3 }
              }
            />
          ))}
        </div>

        {/* ── FINAL FRAME: paper + doodles + text, all one parent ── */}
        {frameIdx === FRAMES.length - 1 && (
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img
              src={FRAMES[FRAMES.length - 1]}
              alt="flat paper"
              style={{ height: '75vh', width: 'auto', display: 'block' }}
            />

            {/* Chef (Doodle2) — top center */}
            <img src={`${BASE}/Doodle2.png`} alt="" style={{ position: 'absolute', width: '16%', top: '14%', left: '50%', transform: 'translateX(-50%)', zIndex: 20 }} />
            {/* Bread legs (Doodle1) — top left */}
            <img src={`${BASE}/Doodle1.png`} alt="" style={{ position: 'absolute', width: '14%', top: '14%', left: '8%', zIndex: 20 }} />
            {/* Cloche (Doodle3) — top right */}
            <img src={`${BASE}/Doodle3.png`} alt="" style={{ position: 'absolute', width: '14%', top: '14%', right: '8%', zIndex: 20 }} />
            {/* Wine sipper (Doodle4) — bottom right */}
            <img src={`${BASE}/Doodle4.png`} alt="" style={{ position: 'absolute', width: '14%', bottom: '14%', right: '8%', zIndex: 20 }} />

            {/* text — absolute, relative to the same parent */}
            {invitation && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                style={{
                  position: 'absolute',
                  top: '38%',
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

        {/* ── RSVP ── */}
        <AnimatePresence>
          {showInvite && (
            <motion.div
              key="rsvp"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
              className="flex flex-col items-center text-center mt-5 w-full max-w-xs"
            >
              {!saved ? (
                <div className="space-y-3 w-full">
                  <p className="text-xs tracking-[0.15em] uppercase" style={{ color: '#666', fontFamily: 'Georgia, serif' }}>
                    save me a seat
                  </p>
                  <input
                    type="text"
                    placeholder="your name"
                    value={rsvpName}
                    onChange={e => setRsvpName(e.target.value)}
                    className="w-full border-b bg-transparent text-sm py-1.5 outline-none placeholder:text-white/20"
                    style={{ borderColor: '#444', color: '#e8e8d0', fontFamily: 'Georgia, serif' }}
                  />
                  <input
                    type="text"
                    placeholder="a note (optional)"
                    value={rsvpNote}
                    onChange={e => setRsvpNote(e.target.value)}
                    className="w-full border-b bg-transparent text-sm py-1.5 outline-none placeholder:text-white/20"
                    style={{ borderColor: '#444', color: '#e8e8d0', fontFamily: 'Georgia, serif' }}
                  />
                  <button
                    onClick={handleRsvp}
                    className="mt-2 text-sm tracking-widest uppercase py-2 px-6 transition-all hover:opacity-70"
                    style={{ color: 'white', backgroundColor: '#6A0136', fontFamily: 'Georgia, serif', letterSpacing: '0.15em' }}
                  >
                    I'll be there
                  </button>
                </div>
              ) : (
                <p className="text-sm italic" style={{ color: '#c8c8b8', fontFamily: 'Georgia, serif' }}>
                  see you there, {rsvpName}. ✦
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
