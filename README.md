# Birthday Site (Next.js)

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Customize

Everything lives in `lib/config.js`: her name, your name, the message, story parts,
photo captions and the Google Drive IDs for photos and the 3 videos.

## Google Drive setup

1. Upload each photo/video to Drive.
2. Right-click → Share → General access → **Anyone with the link** (Viewer).
3. Copy the file ID from the link: `https://drive.google.com/file/d/<ID>/view`
4. Paste it into `lib/config.js`.

Notes
- Videos play through Drive's embedded player, so the 2.5 GB message video works.
  After uploading, Drive needs a few minutes to process it before it plays.
- Photos load via Drive thumbnails (`drive.google.com/thumbnail?id=...`). If a photo
  doesn't show, double-check its sharing setting.
- Drive can rate-limit files that get a lot of traffic; for one person that's fine.
  If you ever need something sturdier, put the videos on YouTube (unlisted) or
  Cloudflare R2 and swap the embed URL in `components/DriveVideo.jsx`.

## Deploy

Push to GitHub and import into Vercel (free). No env vars needed.
