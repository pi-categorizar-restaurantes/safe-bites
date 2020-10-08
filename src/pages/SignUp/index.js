import React from "react";
import Header from "../../components/Header";
import PlaceSignUp from "./PlaceSignUp";
import UserSignUp from "./UserSignUp";
import "./styles.css";

const SignUp = ({ isPlace }) => {
  return (
    <section className="custom-sign-up-page">
      <Header backArrow={true} backArrowGoTo="/home" />

      <div className="custom-sign-up-form">
        <h2 className="custom-title-font">Seja bem vindo.</h2>
        <p className="custom-text-font">
          Preencha o formulário abaixo para se cadastrar.
        </p>
        {isPlace && <PlaceSignUp />}
        {!isPlace && <UserSignUp />}
      </div>
    </section>
  );
};

export default SignUp;
