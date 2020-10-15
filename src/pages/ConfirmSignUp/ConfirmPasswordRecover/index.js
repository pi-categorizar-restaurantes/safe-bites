import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import "../styles.css";

const ConfirmPasswordRecover = () => {
  return (
    <>
      <Header />
      <section className="custom-confirm-sign-up-page-section">
        <p className="custom-text-font">
          Em breve você receberá um email com as instruções para recuperar a sua
          senha.
        </p>
        <Link className="custom-default-button custom-green" to="/login">
          Ok!
        </Link>
      </section>
    </>
  );
};

export default ConfirmPasswordRecover;
