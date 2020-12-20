import React from "react";
import "./styles.css";

const FooterMenuButton = ({ icon, label, toRender, setRender }) => {
  return (
    <button
      onClick={() => setRender(label)}
      className={`custom-footer-menu-button ${
        (toRender === label && "custom-footer-menu-button-highlighted") ||
        "custom-footer-menu-button-gray"
      }`}
    >
      <img src={icon} alt={label} />
      <span className="custom-text-font">{label}</span>
    </button>
  );
};

export default FooterMenuButton;
