import React from "react";
import "./styles.css";
import lowCarbIcon from "../../assets/low-carb.png";
import lowSodiumIcon from "../../assets/low-sodium.png";
import veganIcon from "../../assets/vegano.png";
import vegetarianIcon from "../../assets/vegetariano.png";

const FoodIcon = ({ iconType }) => {
  if (iconType === "VEGETARIAN")
    return <img src={vegetarianIcon} alt="Comida vegetariana" />;
  if (iconType === "VEGAN") return <img src={veganIcon} alt="Comida vegana" />;
  if (iconType === "LOW_SODIUM")
    return <img src={lowSodiumIcon} alt="Comida com baixo teor de sódio" />;
  if (iconType === "LOW_CARB")
    return <img src={lowCarbIcon} alt="Comida com baixas calorias" />;
};

export default FoodIcon;
