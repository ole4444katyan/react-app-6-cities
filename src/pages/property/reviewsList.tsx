import { STARS_COUNT, MAX_PERCENT_STARS_WIDTH } from '../../components/const';

import type { Review } from '../../mocks/review';

type ReviewsListProps = {
  reviews: Review[];
};

const ReviewsList = ({ reviews }: ReviewsListProps): JSX.Element => (
  <ul className="reviews__list">
    {reviews.map((review) => {
      const {
        id,
        rating,
        text,
        date,
        user,
      } = review;

      const readableDate = new Date(String(date)).toLocaleString('en-US', {
        month: 'long',
        year: 'numeric',
      });

      return (
        <li key={id} className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={user.avatar} width={54} height={54} alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">
              {user.name}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{ width: `${(MAX_PERCENT_STARS_WIDTH * rating) / STARS_COUNT}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {text}
            </p>
            <time className="reviews__time" dateTime={String(date)}>{readableDate}</time>
          </div>
        </li>
      );
    })}
  </ul>
);

export default ReviewsList;
