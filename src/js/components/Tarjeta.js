import React from "react";
import "../../css/style.css";

const Tarjeta = (props) => {
  return (
    <div className="c-tarjeta">
      <h1 className="c-tarjeta__titulo">Ingresá los datos de tu tarjeta</h1>
      <input
        className="c-tarjeta__numero"
        type="text"
        placeholder="Número de tarjeta"
        value={props.tarjeta.numero}
        onChange={props.onNumeroTarjetaChange}
        onKeyPress={(event) => {
          if (!/[0-9 ]/.test(event.key) || !(event.target.value.length < 19)) {
            event.preventDefault();
          }
        }}
      />

      {props.errorTarjeta.errorTarjetaNro ? (
        <p className="c-tarjeta__error c-tarjeta__error--nro">
          * El numero ingresado no es correcto
        </p>
      ) : (
        <p className="c-tarjeta__error c-tarjeta__error--transparent"> a</p>
      )}

      <input
        className="c-tarjeta__nombre"
        type="text"
        placeholder="Nombre y Apellido"
        value={props.tarjeta.nombre}
        onChange={props.onNombreTarjetaChange}
        onKeyPress={(event) => {
          if (!/^[.a-zA-Z\u00C0-\u00FF ]*$/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />

      {props.errorTarjeta.errorTarjetaNombre ? (
        <p className="c-tarjeta__error c-tarjeta__error--nombre">
          * Este campo no puede estar vacío
        </p>
      ) : (
        <p className="c-tarjeta__error c-tarjeta__error--transparent"> a</p>
      )}

      <input
        className="c-tarjeta__fecha"
        type="text"
        placeholder="Fecha de Expiración"
        value={props.tarjeta.mmaa}
        onChange={props.onMmaaTarjetaChange}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key) || !(event.target.value.length < 5)) {
            event.preventDefault();
          }
        }}
      />

      {props.errorTarjeta.errorTarjetaMmaa ? (
        <p className="c-tarjeta__error c-tarjeta__error--fecha">
          * La fecha ingresada no es válida
        </p>
      ) : (
        <p className="c-tarjeta__error c-tarjeta__error--transparent"> a</p>
      )}

      <input
        className="c-tarjeta__codigo"
        type="text"
        placeholder="Código de Seguridad"
        value={props.tarjeta.cvv}
        onChange={props.onCvvTarjetaChange}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key) || !(event.target.value.length < 3)) {
            event.preventDefault();
          }
        }}
      />
      {props.errorTarjeta.errorTarjetaCvv ? (
        <p className="c-tarjeta__error c-tarjeta__error--cvv">
          * El CVV ingresado no es válido
        </p>
      ) : (
        <p className="c-tarjeta__error c-tarjeta__error--transparent"> a</p>
      )}
    </div>
  );
};

export default Tarjeta;
