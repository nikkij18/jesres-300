'use client';

import { useEffect, useRef, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Event {
  name: string;
  photos: string[];
}

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function PhotoCard({ src, index, onClick }: { src: string; index: number; onClick: () => void }) {
  const ref = useFadeIn();
  return (
    <div
      ref={ref}
      onClick={onClick}
      style={{
        opacity: 0,
        transform: 'translateY(12px)',
        transition: `opacity 0.6s ease ${(index % 6) * 80}ms, transform 0.6s ease ${(index % 6) * 80}ms`,
        cursor: 'pointer',
        borderRadius: '12px',
        overflow: 'hidden',
        breakInside: 'avoid',
        marginBottom: '8px',
        background: '#111',
      }}
    >
      <img
        src={src}
        alt=""
        style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.5s ease' }}
        onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
      />
    </div>
  );
}

export default function Gallery() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const activeEvent = events.find(e => e.name === active);
  const photos = activeEvent?.photos ?? [];

  useEffect(() => {
    async function load() {
      const { data: folders } = await supabase.storage.from('gallery').list('');
      if (!folders) { setLoading(false); return; }

      const eventFolders = folders.filter(f => f.id === null);

      const results = await Promise.all(
        eventFolders.map(async folder => {
          const { data: files } = await supabase.storage
            .from('gallery')
            .list(folder.name, { sortBy: { column: 'created_at', order: 'asc' } });

          const photos = (files ?? [])
            .filter(f => f.name !== '.emptyFolderPlaceholder')
            .map(f => supabase.storage.from('gallery').getPublicUrl(`${folder.name}/${f.name}`).data.publicUrl);

          return { name: folder.name, photos };
        })
      );

      const loaded = results
        .filter(e => e.photos.length > 0)
        .sort((a, b) => {
          if (a.name === 'Sunday Dinners') return -1;
          if (b.name === 'Sunday Dinners') return 1;
          return a.name.localeCompare(b.name);
        });
      setEvents(loaded);
      if (loaded.length > 0) setActive(loaded[0].name);
      setLoading(false);
    }
    load();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox(i => i !== null ? (i + 1) % photos.length : null);
      if (e.key === 'ArrowLeft') setLightbox(i => i !== null ? (i - 1 + photos.length) % photos.length : null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, photos.length]);

  return (
    <div style={{ background: '#0a0a0a', padding: '6rem 4rem 8rem' }}>


      {/* Event tabs */}
      {events.length > 0 && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '3rem',
          maxWidth: '1100px',
          margin: '0 auto 3rem',
        }}>
          {events.map(event => {
            const isActive = event.name === active;
            return (
              <button
                key={event.name}
                onClick={() => { setActive(event.name); setLightbox(null); }}
                style={{
                  fontFamily: 'var(--font-handwritten), cursive',
                  fontSize: 'clamp(13px, 1.2vw, 18px)',
                  letterSpacing: '0.03em',
                  background: 'transparent',
                  color: isActive ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.25)',
                  border: 'none',
                  padding: '0.2rem 0.8rem',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                  textDecorationLine: isActive ? 'underline' : 'none',
                  textUnderlineOffset: '4px',
                  textDecorationColor: 'rgba(255,255,255,0.3)',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.25)'; }}
              >
                {event.name}
              </button>
            );
          })}
        </div>
      )}

      {loading && (
        <p style={{ textAlign: 'center', fontFamily: 'var(--font-typewriter), monospace', color: 'rgba(255,255,255,0.15)', fontSize: '11px', letterSpacing: '0.18em' }}>
          —
        </p>
      )}

      {!loading && events.length === 0 && (
        <p style={{ textAlign: 'center', fontFamily: 'var(--font-handwritten), cursive', color: 'rgba(255,255,255,0.15)', fontSize: 'clamp(13px, 1.2vw, 18px)' }}>
          photos coming soon
        </p>
      )}

      {/* Photo grid */}
      {photos.length > 0 && (
        <div style={{ columns: '3 260px', columnGap: '8px', maxWidth: '1100px', margin: '0 auto' }}>
          {photos.map((src, i) => (
            <PhotoCard key={src} src={src} index={i} onClick={() => setLightbox(i)} />
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <button onClick={e => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length); }} style={navBtn}>←</button>
          <img
            src={photos[lightbox]}
            alt=""
            onClick={e => e.stopPropagation()}
            style={{ maxHeight: '88vh', maxWidth: '80vw', objectFit: 'contain', display: 'block', userSelect: 'none', borderRadius: '12px' }}
          />
          <button onClick={e => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length); }} style={navBtn}>→</button>
          <span style={{ position: 'absolute', bottom: '2rem', fontFamily: 'var(--font-typewriter), monospace', fontSize: '11px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.3)' }}>
            {lightbox + 1} / {photos.length}
          </span>
        </div>
      )}
    </div>
  );
}

const navBtn: React.CSSProperties = {
  background: 'transparent', border: 'none',
  color: 'rgba(255,255,255,0.45)', fontSize: '1.4rem',
  cursor: 'pointer', padding: '1rem 1.5rem',
  fontFamily: 'var(--font-handwritten), cursive',
};
