import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ReactDOM from 'react-dom/client';
import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import Error from '../../pages/error/error';
import { PrivateRoute , AuthorizationStatus } from '../authorizationStatus';

type AppProps = {
  offersCount: number;
};

function App({ offersCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main offersCount={offersCount} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/offer/">
          <Route path="1" element={<Property />} />
        </Route>
        <Route path="/favorites" element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
