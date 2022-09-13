import Descripcion from "./screens/Descripcion";
import Navbar from "./components/Navbar";
import Busca from "./screens/Busca";
import Entrega from "./screens/Entrega";
import Resumen from "./screens/Resumen";
import Recibida from "./screens/Recibida";
import Checkout from "./components/Checkout";

import { React, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [pedido, setPedido] = useState({
    descripcion: "",
    imagen: "",
    busca: {
      calle: "",
      nro: "",
      ciudad: "cordoba",
      observacion: "",
    },
    entrega: {
      calle: "",
      nro: "",
      ciudad: "cordoba",
      observacion: "",
    },
    tarjeta: {
      numero: "",
      nombre: "",
      mmaa: "",
      cvv: "",
    },
    efectivo: 0,
    precio: 0,
    distancia: 1500,
    recibida: {
      fecha: "",
      hora: "",
    },
  });

  const [isDisplayed, setIsDisplayed] = useState(false);

  const onDescripcionChange = (nuevaDescripcion) => {
    let op = pedido;
    op.descripcion = nuevaDescripcion.target.value;
    setPedido({ ...op });
  };

  const onImagenChange = (nuevaImagen) => {
    let op = pedido;
    op.imagen = nuevaImagen.target.files[0];
    setPedido({ ...op });
  };

  const onBuscaCalleChange = (nuevaCalle) => {
    let op = pedido;
    op.busca.calle = nuevaCalle.target.value;
    setPedido({ ...op });
  };

  const onBuscaNroChange = (nuevoNro) => {
    let op = pedido;
    op.busca.nro = nuevoNro.target.value.replace(/\D/g, "");
    setPedido({ ...op });
  };
  const onBuscaCiudadChange = (nuevaCiudad) => {
    let op = pedido;
    op.busca.ciudad = nuevaCiudad.target.value;
    op.entrega.ciudad = nuevaCiudad.target.value;
    setPedido({ ...op });
  };
  const onBuscaObservacionChange = (nuevaObservacion) => {
    let op = pedido;
    op.busca.observacion = nuevaObservacion.target.value;
    setPedido({ ...op });
  };

  const onEntregaCalleChange = (nuevaCalle) => {
    let op = pedido;
    op.entrega.calle = nuevaCalle.target.value;
    setPedido({ ...op });
  };

  const onEntregaNroChange = (nuevoNro) => {
    let op = pedido;
    op.entrega.nro = nuevoNro.target.value.replace(/\D/g, "");
    setPedido({ ...op });
  };

  const onEntregaObservacionChange = (nuevaObservacion) => {
    let op = pedido;
    op.entrega.observacion = nuevaObservacion.target.value;
    setPedido({ ...op });
  };

  const onNumeroTarjetaChange = (nuevoNumero) => {
    let op = pedido;

    op.tarjeta.numero = nuevoNumero.target.value
      .replace(/\W/gi, "")
      .replace(/(.{4})/g, "$1 ");

    setPedido({ ...op });
  };

  const onNombreTarjetaChange = (nuevoNombre) => {
    let op = pedido;
    op.tarjeta.nombre = nuevoNombre.target.value;
    setPedido({ ...op });
  };

  const onMmaaTarjetaChange = (nuevoMmaa) => {
    let op = pedido;
    let value = nuevoMmaa.target.value
      .replace(
        /^([1-9]\/|[2-9])$/g,
        "0$1/" // 3 > 03/
      )
      .replace(
        /^(0[1-9]|1[0-2])$/g,
        "$1/" // 11 > 11/
      )
      .replace(
        /^([0-1])([3-9])$/g,
        "0$1/$2" // 13 > 01/3
      )
      .replace(
        /^(0?[1-9]|1[0-2])([0-9]{2})$/g,
        "$1/$2" // 141 > 01/41
      )
      .replace(
        /^([0]+)\/|[0]+$/g,
        "0" // 0/ > 0 and 00 > 0
      )
      .replace(
        /[^\d\/]|^[\/]*$/g,
        "" // To allow only digits and `/`
      )
      .replace(
        /\/\//g,
        "/" // Prevent entering more than 1 `/`
      );

    // console.log(value.substring(0, 2));
    // console.log(value.substring(3, 5));

    op.tarjeta.mmaa = value;
    setPedido({ ...op });
  };

  const onCvvTarjetaChange = (nuevoCvv) => {
    let op = pedido;
    op.tarjeta.cvv = nuevoCvv.target.value;

    setPedido({ ...op });
  };

  const onMontoEfectivoChange = (nuevoMonto) => {
    let op = pedido;
    op.efectivo = Number(nuevoMonto.target.value);

    setPedido({ ...op });
  };

  const onFechaRecibidaChange = (nuevaFecha) => {
    let op = pedido;
    op.recibida.fecha = nuevaFecha.target.value;
    setPedido({ ...op });
  };

  const onHoraRecibidaChange = (nuevaHora) => {
    let op = pedido;
    op.recibida.hora = nuevaHora.target.value;

    setPedido({ ...op });
  };

  useEffect(() => {
    let op = pedido;
    if (
      pedido.entrega.calle === "Bv. Chacabuco" &&
      pedido.busca.calle === "Rondeau" &&
      pedido.entrega.nro === "787" &&
      pedido.busca.nro === "300"
    ) {
      op.distancia = 400;
    } else if (
      pedido.entrega.calle === "Bv. Chacabuco" &&
      pedido.busca.calle === "Lima" &&
      pedido.entrega.nro === "787" &&
      pedido.busca.nro === "300"
    ) {
      op.distancia = 900;
    }

    setPedido({ ...op });
  }, [isDisplayed]);

  useEffect(() => {
    let op = pedido;
    let dis = op.distancia;

    if (dis < 500) {
      dis = 500;
    }

    op.precio = Math.ceil(dis / 500) * 100;

    setPedido({ ...op });
  }, [pedido.distancia]);

  return (
    <BrowserRouter className="app">
      <Navbar></Navbar>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Descripcion
              descripcion={pedido.descripcion}
              imagen={pedido.imagen}
              onDescripcionChange={onDescripcionChange}
              onImagenChange={onImagenChange}
            />
          }
        ></Route>
        <Route
          path="/busca"
          element={
            <Busca
              contexto={pedido.busca}
              onCalleChange={onBuscaCalleChange}
              onNroChange={onBuscaNroChange}
              onCiudadChange={onBuscaCiudadChange}
              onObservacionChange={onBuscaObservacionChange}
            />
          }
        ></Route>
        <Route
          path="/entrega"
          element={
            <Entrega
              contexto={pedido.entrega}
              onCalleChange={onEntregaCalleChange}
              onNroChange={onEntregaNroChange}
              onObservacionChange={onEntregaObservacionChange}
              onCiudadChange={onBuscaCiudadChange}
              setIsDisplayed={setIsDisplayed}
            />
          }
        ></Route>
        <Route
          path="/resumen"
          element={
            <Resumen
              tarjeta={pedido.tarjeta}
              onNumeroTarjetaChange={onNumeroTarjetaChange}
              onNombreTarjetaChange={onNombreTarjetaChange}
              onMmaaTarjetaChange={onMmaaTarjetaChange}
              onCvvTarjetaChange={onCvvTarjetaChange}
              onMontoEfectivoChange={onMontoEfectivoChange}
              efectivo={pedido.efectivo}
              precio={pedido.precio}
              setIsDisplayed={setIsDisplayed}
            />
          }
        ></Route>
        <Route
          path="/recibida"
          element={
            <Recibida
              recibida={pedido.recibida}
              onFechaRecibidaChange={onFechaRecibidaChange}
              onHoraRecibidaChange={onHoraRecibidaChange}
            />
          }
        ></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
