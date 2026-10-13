// =====================================================================
//  EDIT THIS FILE ONLY — everything on the site comes from here.
//
//  Google Drive: upload each photo/video, set sharing to
//  "Anyone with the link → Viewer", then copy the file ID from the link:
//  https://drive.google.com/file/d/THIS_PART_IS_THE_ID/view
// =====================================================================

export const SITE = {
  name: 'Your Loved One', // her name
  sender: 'Your Name', // "Regards, ..."
  birthDate: '2006-08-14T00:00:00', // used by the live age counter
  title: 'Happy Birthday!',
};

// Hero background (optional). Leave '' for a soft gradient.
export const HERO_BG_PHOTO_ID = '';

export const MESSAGE = [
  'Wish you a very Happy Birthday {name}! May god fulfil all your wishes, you have an endless supply of happy days and your dreams turn into reality, a life surrounded with pets and a life that will become a manga.',
  'Thank you for always being so kind and the reason behind everyone’s smile. Always connected to your roots, a true friend to everyone. Always be yourself, that’s your vibe. We are all very lucky — we are not in the city of gems, still we found a real gem.',
];

export const STORY = [
  { title: 'Our first Meeting', text: 'We met first time in front of Udaipur Railway Station, jaha mai tere wait kar raha or tune bhot late kar diya tha. mai sochra soch raha tha ki shayad ye nahi ayegi milne or mai wapas jaane ke liye train dekhne lag gaya tha😹' },
  { title: 'Our first Date', text: 'It was a E-chai date, jab tune 3-4 din mujhe baate nahi kari thi or fir maine socha shayad tu mujhe naraj ho gayi, then i asked for E-chai date. you were looking pretty in that purple dress😍 you were seating Mamisa cafe and i was in tealogy Gwalior😹' },
];

// Hall of Fame (6 cards, horizontal scroller)
export const HALL_OF_FAME = [
  { id: '1bkwsJuDHMSmf31nEKVdg6i4Li-sUGbEK', caption: 'ओह माय गॉड, लाना डेल रे' },
  { id: '1M4N-fGp076-RV0JKEBfUP0HoXHwVgsxy', caption: 'soti bassi' },
  { id: '17D5fAcIfxqB6i026yRRAfHBrB2LAoz9l', caption: 'ghumi ghumi with family' },
  { id: '1o_RCSUH6CG8qXtaN4C3v-wFRIMi_KFlW', caption: 'gym ke baad wala pump sssrrrrppppp😋' },
  { id: '1tGy39wBLcoGBizR-lunn-WSGrwjqU45e', caption: 'you and chumpu😚' },
  { id: '1C6XMHCQ-ZAtAtCnZbdABFseakCdsJ80-', caption: 'form bharwane ke liye ready aspirant' },
  { id: '11SIRNWljbcYE-7Ysq5S8hqyr6Lz2UypJ', caption: 'gotakdi shoni' },
  { id: '1Gk1EIMiKWrDackoNU4RG3T1wK84BDjqV', caption: 'garba gurl🤌🏻' },
  { id: '1I4ROgZ5Sz-fs0N9qhQVyIrRneJOOlIge', caption: 'udaipur days🛺' },
  { id: '1qI3jY3Jy7f_fZpxPqZdkQI9AKcMO40xG', caption: 'my fav🫶🏻' },
];

// Memories → photo gallery (add as many as you like)
export const MEMORY_PHOTOS = [
  { id: '', alt: 'Memory 1' },
  { id: '', alt: 'Memory 2' },
  { id: '', alt: 'Memory 3' },
  { id: '', alt: 'Memory 4' },
  { id: '', alt: 'Memory 5' },
  { id: '', alt: 'Memory 6' },
];

// Memories → the 3 videos (Drive file IDs)
export const MEMORY_VIDEOS = [
  { id: '1NtM1eXht40gLGKhhOOi8fzzvX2Kd8Oyu', title: 'Birthday Wish', blurb: 'download karke dekhna, accha dikhega.' },
  { id: '1uyWhIyRKeglZf--p9fNQTHfqf-aUCVr2', title: 'Clips of You', blurb: 'download karle!' },
  { id: '1FzaU8ZY54C1hF8_J_8xkzy-mUGrOVpUe', title: 'A Message For You', blurb: 'Download kiya kya?' },
];

export const FOOTER = {
  line1: 'Enjoy your day to the fullest.',
  line2: 'Hope you liked it...',
};

// ---- Drive helpers -------------------------------------------------
export const drivePhoto = (id, width = 1600) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;

export const driveEmbed = (id) => `https://drive.google.com/file/d/${id}/preview`;

export const driveOpen = (id) => `https://drive.google.com/file/d/${id}/view`;

