import React from "react";
import "./styles.css";

const TextInputBlock = ({
  label,
  type = "text",
  isLike,
  onChangeHandler,
  stateBind,
  pattern,
  placeholder = "",
  maxlength = 100,
  required = false,
}) => {
  function getBlockStyling() {
    if (isLike === "profile-page") {
      return "custom-text-input-block-profile-page";
    } else {
      return "custom-text-input-block-register-page";
    }
  }

  return (
    <div className={getBlockStyling()}>
      <label className="custom-title-font" htmlFor={label}>
        {label}
      </label>
      <input
        className="custom-text-font"
        onChange={onChangeHandler}
        type={type}
        name={label}
        value={stateBind}
        pattern={pattern}
        placeholder={placeholder}
        maxlength={maxlength}
        required={required}
      />
      <span className="custom-focus-indicator"></span>
    </div>
  );
};

export default TextInputBlock;
