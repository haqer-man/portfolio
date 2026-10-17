//photos: id, file location, map location (optional), width, height, alt text, rating (yours), view count (for popularity later), date added
export type Photo = {
  id: number,
  base_path: string,
  geolocation?: number, // TODO: make more specific
  width: number,
  height: number,
  alt_text?: string,
  rating?: number,
  view_count?: number,
  date_added: number,
}

export const photos: Photo[] = [
  {
    id: 1,
    base_path: '/watermelon.jpg',
    width: 612,
    height: 447,
    alt_text: "watermelon man",
    rating: 5,
    view_count: 0,
    date_added: Date.now()
  },
  {
    id: 2,
    base_path: '/man.webp',
    width: 744,
    height: 900,
    alt_text: "man",
    rating: 3,
    view_count: 0,
    date_added: Date.now()
  },
  {
    id: 3,
    base_path: '/man-thumbs-up.webp',
    width: 800,
    height: 534,
    alt_text: "man",
    rating: 3,
    view_count: 0,
    date_added: Date.now()
  },
  {
    id: 4,
    base_path: '/woman.jpg',
    width: 612,
    height: 408,
    alt_text: "woman",
    rating: 3,
    view_count: 0,
    date_added: Date.now()
  },
  {
    id: 5,
    base_path: '/girl-picture-frame.jpg',
    width: 675,
    height: 675,
    alt_text: "girl making picture frame with fingers",
    rating: 3,
    view_count: 0,
    date_added: Date.now()
  },
  {
    id: 6,
    base_path: '/hot-air-balloon.jpeg',
    width: 627,
    height: 350,
    rating: 3,
    view_count: 0,
    date_added: Date.now()
  },
  {
    id: 7,
    base_path: '/cat.jpg',
    width: 700,
    height: 860,
    rating: 3,
    view_count: 0,
    date_added: Date.now()
  },
  {
    id: 8,
    base_path: '/underwater-nun.jpeg',
    width: 660,
    height: 985,
    rating: 3,
    view_count: 0,
    date_added: Date.now()
  },
  {
    id: 9,
    base_path: '/young-woman.avif',
    width: 500,
    height: 750,
    rating: 3,
    view_count: 0,
    date_added: Date.now()
  },
  {
    id: 10,
    base_path: '/flying-whale.jpg',
    width: 750,
    height: 500,
    rating: 3,
    view_count: 0,
    date_added: Date.now()
  },
  {
    id: 11,
    base_path: '/yippee.webp',
    width: 600,
    height: 900,
    rating: 3,
    view_count: 0,
    date_added: Date.now()
  },
  {
    id: 12,
    base_path: '/cultist.avif',
    width: 3_000,
    height: 4_500,
    rating: 3,
    view_count: 0,
    date_added: Date.now()
  },
  {
    id: 13,
    base_path: '/photo-dog.jpg',
    width: 1_024,
    height: 683,
    rating: 3,
    view_count: 0,
    date_added: Date.now()
  },
  {
    id: 14,
    base_path: '/nerd-baby.jpeg',
    width: 2_000,
    height: 1_335,
    rating: 3,
    view_count: 0,
    date_added: Date.now()
  },
  {
    id: 15,
    base_path: 'square-grandma.jpg',
    width: 976,
    height: 549,
    rating: 3,
    view_count: 0,
    date_added: Date.now()
  },
]