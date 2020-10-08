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
  const sliderRef = React.createRef();

  function next() {
    sliderRef.current.slickNext();
  }

  function prev() {
    sliderRef.current.slickPrev();
  }

  function handleIndicatorClick(index) {
    sliderRef.current.slickGoTo(index);
  }

  return (
    <>
      <div className="custom-carousel-container">
        <Slider
          ref={sliderRef}
          {...settings}
          beforeChange={(_, next) => setActiveIndex(next)}
        >
          {slides.map((slide) => slide.slideContent)}
        </Slider>
        <div className="custom-carousel-menu">
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
