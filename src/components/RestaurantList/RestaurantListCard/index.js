import React from "react";
import FoodIcon from "../../FoodIcon";
import Rating from "../../Rating";
import "./styles.css";

const RestaurantListCard = ({ restaurantInfo }) => {
  const {
    name,
    workingHours,
    mainFoodType,
    meanReview,
    numberOfReviews,
    distance,
    avatarUrl,
  } = restaurantInfo;

  return (
    <article className="custom-restaurant-card">
      <div>
        <h2 className="custom-text-font">{name}</h2>
        <p className="custom-text-font">
          Horário de funcionamento: {workingHours}
        </p>
        <span className="custom-restaurant-card-last-row">
          <FoodIcon iconType={mainFoodType} />
          <p>{meanReview} </p>
          <Rating rating={meanReview} fill="var(--blue)" />
          <p className="custom-text-font">({numberOfReviews})</p>
          <p className="custom-text-font">{distance} km</p>
        </span>
      </div>
      <span className="custom-restaurant-card-avatar-container">
        <img
          className="custom-restaurant-card-avatar"
          src={avatarUrl}
          alt={"Foto do restaurante"}
        />
      </span>
    </article>
  );
};

export default RestaurantListCard;
