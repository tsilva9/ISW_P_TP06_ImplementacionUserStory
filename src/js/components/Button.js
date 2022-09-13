import React from "react";
import "../../css/style.css";

const Button = (props) => {
  return (
    <div className="c-button">
      <button className="c-button--1" onClick={props.routeBack}>
        {" "}
        Volver{" "}
      </button>

      <button className="c-button--2" onClick={props.handleBoton}>
        Continuar
      </button>
    </div>
  );
};

export default Button;
