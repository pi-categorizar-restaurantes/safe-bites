import React, { useEffect } from "react";
import CustomCarousel from "../../components/CustomCarousel";
import Header from "../../components/Header";
import onboardingSlides from "./onboardingSlides";
import carouselSettings from "./carouselSettings";
import "./styles.css";

const Onboarding = () => {
  useEffect(() => {
    localStorage.setItem("first-access", false);
  }, []);

  return (
    <section className="custom-onboarding-container">
      <Header />
      <CustomCarousel
        slides={onboardingSlides}
        settings={carouselSettings}
        indicator={true}
        skippable={true}
        skipTo="/home"
      />
    </section>
  );
};

export default Onboarding;
