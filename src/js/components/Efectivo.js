import React from "react";
import "../../css/style.css";

const Efectivo = (props) => {
  return (
    <div className="c-efectivo">
      <h1 className="c-efectivo__titulo">
        Ingresá el monto con el que vas a pagar
      </h1>
      <input
        className="c-efectivo__monto"
        type="number"
        placeholder="Monto"
        onChange={props.onMontoEfectivoChange}
        value={props.efectivo}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />
      {props.errorEfectivo ? (
        <p className="c-efectivo__error">* El monto ingresado no es valido</p>
      ) : (
        <p className="c-efectivo__error--transparent"> a</p>
      )}
    </div>
  );
};

export default Efectivo;
