import React, { useState } from "react";
import TextInputBlock from "../../../components/TextInputBlock";

const PlaceSignUp = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [street, setStreet] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form>
      <TextInputBlock
        label="Nome do Estabelecimento"
        onChangeHandler={(e) => setName(e.target.value)}
        stateBind={name}
        required={true}
      />
      <TextInputBlock
        label="Telefone com DDD"
        onChangeHandler={(e) => setTel(e.target.value)}
        stateBind={tel}
        placeholder="(99) 9 1234-5678"
        maxlength={16}
        required={true}
        pattern="^\({0,1}[0-9]{2}\){0,1}\s{0,1}[0-9]{0,1}\s{0,1}[0-9]{4}-{0,1}[0-9]{4}$"
      />
      <TextInputBlock
        label="Rua"
        onChangeHandler={(e) => setStreet(e.target.value)}
        stateBind={street}
        required={true}
      />
      <TextInputBlock
        label="CEP"
        onChangeHandler={(e) => setZipCode(e.target.value)}
        stateBind={zipCode}
        pattern="^[0-9]{5}-?[0-9]{3}$"
        placeholder="12345-123"
        maxlength={9}
        required={true}
      />
      <TextInputBlock
        label="Email"
        type="email"
        onChangeHandler={(e) => setEmail(e.target.value)}
        stateBind={email}
        required={true}
      />
      <TextInputBlock
        label="Senha"
        type="password"
        onChangeHandler={(e) => setPassword(e.target.value)}
        stateBind={password}
        pattern="*{8,}"
        required={true}
      />
      <TextInputBlock
        label="Confirmar Senha"
        type="password"
        onChangeHandler={(e) => setConfirmPassword(e.target.value)}
        stateBind={confirmPassword}
        pattern="*{8,}"
        required={true}
      />
      <button
        type="submit"
        className="custom-submit-button custom-default-button custom-green custom-title-font"
      >
        Cadastrar
      </button>
    </form>
  );
};

export default PlaceSignUp;
