import React from "react";
import "../../css/style.css";

import Efectivo from "./Efectivo";
import Tarjeta from "./Tarjeta";

const FormaPago = (props) => {
  return (
    <div className="c-forma-pago">
      <h1 className="c-forma-pago__titulo">¿Cómo vas a pagar?</h1>
      <button
        className="c-forma-pago__button c-forma-pago__button--1"
        onClick={props.onEfectivoClick}
      >
        Efectivo
      </button>
      <button
        className="c-forma-pago__button c-forma-pago__button--2"
        onClick={props.onTarjetaClick}
      >
        Tarjeta Crédito o Débito
      </button>

      {props.formaPago.efectivo ? (
        <Efectivo
          errorEfectivo={props.errorEfectivo}
          onMontoEfectivoChange={props.onMontoEfectivoChange}
        ></Efectivo>
      ) : (
        <div></div>
      )}

      {props.formaPago.tarjeta ? (
        <Tarjeta
          tarjeta={props.tarjeta}
          onNumeroTarjetaChange={props.onNumeroTarjetaChange}
          onNombreTarjetaChange={props.onNombreTarjetaChange}
          onCvvTarjetaChange={props.onCvvTarjetaChange}
          onMmaaTarjetaChange={props.onMmaaTarjetaChange}
          errorTarjeta={props.errorTarjeta}
        ></Tarjeta>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default FormaPago;
