import React, { useState } from "react";
import SelectInputBlock from "../../../components/SelectInputBlock";
import TextInputBlock from "../../../components/TextInputBlock";

const UserSignUp = () => {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const selectGenders = ["Masculino", "Feminino", "Outro"];
  const selectValues = ["M", "F", "O"];

  return (
    <form>
      <TextInputBlock
        label="Nome Completo"
        onChangeHandler={(e) => setName(e.target.value)}
        stateBind={name}
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
        label="Data de Nascimento"
        onChangeHandler={(e) => setBirth(e.target.value)}
        stateBind={birth}
        type="date"
        required={true}
      />
      <SelectInputBlock
        label="Gênero"
        onChangeHandler={(e) => setGender(e.target.value)}
        stateBind={gender}
        options={selectGenders}
        optionsValues={selectValues}
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

export default UserSignUp;
