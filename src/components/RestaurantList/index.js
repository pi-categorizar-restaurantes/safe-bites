import React, { useEffect, useState } from "react";
import "./styles.css";
import { loadRestaurantList } from "./business";
import RestaurantListCard from "./RestaurantListCard";
import FoodIcon from "../FoodIcon";

const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [foodTypeFilter, setFoodTypeFilter] = useState(null);

  useEffect(() => {
    loadRestaurantList().then((list) => setRestaurantList(list));
  }, []);

  useEffect(() => {
    console.log(filteredList);
  }, [filteredList]);

  useEffect(() => {
    if (filteredList !== restaurantList) setFilteredList(restaurantList);
  }, [restaurantList]);

  function handleFilterClick(foodType) {
    if (foodTypeFilter !== foodType) {
      setFoodTypeFilter(foodType);
      setFilteredList(
        restaurantList.filter(
          (restaurant) => restaurant.mainFoodType === foodType
        )
      );
    } else {
      setFoodTypeFilter(null);
      setFilteredList(restaurantList);
    }
  }

  return (
    <section className="custom-restaurant-list-section">
      <div className="custom-restaurant-list-filter-container">
        <button
          className={`${
            (foodTypeFilter === "VEGETARIAN" &&
              "custom-food-type-filter-highlighted") ||
            "custom-food-type-filter-idle"
          }`}
          onClick={() => handleFilterClick("VEGETARIAN")}
        >
          <FoodIcon iconType="VEGETARIAN" />
          <span className="custom-text-font">vegetariana</span>
        </button>
        <button
          className={`${
            (foodTypeFilter === "VEGAN" &&
              "custom-food-type-filter-highlighted") ||
            "custom-food-type-filter-idle"
          }`}
          onClick={() => handleFilterClick("VEGAN")}
        >
          <FoodIcon iconType="VEGAN" />
          <span className="custom-text-font">vegana</span>
        </button>
        <button
          className={`${
            (foodTypeFilter === "LOW_CARB" &&
              "custom-food-type-filter-highlighted") ||
            "custom-food-type-filter-idle"
          }`}
          onClick={() => handleFilterClick("LOW_CARB")}
        >
          <FoodIcon iconType="LOW_CARB" />
          <span className="custom-text-font">low carb</span>
        </button>
        <button
          className={`${
            (foodTypeFilter === "LOW_SODIUM" &&
              "custom-food-type-filter-highlighted") ||
            "custom-food-type-filter-idle"
          }`}
          onClick={() => handleFilterClick("LOW_SODIUM")}
        >
          <FoodIcon iconType="LOW_SODIUM" />
          <span className="custom-text-font">low sodium</span>
        </button>
      </div>
      <div className="custom-restaurant-list-cards-container">
        {(filteredList.length > 0 &&
          filteredList.map((restaurant) => (
            <RestaurantListCard
              key={restaurant.id}
              restaurantInfo={restaurant}
            />
          ))) || (
          <p className="custom-title-font">
            {" "}
            Nenhum restaurante encontrado nesta categoria.{" "}
          </p>
        )}
      </div>
    </section>
  );
};

export default RestaurantList;
