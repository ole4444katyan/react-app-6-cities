import type { Review } from './review';

const reviews: Review[] = [
  {
    id: 1,
    rating: 4.0,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-08',
    user: {
      avatar: '/img/avatar-max.jpg',
      name: 'Max',
    },
    propertyId: 1,
  },
  {
    id: 2,
    rating: 5.0,
    text: '2A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2022-01',
    user: {
      avatar: '/img/avatar-max.jpg',
      name: 'Bill',
    },
    propertyId: 1,
  },
  {
    id: 3,
    rating: 3.0,
    text: '3A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2009-12',
    user: {
      avatar: '/img/avatar-max.jpg',
      name: 'Evelyn',
    },
    propertyId: 1,
  },

];

export default reviews;
