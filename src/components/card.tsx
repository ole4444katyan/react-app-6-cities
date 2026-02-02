import { STARS_COUNT, MAX_PERCENT_STARS_WIDTH } from '../const/const';

import {Link} from 'react-router-dom';
import type { Offer, Location } from '../types/types';

type CardProps = Offer & {
  onMouseMove: (id: number, location: Location) => void;
  onMouseLeave: () => void;
  place?: 'cities' | 'favorites' | 'near-places';
};


function Card ({
  id,
  price,
  rating,
  title,
  isPremium,
  isFavorite,
  location,
  previewImage,
  type,
  onMouseMove,
  onMouseLeave,
  place = 'cities',
}: CardProps): JSX.Element {

  const handleMouseMove = () => {
    onMouseMove(id, location);
  };


  // eslint-disable-next-line no-console
  console.log(previewImage);

  return (
    <article
      className={`${place}__card place-card`}
      onMouseMove={handleMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${place}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Room interior" />
        </Link>
      </div>
      <div className={`${place}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(MAX_PERCENT_STARS_WIDTH * rating) / STARS_COUNT}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
