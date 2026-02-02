import ReviewItem from './review';

import type { Review } from '../types/types';

type ReviewsListProps = {
  reviews: Review[];
};

const ReviewsList = ({ reviews }: ReviewsListProps): JSX.Element => (
  <ul className="reviews__list">
    {reviews.map((review) => (
      <ReviewItem
        key={review.id}
        {...review}
      />
    )
    )}
  </ul >
);

export default ReviewsList;
