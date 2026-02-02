import type { Offer } from '../types/types';

const offersNearby: Offer[] = [
  {
    id: 1,
    price: 80,
    rating: 4,
    title: 'Wood and stone place',
    isPremium: true,
    isFavorite: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 1
    },
    previewImage: '/img/room.jpg',
    type: 'room',
    city: {
      name: 'Amsterdam'
    }
  },
  {
    id: 2,
    price: 132,
    rating: 4,
    title: 'Canal View Prinsengracht',
    isPremium: false,
    isFavorite: false,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 1
    },
    previewImage: '/img/apartment-02.jpg',
    type: 'room',
    city: {
      name: 'Paris'
    }
  },

  {
    id: 3,
    price: 180,
    rating: 5.0,
    title: 'Nice, cozy, warm big bed apartment',
    isPremium: true,
    isFavorite: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 1
    },
    previewImage: '/img/apartment-03.jpg',
    type: 'room',
    city: {
      name: 'Paris'
    }
  },
];

export default offersNearby;
