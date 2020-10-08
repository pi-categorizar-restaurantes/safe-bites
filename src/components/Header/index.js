import React from "react";
import backArrowIcon from "../../assets/back-arrow.svg";
import horizontalLogo from "../../assets/safe-bites_horizontal.png";
import "./styles.css";

const Header = ({ backArrow = false, isMainPage = false }) => {
  return (
    <header className="custom-header">
      {backArrow && (
        <button className="custom-header-back-arrow-button" onClick={() => {}}>
          <img
            src={backArrowIcon}
            alt="Voltar"
            className="custom-header-back-arrow-icon"
          />
        </button>
      )}
      {isMainPage && (
        <div className="custom-header-main-page-login-signup-container">
          <button className="custom-title-font" onClick={() => {}}>
            Entrar
          </button>
          <button className="custom-title-font" onClick={() => {}}>
            Cadastrar
          </button>
        </div>
      )}
      <div
        className={`custom-header-logo-container ${
          isMainPage
            ? "custom-header-logo__align-left"
            : "custom-header-logo__align-right"
        }`}
      >
        <img
          src={horizontalLogo}
          alt="Logo Safe Bites"
          className="custom-header-logo"
        />
      </div>
      {isMainPage && (
        <p className="custom-header-question-text custom-text-font">
          Qual seu tipo de comida?
        </p>
      )}
    </header>
  );
};

export default Header;
