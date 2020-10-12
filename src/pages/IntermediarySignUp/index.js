import React from "react";
import "./styles.css";
import placeIcon from "../../assets/estabelecimento.png";
import userIcon from "../../assets/perfil.png";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const IntermediarySignUp = () => {
  return (
    <>
      <Header backArrow={true} backArrowGoTo={"/home"} />
      <section className="custom-intermediary-page-section">
        <h2 className="custom-title-font">Você é pessoa ou estabelecimento?</h2>
        <div className="custom-intermediary-page-buttons-container">
          <Link to="/signup/user">
            <img src={userIcon} alt="Ícone de pessoa" />
            <span className="custom-title-font">Sou pessoa</span>
          </Link>
          <Link to="/signup/place">
            <img src={placeIcon} alt="Ícone de estabelecimento" />
            <span className="custom-title-font">Sou estabelecimento</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default IntermediarySignUp;
