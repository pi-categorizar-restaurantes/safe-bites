import React from "react";
import "./styles.css";

const SelectInputBlock = ({
  label,
  options,
  optionsValues,
  isLike,
  onChangeHandler,
  stateBind,
  required = false,
}) => {
  function getBlockStyling() {
    if (isLike === "profile-page") {
      return "custom-select-input-block-profile-page";
    } else {
      return "custom-select-input-block-register-page";
    }
  }

  return (
    <div className={getBlockStyling()}>
      <label className="custom-title-font" htmlFor={label}>
        {label}
      </label>
      <select
        className="custom-text-font"
        onChange={onChangeHandler}
        name={label}
        selected={stateBind}
        required={required}
        defaultValue=""
      >
        <option disabled value="" hidden>
          Escolha uma opção
        </option>
        {options.map((option, index) => (
          <option key={option} value={optionsValues[index]}>
            {option}
          </option>
        ))}
      </select>
      <span className="custom-fake-select-dropdown-arrow">
        <svg viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.9393 38.0607C11.5251 38.6464 12.4749 38.6464 13.0607 38.0607L22.6066 28.5147C23.1924 27.9289 23.1924 26.9792 22.6066 26.3934C22.0208 25.8076 21.0711 25.8076 20.4853 26.3934L12 34.8787L3.51472 26.3934C2.92893 25.8076 1.97919 25.8076 1.3934 26.3934C0.807611 26.9792 0.807611 27.9289 1.3934 28.5147L10.9393 38.0607ZM10.5 0L10.5 37H13.5L13.5 0L10.5 0Z"
            fill="#3CB9D6"
          />
        </svg>
      </span>
    </div>
  );
};

export default SelectInputBlock;
