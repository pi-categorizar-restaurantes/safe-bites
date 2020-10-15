import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import "../styles.css";

const ConfirmSignUp = () => {
  return (
    <>
      <Header />
      <section className="custom-confirm-sign-up-page-section">
        <p className="custom-text-font">
          Cadastro realizado com sucesso. Confirme seu cadastro clicando no link
          que enviamos para o seu email.
        </p>
        <Link className="custom-default-button custom-green" to="/home">
          Ok!
        </Link>
      </section>
    </>
  );
};

export default ConfirmSignUp;
