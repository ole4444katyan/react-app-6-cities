import type { Review } from '../types/types';

const reviews: Review[] = [
  {
    id: 1,
    rating: 4.0,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-08',
    user: {
      id: 1,
      name: 'Max',
      avatarUrl: '/img/avatar-max.jpg',
      isPro: false,
    },
    offerId: 1,
  },
  {
    id: 2,
    rating: 5.0,
    text: '2A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2022-01',
    user: {
      id: 2,
      name: 'Angelina',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: false,
    },
    offerId: 3,
  },
  {
    id: 3,
    rating: 3.0,
    text: '3A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2009-12',
    user: {
      id: 3,
      name: 'Bill',
      avatarUrl: '',
      isPro: true,
    },
    offerId: 1,
  },

];

export default reviews;
