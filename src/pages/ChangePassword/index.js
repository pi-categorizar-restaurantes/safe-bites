import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../components/Header";
import TextInputBlock from "../../components/TextInputBlock";
import { handleSubmit } from "./business";
import "./styles.css";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) return <Redirect to="/login" />;

  return (
    <>
      <Header backArrow={true} backArrowGoTo={"/login"} />
      <section className="custom-change-password-page-section">
        <p className="custom-title-font">
          Digite uma nova senha para a sua conta.
        </p>
        <form
          className="custom-change-password-form"
          onSubmit={(event) => {
            if (password !== confirmPassword) return;
            handleSubmit(event, password, confirmPassword);
            setSubmitted(true);
          }}
        >
          <TextInputBlock
            label="Nova Senha"
            type="password"
            required={true}
            stateBind={password}
            onChangeHandler={(e) => setPassword(e.target.value)}
          />
          <TextInputBlock
            label="Confirmar Nova Senha"
            type="password"
            required={true}
            stateBind={confirmPassword}
            onChangeHandler={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="submit"
            className="custom-default-button custom-title-font custom-green"
          >
            Alterar Senha
          </button>
        </form>
      </section>
    </>
  );
};

export default ChangePassword;
