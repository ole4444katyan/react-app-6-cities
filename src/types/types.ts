import { CITIES } from '../const/const';

export type Offer = {
  id: number;
  price: number;
  rating: number;
  title: string;
  isPremium: boolean;
  isFavorite: boolean;
  location: Location;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  previewImage: string;
  city: {
    name: CityName;
  }
};

export type Review = {
  id: number;
  rating: number;
  text: string;
  date: string;
  user: User;
  offerId: number;
};

export type User = {
  id: number;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}


export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityName = typeof CITIES[number];

export type City = {
  name: CityName;
  location: Location;
};

export type Point = {
  name: string;
  lat: number;
  lng: number;
}
