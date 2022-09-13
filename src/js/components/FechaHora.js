import React from "react";
import "../../css/style.css";

const FechaHora = (props) => {
  return (
    <div className="c-fecha-hora">
      <h1 className="c-fecha-hora__titulo">
        Ingresá la fecha y hora de recepción
      </h1>
      <p className="c-fecha-hora__label c-fecha-hora__label--fecha">Fecha: </p>
      <input
        className="c-fecha-hora__fecha"
        type="date"
        value={props.recibida.fecha}
        onChange={props.onFechaRecibidaChange}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />
      {props.error.errorFecha ? (
        <p className="c-fecha-hora__error c-fecha-hora__error--fecha">
          * La fecha ingresada no es válida
        </p>
      ) : (
        <p className="c-fecha-hora__error c-fecha-hora__error--transparent">
          {" "}
          a
        </p>
      )}

      <p className="c-fecha-hora__label c-fecha-hora__label--hora">Hora: </p>
      <input
        className="c-fecha-hora__hora"
        type="time"
        min="08:00"
        max="23:00"
        placeholder="00:00"
        value={props.recibida.hora}
        onChange={props.onHoraRecibidaChange}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />
      {props.error.errorHora ? (
        <p className="c-fecha-hora__error c-fecha-hora__error--hora">
          * La Hora ingresada no es válida
        </p>
      ) : (
        <p className="c-fecha-hora__error c-fecha-hora__error--transparent">
          {" "}
          a
        </p>
      )}
    </div>
  );
};

export default FechaHora;
