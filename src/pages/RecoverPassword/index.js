import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../components/Header";
import TextInputBlock from "../../components/TextInputBlock";
import { handleSubmit } from "./business";
import "./styles.css";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) return <Redirect to="/recover-password/confirm" />;

  return (
    <>
      <Header backArrow={true} backArrowGoTo={"/login"} />
      <section className="custom-recover-password-page-section">
        <p className="custom-title-font">
          Digite seu email abaixo para recuperar sua senha.
        </p>
        <form
          className="custom-recover-password-form"
          onSubmit={(event) => {
            handleSubmit(event, email);
            setSubmitted(true);
          }}
        >
          <TextInputBlock
            label="Email"
            type="email"
            required={true}
            stateBind={email}
            onChangeHandler={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="custom-default-button custom-title-font custom-green"
          >
            Recuperar Senha
          </button>
        </form>
      </section>
    </>
  );
};

export default RecoverPassword;
