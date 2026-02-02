import { useState } from 'react';

import Card from './card';
import type { Offer, Location } from '../types/types';

type CardListProps = {
  offers: Offer[];
  onMouseHover: (location: Location | null) => void;
  place?: 'cities' | 'favorites' | 'near-places';
};

const CardList = ({ offers, onMouseHover, place = 'cities'}: CardListProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleMouseMove = (id: number, location: Location) => {
    setActiveCard(id);
    onMouseHover(location);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
    onMouseHover(null);
  };

  return (
    <div className={`${place}__list ${place === 'cities' ? 'tabs__content' : ''} places__list`}>


      {offers.map((offer) => (
        <Card
          key={offer.id}
          {...offer}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          place={place}
        />
      ))}
    </div>
  );
};

export default CardList;
