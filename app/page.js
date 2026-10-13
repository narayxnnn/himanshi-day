import AgeCounter from '@/components/AgeCounter';
import SakuraCanvas from '@/components/SakuraCanvas';
import AosInit from '@/components/AosInit';
import HallOfFame from '@/components/HallOfFame';
import PhotoGallery from '@/components/PhotoGallery';
import DriveVideo from '@/components/DriveVideo';
import {
  SITE,
  HERO_BG_PHOTO_ID,
  MESSAGE,
  STORY,
  HALL_OF_FAME,
  MEMORY_PHOTOS,
  MEMORY_VIDEOS,
  FOOTER,
  drivePhoto,
} from '@/lib/config';

const fill = (s) => s.replaceAll('{name}', SITE.name);

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <AosInit />
      <SakuraCanvas />

      {/* ---------- Hero ---------- */}
      <section
        className="relative flex min-h-screen items-center justify-center bg-navy text-white"
        style={
          HERO_BG_PHOTO_ID
            ? {
                backgroundImage: `linear-gradient(rgba(44,62,80,.65), rgba(44,62,80,.65)), url(${drivePhoto(HERO_BG_PHOTO_ID, 2000)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : { backgroundImage: 'linear-gradient(135deg, #2c3e50 0%, #4a6fa5 60%, #ffb7c5 140%)' }
        }
      >
        <div className="relative z-10 px-6 text-center" data-aos="zoom-in">
          <h1 className="font-anime text-4xl md:text-7xl leading-tight">
            Happy Birthday, <span className="text-sakura">{"Himanshi Ameta"}</span>!
          </h1>
          <p className="mt-6 text-lg md:text-2xl">The niche Udaipur explorer</p>
          {/* <div className="mt-4">
            <AgeCounter birthDate={SITE.birthDate} />
          </div> */}
        </div>
      </section>

      {/* ---------- Special message ---------- */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="font-anime text-3xl md:text-4xl text-center mb-10" data-aos="fade-up">
          A Special Message For You
        </h2>
        <div className="rounded-3xl bg-white p-8 md:p-12 shadow-xl space-y-5 leading-relaxed" data-aos="fade-up">
          <p className="font-semibold">Dearest Himanshi</p>
          First of all, happy birthday! i hope you have a greate time ahead. or acche se maje karna. orrr mai kuch likhne ka try kar raha the par birthday ke baare mei nahi likha paaya uuuuuaaaaa uuuuuuuaaa😭😭😭 kuch to bhi likha hai shayad tujhe cringe lage its just my overthinking which i am gonna put here - 
          chhata hai mere pass, vo bhi samney hai, baarish shuru ho chuki hai,
          bhigne do mere baalon ko, bheegne do meri katthai rang ki kamiz ko 
          shayad baarish rukne par duppatta jhatakte huye bunde mujhe tumhare sath kisi chalchitra mei bhej de.

          aaughhh i am really surry babu for my behaviour😭😭😭.
          <p className="pt-2">
            this is me,
            <br />
            <span className="font-anime text-sakura">narayan!🌻</span>
          </p>
        </div>
      </section>

      {/* ---------- Story arc ---------- */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="font-anime text-3xl md:text-4xl text-center mb-14" data-aos="fade-up">
          Your Story Arc
        </h2>
        <ol className="relative border-l-4 border-sakura pl-8 space-y-12">
          {STORY.map((s, i) => (
            <li key={i} data-aos="fade-right">
              <span className="absolute -left-[14px] mt-1 h-6 w-6 rounded-full bg-sakura ring-4 ring-white" />
              <h3 className="font-anime text-xl md:text-2xl">{s.title}</h3>
              <p className="mt-2 text-navy/80">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- Hall of fame ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-anime text-3xl md:text-4xl text-center mb-10" data-aos="fade-up">
          Hall of Fame
        </h2>
        <HallOfFame items={HALL_OF_FAME} />
      </section>

      {/* ---------- Memories ---------- */}
      {/* <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-anime text-3xl md:text-4xl text-center" data-aos="fade-up">
          The Y.V.A. Collection
        </h2>
        <p className="mt-2 mb-12 text-center text-navy/70">(Your Very-own Adventures)</p>

        <div data-aos="fade-up">
          <PhotoGallery photos={MEMORY_PHOTOS} />
        </div>

        
      </section> */}
      <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {MEMORY_VIDEOS.map((v, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className={i === 2 ? 'lg:col-span-2 lg:mx-auto lg:w-3/4' : ''}
            >
              <DriveVideo {...v} />
            </div>
          ))}
        </div>
      {/* ---------- Footer ---------- */}
      <footer className="bg-navy py-16 text-center text-white">
        <h2 className="font-anime text-3xl md:text-4xl">
          Happy Birthday <span className="text-sakura">Himanshi</span>
        </h2>
        <p className="mt-4">{FOOTER.line1}</p>
        <p className="mt-1 text-white/70">{FOOTER.line2}</p>
      </footer>
    </main>
  );
}
