import React from "react";
import "./styles.css";

const ReviewRating = ({ rating = 5.0 }) => {
  const roundRating = Math.round(rating);
  const stars = getStars();

  function getStars() {
    const stars = [];
    for (let i = 0; i < roundRating; i++) {
      stars.push(
        <svg
          key={i}
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.7991 13.4C34.5991 12.9 34.1992 12.5 33.6992 12.4L23.3992 11L18.7992 1.7C18.5991 1.2 18.0992 0.899994 17.4992 0.899994C16.9992 0.899994 16.4992 1.2 16.1992 1.7L11.5992 11L1.39916 12.5C0.899156 12.6 0.399165 13 0.299165 13.5C0.0991652 14 0.299159 14.6 0.699159 15L8.09917 22.2L6.39916 32.4C6.29916 32.9 6.49916 33.5 6.99916 33.8C7.19916 34 7.49917 34.1 7.79917 34.1C7.99917 34.1 8.29916 34 8.49916 33.9L17.5992 29.1L26.6992 33.9C27.1992 34.2 27.7992 34.1 28.1992 33.8C28.5992 33.5 28.8992 32.9 28.7992 32.4L26.9992 22.1L34.3992 14.9C34.7992 14.5 34.8991 13.9 34.7991 13.4Z"
            fill="#F8F8F8"
          />
        </svg>
      );
    }
    return stars;
  }

  return (
    <div className="review-rating">
      <p>{rating},0</p> {stars.map((star) => star)}
    </div>
  );
};

export default ReviewRating;
