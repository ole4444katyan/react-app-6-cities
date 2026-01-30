import { Link } from 'react-router-dom';

function Error(): JSX.Element {
  return (
    <div className="page">
      <div className="header__left">
        <Link className="header__logo-link" to="/">
          <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width={81} height={41} />
        </Link>
      </div>
      <h1>Ошибка 404. Страницы не существует.</h1>
    </div>
  );
}

export default Error;
