import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/style.css";
import camera from "../../resources/camera.svg";
import Button from "../components/Button";

const Descripcion = (props) => {
  const hiddenFileInput = React.useRef(null);

  const [error, setError] = useState({
    errorDescripcion: false,
    errorImagen: false,
  });

  let navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };

  const handleBoton = (e) => {
    const err = error;
    if (props.descripcion.trim().length === 0) {
      err.errorDescripcion = true;
      setError({ ...err });
    } else {
      err.errorDescripcion = false;
      setError({ ...err });
    }

    if (props.imagen.size * 1e-6 > 5.0) {
      err.errorImagen = true;
      setError({ ...err });
    } else if (props.imagen.type !== "image/jpeg") {
      err.errorImagen = true;
      setError({ ...err });
    } else {
      err.errorImagen = false;
      setError({ ...err });
    }

    if (props.imagen === "") {
      err.errorImagen = false;
      setError({ ...err });
    }

    if (!error.errorDescripcion && !error.errorImagen) {
      navigate("/busca");
    }
  };

  const routeBack = (e) => {
    navigate("/");
  };

  return (
    <div className="c-descripcion">
      <label className="c-descripcion__label" htmlFor="descripcion">
        ¿Qué querés pedir?
      </label>
      <textarea
        className="c-descripcion__textarea"
        name=""
        id="1"
        cols="30"
        rows="7"
        placeholder="Contanos lo que queres que te llevemos..."
        value={props.descripcion}
        onChange={props.onDescripcionChange}
      ></textarea>
      {error.errorDescripcion ? (
        <p className="c-descripcion__error">
          * La descripcion no puede estar vacía
        </p>
      ) : (
        <p></p>
      )}

      <button
        onClick={handleClick}
        className={`c-descripcion__button${
          props.imagen ? "-is-active c-descripcion__button" : ""
        }`}
      >
        <p className="c-descripcion__p">Subi una imagen (5MB)</p>
        <img className="c-descripcion__camera" src={camera} alt="camera" />
      </button>

      <input
        className="c-descripcion__image"
        type="file"
        accept="image/jpg"
        onChange={props.onImagenChange}
        ref={hiddenFileInput}
      />

      {error.errorImagen ? (
        <p className="c-descripcion__error">
          * La imagen debe ser .jpg y con tamaño menor a 5Mb
        </p>
      ) : (
        <p></p>
      )}

      <Button routeBack={routeBack} handleBoton={handleBoton} />
    </div>
  );
};

export default Descripcion;
