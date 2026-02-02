import { STARS_COUNT, MAX_PERCENT_STARS_WIDTH } from '../const/const';
import readableDate from '../utils/readableDate';

import type { Review } from '../types/types';


function ReviewItem({
  id,
  rating,
  text,
  date,
  user,
}: Review) : JSX.Element {
  return (
    <li key={id} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl || 'avatar.svg'} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
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
        <time className="reviews__time" dateTime={String(date)}>{readableDate(date)}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
