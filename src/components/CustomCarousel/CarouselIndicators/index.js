import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const CarouselIndicators = ({
  items,
  activeIndex,
  onClickHandler,
  skippable = false,
  skipTo,
}) => {
  return (
    <div className="custom-indicators-container">
      <div className="custom-indicators">
        {items.map((_, index) => {
          return index === activeIndex ? (
            <div
              key={index}
              onClick={() => onClickHandler(index)}
              className="custom-indicator custom-active-indicator"
            />
          ) : (
            <div
              key={index}
              onClick={() => onClickHandler(index)}
              className="custom-indicator custom-inactive-indicator"
            />
          );
        })}
      </div>

      {skippable && activeIndex < items.length - 1 && (
        <div className="custom-skip-button-container">
          <Link to={skipTo} className="custom-grayed-button">
            PULAR
          </Link>
        </div>
      )}
    </div>
  );
};

export default CarouselIndicators;
