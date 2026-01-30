export type Review = {
  id: number;
  rating: number;
  text: string;
  date: string;
  user: { avatar: string; name: string; };
  propertyId: number;
};
