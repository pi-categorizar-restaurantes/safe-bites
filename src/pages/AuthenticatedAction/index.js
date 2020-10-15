import React from "react";
import "./styles.css";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const AuthenticatedAction = () => {
  return (
    <>
      <Header backArrow={true} backArrowGoTo={"/home"} />
      <section className="custom-unauth-action-page-section">
        <h2 className="custom-title-font">
          Você precisa estar logado para realizar essa ação.
        </h2>
        <div className="custom-unauth-action-page-buttons-container">
          <Link
            to="/signup"
            className="custom-title-font custom-default-button custom-green"
          >
            Sou novo aqui
          </Link>
          <Link
            to="/login"
            className="custom-title-font custom-default-button custom-green"
          >
            Já tenho cadastro
          </Link>
        </div>
      </section>
    </>
  );
};

export default AuthenticatedAction;
