import { driveEmbed, driveOpen } from '@/lib/config';

// Streams straight from Google Drive's own player — works for very large
// files (like a 2.5 GB message video) without hosting anything yourself.
export default function DriveVideo({ id, title, blurb }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-xl">
      <div className="aspect-video overflow-hidden rounded-xl bg-navy">
        {id ? (
          <iframe
            src={driveEmbed(id)}
            title={title}
            loading="lazy"
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
            className="h-full w-full border-0"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-white/60 font-anime">
            Add the Drive ID for “{title}”
          </div>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-anime text-lg">{title}</h3>
          {blurb && <p className="text-sm text-navy/70">{blurb}</p>}
        </div>
        {id && (
          <a
            href={driveOpen(id)}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 text-xs underline text-navy/60 hover:text-navy"
          >
            Open in Drive
          </a>
        )}
      </div>
    </div>
  );
}
