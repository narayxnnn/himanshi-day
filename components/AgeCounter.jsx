'use client';

import { useEffect, useState } from 'react';

function diff(birth, now) {
  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();
  let hours = now.getHours() - birth.getHours();
  let minutes = now.getMinutes() - birth.getMinutes();
  let seconds = now.getSeconds() - birth.getSeconds();

  if (seconds < 0) { seconds += 60; minutes--; }
  if (minutes < 0) { minutes += 60; hours--; }
  if (hours < 0) { hours += 24; days--; }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) { months += 12; years--; }

  return { years, months, days, hours, minutes, seconds };
}

export default function AgeCounter({ birthDate }) {
  const [t, setT] = useState(null);

  useEffect(() => {
    const birth = new Date(birthDate);
    const tick = () => setT(diff(birth, new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [birthDate]);

  // Render nothing on the server to avoid a hydration mismatch
  if (!t) return <p className="h-14" aria-hidden />;

  return (
    <p className="font-anime text-xl md:text-2xl text-sakura leading-relaxed">
      {t.years}y {t.months}m {t.days}d
      <br />
      {t.hours}h {t.minutes}m {t.seconds}s
    </p>
  );
}
