import React, { useState } from "react";
import { Link } from "react-router-dom";
import FooterMenu from "../../components/FooterMenu";
import Header from "../../components/Header";
import RestaurantList from "../../components/RestaurantList";
import "./styles.css";

const HomePage = () => {
  const [view, setView] = useState("mapa");
  return (
    <>
      <Header isMainPage={true} />
      <section className="custom-main-page-container">
        {view === "lista" && <RestaurantList />}
      </section>
      <FooterMenu toRender={view} setRender={setView} />
    </>
  );
};

export default HomePage;
