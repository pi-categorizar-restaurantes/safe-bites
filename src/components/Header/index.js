import React from "react";
import backArrowIcon from "../../assets/back-arrow.svg";
import horizontalLogo from "../../assets/safe-bites_horizontal.png";
import "./styles.css";

const Header = ({ backArrow = false, isMainPage = false }) => {
  return (
    <header className="header">
      {backArrow && (
        <button className="header-back-arrow-button" onClick={() => {}}>
          <img
            src={backArrowIcon}
            alt="Voltar"
            className="header-back-arrow-icon"
          />
        </button>
      )}
      {isMainPage && (
        <div className="header-main-page-login-signup-container">
          <button className="title-font" onClick={() => {}}>
            Entrar
          </button>
          <button className="title-font" onClick={() => {}}>
            Cadastrar
          </button>
        </div>
      )}
      <div
        className={`header-logo-container ${
          isMainPage ? "header-logo__align-left" : "header-logo__align-right"
        }`}
      >
        <img
          src={horizontalLogo}
          alt="Logo Safe Bites"
          className="header-logo"
        />
      </div>
      {isMainPage && (
        <p className="header-question-text text-font">
          Qual seu tipo de comida?
        </p>
      )}
    </header>
  );
};

export default Header;
