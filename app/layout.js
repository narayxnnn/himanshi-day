import { Poppins, Mochiy_Pop_One } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const anime = Mochiy_Pop_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anime',
});

export const metadata = {
  title: 'Happy Birthday!',
  description: 'A little birthday surprise',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${anime.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
