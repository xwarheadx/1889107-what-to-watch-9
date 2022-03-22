import { Films, SelectedFilm } from '../types/films';

export const films: Films = [
  {
    id: '1',
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    src: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  },
  {
    id: '2',
    name: 'Bohemian Rhapsody',
    src: 'img/bohemian-rhapsody.jpg',
  },
  {
    id: '3',
    name: 'Macbeth',
    src: 'img/macbeth.jpg',
  },
  {
    id: '4',
    name: 'Aviator',
    src: 'img/aviator.jpg',
  },{
    id: '5',
    name: 'We need to talk about Kevin',
    src: 'img/we-need-to-talk-about-kevin.jpg',
  },{
    id: '6',
    name: 'What We Do in the Shadows',
    src: 'img/what-we-do-in-the-shadows.jpg',
  },
  {
    id: '7',
    name: 'Revenant',
    src: 'img/revenant.jpg',
  },
  {
    id: '8',
    name: 'Johnny English',
    src: 'img/johnny-english.jpg',
  },
  {
    id: '9',
    name: 'Shutter Island',
    src: 'img/shutter-island.jpg',
  },
  {
    id: '10',
    name: 'Pulp Fiction',
    src: 'img/pulp-fiction.jpg',
  },
  {
    id: '11',
    name: 'No Country for Old Men',
    src: 'img/no-country-for-old-men.jpg',
  },
  {
    id: '12',
    name: 'Snatch',
    src: 'img/snatch.jpg',
  },
  {
    id: '13',
    name: 'Moonrise Kingdom',
    src: 'img/moonrise-kingdom.jpg',
  },
  {
    id: '14',
    name: 'Seven Years in Tibet',
    src: 'img/seven-years-in-tibet.jpg',
  },
  {
    id: '15',
    name: 'Midnight Special',
    src: 'img/midnight-special.jpg',
  },
  {
    id: '16',
    name: 'War of the Worlds',
    src: 'img/war-of-the-worlds.jpg',
  },
  {
    id: '17',
    name: 'Dardjeeling Limited',
    src: 'img/dardjeeling-limited.jpg',
  },
  {
    id: '18',
    name: 'Orlando',
    src: 'img/orlando.jpg',
  },
  {
    id: '19',
    name: 'Mindhunter',
    src: 'img/mindhunter.jpg',
  },
  {
    id: '20',
    name: 'Midnight Special',
    src: 'img/midnight-special.jpg',
  },
];

export const genres: string[] = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

export const selectedFilm: SelectedFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
  srcPoster: 'img/the-grand-budapest-hotel-poster.jpg',
};

export const video = 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4';
