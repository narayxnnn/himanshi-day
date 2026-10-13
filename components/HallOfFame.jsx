'use client';

import { useRef } from 'react';
import { drivePhoto } from '@/lib/config';

export default function HallOfFame({ items }) {
  const scroller = useRef(null);

  const scrollByCard = (dir) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector('.snap-center');
    const gap = parseInt(getComputedStyle(el).columnGap || getComputedStyle(el).gap || '24', 10) || 24;
    const step = (card ? card.offsetWidth : 300) + gap;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <button
        onClick={() => scrollByCard(-1)}
        aria-label="Scroll left"
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 h-12 w-12 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg hover:bg-sakura transition"
      >
        ‹
      </button>

      <div
        ref={scroller}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 py-6"
      >
        {items.map((item, i) => (
          <figure
            key={i}
            className="snap-center shrink-0 w-72 md:w-80 rounded-2xl bg-white shadow-xl overflow-hidden"
          >
            <div className="aspect-[3/4] bg-gradient-to-br from-sakura/40 to-sky-200">
              {item.id ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={drivePhoto(item.id, 900)}
                  alt={item.caption}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-navy/50 font-anime">
                  Photo {i + 1}
                </div>
              )}
            </div>
            <figcaption className="p-4 text-center font-medium">“{item.caption}”</figcaption>
          </figure>
        ))}
      </div>

      <button
        onClick={() => scrollByCard(1)}
        aria-label="Scroll right"
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 h-12 w-12 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg hover:bg-sakura transition"
      >
        ›
      </button>
    </div>
  );
}
