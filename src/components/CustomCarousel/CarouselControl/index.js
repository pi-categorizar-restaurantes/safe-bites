import React from "react";
import "./styles.css";

const CarouselControl = ({ doubleArrow = false, next, prev }) => {
  const prevButton = () => (
    <button className="next-slide-button" onClick={prev}>
      <svg
        height="50"
        viewBox="0 0 86 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.706 50.1914C9.39155 47.82 9.43774 44.0212 11.8092 41.7068L50.4544 3.99007C52.8259 1.67558 56.6246 1.72177 58.9391 4.09324C61.2535 6.4647 61.2073 10.2634 58.8359 12.5779L24.4846 46.1038L58.0105 80.4551C60.325 82.8266 60.2788 86.6253 57.9074 88.9398C55.5359 91.2543 51.7372 91.2081 49.4227 88.8366L11.706 50.1914ZM15.9293 52.0003L15.927 52.0002L16.0729 40.0011L16.0752 40.0011L15.9293 52.0003Z"
          fill="#FAFAFA"
        />
      </svg>
    </button>
  );

  const nextButton = () => (
    <button className="next-slide-button" onClick={next}>
      <svg
        height="50"
        viewBox="0 0 86 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M74.2959 50.1914C76.6104 47.82 76.5642 44.0212 74.1928 41.7068L35.5476 3.99007C33.1761 1.67558 29.3774 1.72177 27.0629 4.09324C24.7484 6.4647 24.7946 10.2634 27.1661 12.5779L61.5174 46.1038L27.9914 80.4551C25.6769 82.8266 25.7231 86.6253 28.0946 88.9398C30.466 91.2543 34.2647 91.2081 36.5792 88.8366L74.2959 50.1914ZM70.0727 52.0003L70.075 52.0002L69.9291 40.0011L69.9268 40.0011L70.0727 52.0003Z"
          fill="#FAFAFA"
        />
      </svg>
    </button>
  );

  if (doubleArrow) {
    return (
      <>
        {prevButton()}
        {nextButton()}
      </>
    );
  } else {
    return nextButton();
  }
};

export default CarouselControl;
