import React from "react";
import "../../css/style.css";

const FormDireccion = (props) => {
  return (
    <form className="c-form-direccion">
      <label className="c-form-direccion__label" htmlFor="entrega">
        {props.titulo}
      </label>
      <input
        className="c-form-direccion__calle"
        id=""
        type="text"
        placeholder="Calle"
        value={props.contexto.calle}
        onChange={props.onCalleChange}
        onKeyPress={(event) => {
          if (!/^[.a-zA-Z\u00C0-\u00FF ]*$/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />
      {props.error.errorCalle ? (
        <p className="c-form-direccion__error c-form-direccion__error--calle">
          {" "}
          * Debe indicar la calle
        </p>
      ) : (
        <p className="c-form-direccion__error c-form-direccion__error--transparent">
          a
        </p>
      )}
      <input
        className="c-form-direccion__nro"
        type="text"
        placeholder="Nro"
        value={props.contexto.nro}
        onChange={props.onNroChange}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />
      {props.error.errorNro ? (
        <p className="c-form-direccion__error c-form-direccion__error--nro">
          {" "}
          * Debe indicar el Nro.
        </p>
      ) : (
        <p className="c-form-direccion__error c-form-direccion__error--transparent">
          a
        </p>
      )}

      {props.disable ? (
        <select
          className="c-form-direccion__dropdown c-form-direccion__dropdown--disabled"
          value={props.contexto.ciudad}
          readOnly
          disabled
        >
          <option value="cordoba">Córdoba</option>
          <option value="san francisco">San Francisco</option>
          <option value="villa gral belrano">Villa Gral. Belgrano</option>
        </select>
      ) : (
        <select
          className="c-form-direccion__dropdown"
          value={props.contexto.ciudad}
          onChange={props.onCiudadChange}
        >
          <option value="cordoba">Córdoba</option>
          <option value="san francisco">San Francisco</option>
          <option value="villa gral belrano">Villa Gral. Belgrano</option>
        </select>
      )}

      <textarea
        className="c-form-direccion__observaciones"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Observaciones..."
        value={props.contexto.observacion}
        onChange={props.onObservacionChange}
      ></textarea>
    </form>
  );
};

export default FormDireccion;
