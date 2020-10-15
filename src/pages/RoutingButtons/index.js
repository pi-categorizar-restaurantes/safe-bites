import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const RoutingButtons = () => {
  return (
    <section className="custom-routes">
      {" "}
      <h1 className="custom-title-font">ROTAS ATÉ AGORA</h1>
      <div>
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
        <Link
          to="/signup/confirm"
          className="custom-default-button custom-green"
        >
          Pós-cadastro
        </Link>
        <Link to="/login" className="custom-default-button custom-green">
          Login
        </Link>
        <Link
          to="/recover-password"
          className="custom-default-button custom-green"
        >
          Recuperar Senha
        </Link>
        <Link
          to="/recover-password/confirm"
          className="custom-default-button custom-green"
        >
          Confirmar Recuperar Senha
        </Link>
        <Link
          to="/change-password"
          className="custom-default-button custom-green"
        >
          Trocar Senha
        </Link>
        <Link to="/unauth" className="custom-default-button custom-green">
          Ação Não Autorizada
        </Link>
      </div>
    </section>
  );
};

export default RoutingButtons;
