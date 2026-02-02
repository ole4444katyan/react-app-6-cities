import { useState } from 'react';
import CardList from '../../components/cardList';
import Map from '../../components/map';
import { Link } from 'react-router-dom';

import type { Offer, City, Location } from '../../types/types';


type MainProps = {
  offers: Offer[];
  city: City;
}

function Main({ offers, city }: MainProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Location | null>(null);

  const onCardItemHover = (location: Location | null) => {
    setSelectedPoint(location);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a href="/#" className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <CardList
                  offers={offers}
                  onMouseHover={onCardItemHover}
                  place={'cities'}
                />
                {/* <CardList offers={Array.from({ length: offersCount }, (_, index) => ({
                  id: index,
                  price: 200,
                  rating: 4.4,
                  title: 'Beautiful & luxurious apartment at great location',
                  isPremium: true,
                  isFavorite: false,
                  previewImage: 'img/apartment-01.jpg',
                  type: 'apartment',
                  city: {
                    name: 'Amsterdam'
                  }
                }))} /> */}
                {/* {Array.from({ length: offersCount }, () => <Card key={0} />)} */}
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                city={city}
                locations={offers.map((offer) => offer.location)}
                selectedPoint={selectedPoint}
                place={'cities'}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
