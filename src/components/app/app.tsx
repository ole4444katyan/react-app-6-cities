import { BrowserRouter, Route, Routes } from 'react-router-dom';

import type { Offer, Review, City } from '../../types/types';

import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import Error from '../../pages/error/error';
import { PrivateRoute , AuthorizationStatus } from '../../utils/authorizationStatus';


type AppProps = {
  offers: Offer[];
  reviews: Review[];
  city: City;
  offersNearby: Offer[];
};

function App({ offers, reviews, city, offersNearby }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main offers={offers} city={city} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/offer/">
          <Route path=":id" element={<Room offers={offers} reviews= {reviews} city={city} offersNearby={offersNearby} />} />
        </Route>
        <Route path="/favorites" element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <Favorites offers={offers} />
          </PrivateRoute>
        }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
