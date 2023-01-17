const express = require('express');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');

const router = express.Router({ mergeParams: true });

const catchAsync = require('../utils/catchAsync');
const reviews = require('../controllers/reviews');

router.post('/', isLoggedIn, validateReview, catchAsync(reviews.creatReview));

router.delete(
  '/:reviewId',
  isLoggedIn,
  isReviewAuthor,
  catchAsync(reviews.deleteReview)
);

module.exports = router;
