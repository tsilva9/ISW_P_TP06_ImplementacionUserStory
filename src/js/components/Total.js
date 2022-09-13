import React from "react";
import "../../css/style.css";

const Total = (props) => {
  return (
    <div className="c-total">
      <h1 className="c-total__titulo">Resumen</h1>
      {/* <div className="c-total__producto">
          <p className="c-total__producto-texto">Costo del Producto</p>
          <p className="c-total__producto-valor">{`$${props.precio}`}</p>
        </div> */}

      <div className="c-total__envio">
        <p className="c-total__texto">Costo del Envio</p>
        <p className="c-total__precio">{`$${props.precio}`}</p>
      </div>

      <span className="c-total__span"></span>

      <div className="c-total__pagar">
        <p className="c-total__texto">Total a pagar</p>
        <p className="c-total__precio--total">{`$${props.precio}`}</p>
      </div>
    </div>
  );
};

export default Total;
