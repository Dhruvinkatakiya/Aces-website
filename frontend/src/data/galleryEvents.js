// Central place to configure event photo URLs

export const galleryEvents = [
  {
    slug: 'summer-internship-insights',
    title: 'Summer Internship Insights',
    urls: [
      'https://i.postimg.cc/G350zRMs/9328e735-5b4b-4702-9d53-5effb71d4671.jpg',
      'https://i.postimg.cc/GpQVDn8L/IMG-0703.avif',
      'https://i.postimg.cc/25mg3S6f/IMG-0716.avif',
      'https://i.postimg.cc/TPGBh3wP/IMG-1571.avif',
      'https://i.postimg.cc/bvTWnfDw/IMG-1574.avif',
      'https://i.postimg.cc/2yqKgqHy/IMG-1583.avif',
      'https://i.postimg.cc/nzSWdKG5/IMG-1595.avif',
      'https://i.postimg.cc/C5ZQ9Zv1/IMG-1604.avif',
      'https://i.postimg.cc/rsdP7dhK/IMG-1621.avif',
      'https://i.postimg.cc/m2HnwH1G/IMG-1625.avif',
      'https://i.postimg.cc/63qjG2xH/IMG-1630.avif',
      'https://i.postimg.cc/FHbBtXxM/IMG-1640.avif'
    ],
  },
  {
    slug: 'founder-s-playbook',
    title: "Founder's Playbook",
    urls: [
      'https://i.postimg.cc/L83ssYXm/FP-1.avif',
      'https://i.postimg.cc/wjQBByvd/IMG-0082-1.avif',
      'https://i.postimg.cc/qvTR0Xpj/IMG-0083-2.avif',
      'https://i.postimg.cc/qvTR0Xpm/IMG-0084-1.avif',
      'https://i.postimg.cc/L83ssYXX/IMG-0085-1.avif',
      'https://i.postimg.cc/nLVh9FjV/IMG-0089-1.avif',
      'https://i.postimg.cc/wMNqY3Pr/IMG-0093-1.avif',
      'https://i.postimg.cc/9MKmkyxx/IMG-0109-1.avif',
      'https://i.postimg.cc/0jSk1rF9/IMG-0117-1.avif'
    ],
  },
  {
    slug: 'insignia-innovators-assemble',
    title: 'Innovators Assemble',
    urls: [
      'https://i.postimg.cc/wxc2TQNv/IMG-8898.avif',
      'https://i.postimg.cc/Y2fRqzFG/IMG-8903.avif',
      'https://i.postimg.cc/zDS7XFhf/IMG-8925.avif'
    ],
  },
  {
    slug: 'insignia-infinity-code-quest',
    title: 'Infinity Code Quest',
    urls: [
      'https://i.postimg.cc/dVmw5XZT/IMG-8928.avif',
      'https://i.postimg.cc/52qbsGQV/IMG-8969.avif',
      'https://i.postimg.cc/dVmw5XkX/IMG-8972.avif',
      'https://i.postimg.cc/3rV8N2H8/IMG-8977.avif',
    ],
  },
  {
    slug: 'insignia-the-ultron-debate',
    title: 'The Ultron Debate',
    urls: [
      'https://i.postimg.cc/G2rrwnVG/IMG-2267.avif',
      'https://i.postimg.cc/XYR4LCgx/IMG-2279.avif'
    ],
  },
  {
    slug: 'insignia-marvel-tech-trivia',
    title: 'Marvel Tech Trivia',
    urls: [
      'https://i.postimg.cc/0jbBht51/IMG-9130.jpg',
      'https://i.postimg.cc/L8zbdgS9/IMG-9146.avif',
      'https://i.postimg.cc/DZYCQqrS/IMG-9155.avif'
    ],
  },
  {
    slug: 'insignia-escape-the-multiverse',
    title: 'Escape the Multiverse',
    urls: [
      'https://i.postimg.cc/mkv1yqzS/IMG-9041.jpg',
      'https://i.postimg.cc/wjcRDw6c/IMG-9095.avif',
      'https://i.postimg.cc/CxHnbcFx/IMG-9191.avif'
    ],
  },
  {
    slug: 'insignia-open-mic-jamming',
    title: 'Open Mic Jamming',
    urls: [
      'https://i.postimg.cc/fyfVnv8b/IMG-9205.avif'
    ],
  },
]

export const findGalleryEvent = (slug) => galleryEvents.find(e => e.slug === slug)


