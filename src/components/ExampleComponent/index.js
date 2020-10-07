import React from "react";
import { LoadSomeData } from "./business";
import "./styles.css";
const ExampleComponent = () => {
  return (
    <div className="example-component-wrapper" onClick={LoadSomeData}>
      Exemplo de componente
    </div>
  );
};

export default ExampleComponent;
