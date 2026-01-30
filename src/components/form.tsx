import { STARS_COUNT } from './const';

import { Fragment, useState } from 'react';
import { ChangeEvent } from 'react';

const Form = () => {

  const [text, setText] = useState<string>('');
  const [rating, setRating] = useState<number | null>(5);

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    /* eslint-disable no-console */
    console.log(e.target.value.length);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    /* eslint-disable no-console */
    console.log(e.target.value);
    setRating(Number(e.target.value));
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>

      <div className="reviews__rating-form form__rating">
        {Array.from({ length: STARS_COUNT }, (_, i) => {
          /* eslint-disable no-console */
          console.log(STARS_COUNT - i, rating);
          return (
            <Fragment key={`Star ${STARS_COUNT - i}`}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={STARS_COUNT - i}
                id={`${STARS_COUNT - i}-stars`}
                type="radio"

                checked={STARS_COUNT - i === rating}
                onChange={handleInputChange}
              />
              <label
                htmlFor="5-stars"
                className="reviews__rating-label form__rating-label"
                title="ok)"
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" color='green'/>
                </svg>
              </label>
            </Fragment>
          );
        })}

        {/* <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id="5-stars" type="radio" />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label> */}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={text}
        onChange={handleTextareaChange}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form >
  );
};

export default Form;

