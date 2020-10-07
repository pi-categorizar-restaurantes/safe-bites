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
    <div className="indicators-container">
      <div className="indicators">
        {items.map((_, index) => {
          return index === activeIndex ? (
            <div
              key={index}
              onClick={() => onClickHandler(index)}
              className="indicator active-indicator"
            />
          ) : (
            <div
              key={index}
              onClick={() => onClickHandler(index)}
              className="indicator inactive-indicator"
            />
          );
        })}
      </div>

      {skippable && activeIndex < items.length - 1 && (
        <div className="skip-button-container">
          <Link to={skipTo} className="grayed-button">
            PULAR
          </Link>
        </div>
      )}
    </div>
  );
};

export default CarouselIndicators;
