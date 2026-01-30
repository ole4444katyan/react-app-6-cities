import { useState } from 'react';

import Card from './card';
import type { Offer } from '../mocks/offer';

type CardListProps = {
  offers: Offer[];
};

const CardList = ({ offers }: CardListProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleMouseMove = (id: number) => {
    setActiveCard(id);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          {...offer}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default CardList;
