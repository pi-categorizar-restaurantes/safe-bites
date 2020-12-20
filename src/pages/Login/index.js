import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../../components/Header";
import TextInputBlock from "../../components/TextInputBlock";
import { handleSubmit } from "./business";
import "./styles.css";

const Login = () => {
  const lastUserName = localStorage.getItem("last-user-name");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) return <Redirect to="/home" />;

  return (
    <>
      <Header backArrow={true} backArrowGoTo={"/home"} />
      <section className="custom-login-page-section">
        {(lastUserName && (
          <p className="custom-text-font">Bem vindo de volta, {lastUserName}</p>
        )) || <p className="custom-text-font">Que bom ter você aqui!</p>}
        <form
          className="custom-login-page-form"
          onSubmit={(e) => {
            handleSubmit(e, email, password);
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
          <TextInputBlock
            label="Senha"
            type="password"
            required={true}
            stateBind={password}
            onChangeHandler={(e) => setPassword(e.target.value)}
          />
          <div className="custom-login-page-buttons-container">
            <Link
              className="custom-grayed-button custom-text-font"
              to="recover-password"
            >
              Esqueci minha senha
            </Link>
            <button
              type="submit"
              className="custom-default-button custom-title-font custom-green"
              onClick={() => {}}
            >
              Entrar
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
