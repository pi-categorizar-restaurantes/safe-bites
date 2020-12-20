import React from "react";
import "./styles.css";
import mapIcon from "../../assets/mapa_icone.png";
import profileIcon from "../../assets/perfil.png";
import listIcon from "../../assets/lista_icone.png";
import FooterMenuButton from "./FooterMenuButton";

const FooterMenu = ({ toRender, setRender }) => {
  return (
    <footer className="custom-footer-menu">
      <FooterMenuButton
        icon={mapIcon}
        label="mapa"
        toRender={toRender}
        setRender={setRender}
      />
      <FooterMenuButton
        icon={listIcon}
        label="lista"
        toRender={toRender}
        setRender={setRender}
      />
      <FooterMenuButton
        icon={profileIcon}
        label="perfil"
        toRender={toRender}
        setRender={setRender}
      />
    </footer>
  );
};

export default FooterMenu;
