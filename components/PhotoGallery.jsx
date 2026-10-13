'use client';

import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import { drivePhoto } from '@/lib/config';

export default function PhotoGallery({ photos }) {
  const filled = photos.filter((p) => p.id);

  if (filled.length === 0) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((p, i) => (
          <div
            key={i}
            className="aspect-square rounded-xl bg-gradient-to-br from-sakura/40 to-sky-200 flex items-center justify-center text-navy/50 font-anime"
          >
            {p.alt}
          </div>
        ))}
      </div>
    );
  }

  return (
    <LightGallery
      speed={500}
      download={false}
      plugins={[lgZoom, lgThumbnail]}
      elementClassNames="grid grid-cols-2 md:grid-cols-3 gap-4"
    >
      {filled.map((p, i) => (
        <a
          key={i}
          href={drivePhoto(p.id, 2000)}
          data-src={drivePhoto(p.id, 2000)}
          className="block overflow-hidden rounded-xl shadow-lg aspect-square"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={drivePhoto(p.id, 700)}
            alt={p.alt}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </a>
      ))}
    </LightGallery>
  );
}
