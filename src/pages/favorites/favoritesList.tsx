import { STARS_COUNT, MAX_PERCENT_STARS_WIDTH } from '../../components/const';

import { Link } from 'react-router-dom';
import type { Offer } from '../../mocks/offer';

type FavoritesListProps = {
  offers: Offer[];
};

const FavoritesList = ({ offers }: FavoritesListProps): JSX.Element => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const cities = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));

  return (
    <ul className="favorites__list">
      {cities.map((city) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">

            {favoriteOffers.filter((offer) => offer.city.name === city)
              .map((offer) => (
                <article
                  key={offer.id} className="favorites__card place-card"
                >
                  {offer.isPremium && (
                    <div className="place-card__mark">
                      <span>Premium</span>
                    </div>
                  )}
                  <div className="favorites__image-wrapper place-card__image-wrapper">
                    <Link to={`/offer/${offer.id}`}>
                      <img className="place-card__image"
                        src={offer.previewImage}
                        width={150} height={110} alt="Place view"
                      />
                    </Link>
                  </div>
                  <div className="favorites__card-info place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">
                          €{offer.price}
                        </b>
                        <span className="place-card__price-text">/&nbsp;night</span>
                      </div>
                      <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                        <svg className="place-card__bookmark-icon" width={18} height={19}>
                          <use xlinkHref="#icon-bookmark" />
                        </svg>
                        <span className="visually-hidden">In bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span
                          style={{ width: `${(MAX_PERCENT_STARS_WIDTH * offer.rating) / STARS_COUNT}%` }}
                        >
                        </span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <Link to={`/offer/${offer.id}`}>
                        {offer.title}
                      </Link>
                    </h2>
                    <p className="place-card__type">
                      {offer.type}
                    </p>
                  </div>
                </article>
              ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FavoritesList;
