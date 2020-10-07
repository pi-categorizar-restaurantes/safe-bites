export function trimReviewText(reviewText) {
  if (reviewText.length > 176) {
    return `${reviewText.slice(0, 176)}...`;
  } else {
    return reviewText;
  }
}

export function updateReviewLike(reviewId) {
  return null;
}
