import React, { useState } from "react";
import ReviewRating from "./ReviewRating";
import { trimReviewText, updateReviewLike } from "./business";
import "./styles.css";

const UserReview = ({ reviewData }) => {
  const {
    reviewId,
    userAvatarUrl,
    userName,
    rating,
    reviewText,
    isLiked,
  } = reviewData;
  const [isExpanded, setIsExpanded] = useState(false);
  const [localLike, setLocalLike] = useState(isLiked);

  function handleLikeClick() {
    updateReviewLike(reviewId);
    setLocalLike(!localLike);
  }

  return (
    <div
      className={`custom-review ${
        isExpanded ? "custom-review-expanded" : "custom-review-not-expanded"
      }`}
    >
      <div className="custom-review-user-data">
        <span>
          <img src={userAvatarUrl} alt="Foto do usuário" />
        </span>
        <div>
          <ReviewRating rating={rating} />
          <p className="custom-review-user-data-username custom-title-font">
            {userName}
          </p>
        </div>
      </div>
      <div
        className="custom-review-content"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded && (
          <p className="custom-review-text custom-text-font">{reviewText}</p>
        )}
        {!isExpanded && (
          <p className="custom-review-text custom-text-font">
            {trimReviewText(reviewText)}
          </p>
        )}
      </div>
      <div className="custom-review-heart-container">
        <p className="custom-text-font">Amei!</p>
        <span
          className="custom-review-heart custom-title-font"
          onClick={handleLikeClick}
        >
          <svg
            viewBox="0 0 26 21"
            fill={"none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0992 0.5C18.0992 0.5 17.1992 0.700006 16.3992 1.10001C15.8992 1.30001 15.2992 1.7 14.8992 2C14.1992 2.6 13.6992 3.30001 13.1992 4.10001C12.7992 3.30001 12.1992 2.6 11.4992 2C10.9992 1.6 10.4992 1.30001 9.99921 1.10001C9.19921 0.700006 8.29919 0.5 7.29919 0.5C3.69919 0.5 0.699219 3.40001 0.699219 7.10001C0.699219 10 2.29918 12.3 4.09918 14.2C4.69918 14.8 5.39921 15.4 5.99921 15.9C6.59921 16.4 7.29919 16.9 7.79919 17.3C8.69919 18 9.39921 18.4 9.49921 18.5L13.0992 20.8L16.6992 18.5C16.7992 18.4 17.4992 18 18.3992 17.3C18.8992 16.9 19.5992 16.4 20.1992 15.9C20.7992 15.4 21.4992 14.8 22.0992 14.2C23.8992 12.4 25.4992 10 25.4992 7.10001C25.5992 3.40001 22.6992 0.5 19.0992 0.5Z"
              fill={`${localLike ? "var(--red)" : "var(--blue)"}`}
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default UserReview;
