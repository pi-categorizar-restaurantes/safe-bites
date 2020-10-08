import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./styles.css";

const HomePage = () => {
  return (
    <>
      <Header isMainPage={true} />
      <section className="routes">
        {" "}
        <h1 className="custom-title-font">ROTAS ATÉ AGORA</h1>
        <Link to="/" className="custom-default-button custom-green">
          Onboarding / Home
        </Link>
        <Link to="/onboarding" className="custom-default-button custom-green">
          Onboarding
        </Link>
        <Link to="/signup" className="custom-default-button custom-green">
          Página Intermediária de Cadastro
        </Link>
        <Link to="/signup/place" className="custom-default-button custom-green">
          Cadastro Restaurante
        </Link>
        <Link to="/signup/user" className="custom-default-button custom-green">
          Cadastro Usuário
        </Link>
      </section>
    </>
  );
};

export default HomePage;
