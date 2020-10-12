import React from "react";
import { Link } from "react-router-dom";
import backArrowIcon from "../../assets/back-arrow.svg";
import horizontalLogo from "../../assets/safe-bites_horizontal.png";
import "./styles.css";

const Header = ({ backArrow = false, isMainPage = false, backArrowGoTo }) => {
  return (
    <header className="custom-header">
      {backArrow && (
        <Link className="custom-header-back-arrow-button" to={backArrowGoTo}>
          <img
            src={backArrowIcon}
            alt="Voltar"
            className="custom-header-back-arrow-icon"
          />
        </Link>
      )}
      {isMainPage && (
        <div className="custom-header-main-page-login-signup-container">
          <Link className="custom-title-font" to="/login">
            Entrar
          </Link>
          <Link className="custom-title-font" to="/signup">
            Cadastrar
          </Link>
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
        <p className="custom-header-question-text custom-title-font">
          Qual seu tipo de comida?
        </p>
      )}
    </header>
  );
};

export default Header;
