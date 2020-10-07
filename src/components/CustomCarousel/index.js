import React, { useEffect, useState } from "react";
import "./styles.css";
import Slider from "react-slick";
import CarouselControl from "./CarouselControl";
import CarouselIndicators from "./CarouselIndicators";

const CustomCarousel = ({
  slides,
  doubleArrow = false,
  settings,
  indicator = false,
  skippable = false,
  skipTo,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sliderRef = React.createRef();

  useEffect(() => {
    sliderRef.current.slickGoTo(activeIndex);
  }, [activeIndex]);

  function next() {
    if (animating) return;
    setAnimating(true);
    setActiveIndex(Math.min(activeIndex + 1, slides.length - 1));
    setAnimating(false);
  }

  function prev() {
    if (animating) return;
    setAnimating(true);
    setActiveIndex(Math.max(activeIndex - 1, 0));
    setAnimating(false);
  }

  function handleIndicatorClick(index) {
    setActiveIndex(index);
  }

  return (
    <>
      <div className="carousel-container">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide) => slide.slideContent)}
        </Slider>
        <div className="carousel-menu">
          {!doubleArrow && activeIndex < slides.length - 1 && (
            <CarouselControl
              doubleArrow={doubleArrow}
              next={next}
              prev={prev}
            />
          )}
          {indicator && (
            <CarouselIndicators
              items={slides}
              activeIndex={activeIndex}
              onClickHandler={handleIndicatorClick}
              skippable={skippable}
              skipTo={skipTo}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CustomCarousel;
