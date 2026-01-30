import React from 'react';
// import ReactDOM from 'react-dom/client';
import Main from '../../pages/main/main';

type AppProps = {
  offersCount: number;
};

function App({offersCount}: AppProps): JSX.Element {
  return <Main offersCount = {offersCount}/>;
}

export default App;
