import React from "react";
import { Link } from "react-router-dom";
import placeIcon from "../../assets/estabelecimento.png";
import mapIcon from "../../assets/mapa_icone.png";
import UserReview from "../../components/UserReview";
import mockReview from "../../mock/reviewMock";

export default [
  {
    slideContent: (
      <div className="custom-onboarding-slide" key={1}>
        <p>
          Seja bem vindo ao Safe Bites, a plataforma ideal para amantes de
          comida com restrições alimentares e estabelecimentos que desejam se
          conectar a esses seletos clientes.
        </p>
      </div>
    ),
  },
  {
    slideContent: (
      <div className="custom-onboarding-slide" key={2}>
        <p>
          Se você é cliente, procure no mapa ou na lista um restaurante próximo
          a você que ofereça os produtos que estão de acordo com sua dieta.
        </p>
        <div className="custom-onboarding-icons-container">
          <span>
            <img src={mapIcon} alt="Ícone de mapa" />
          </span>
          <span>
            <img src={placeIcon} alt="Ícone de estabelecimento" />
          </span>
        </div>
      </div>
    ),
  },
  {
    slideContent: (
      <div className="custom-onboarding-slide" key={3}>
        <p>
          {" "}
          Se você é estabelecimento, descubra como melhorar seu atendimento para
          clientes com restrições alimentares.
        </p>
        <UserReview reviewData={mockReview} />
      </div>
    ),
  },
  {
    slideContent: (
      <div className="custom-onboarding-slide" key={4}>
        <p>
          Gostou? Comece agora mesmo a utilizar nossa plataforma! Cadastre-se
          para ter acesso a todas as nossas funcionalidades.
        </p>
        <div className="custom-onboarding-buttons-container">
          <Link
            to={""}
            className="custom-default-button custom-green custom-title-font"
          >
            Quero me cadastrar
          </Link>
          <Link
            to={""}
            className="custom-default-button custom-red custom-title-font"
          >
            Prosseguir sem cadastro
          </Link>
        </div>
      </div>
    ),
  },
];
