import React from "react";
import "../csspublico/Forum.css";

import TarjetaDatos from "./TarjetaDatos";
const Forum = (props) => {
  return (
    <div className="display-flex">
      <div className="display-flex-start">
        <TarjetaDatos imagen = "tarjeta" />
      </div>
      <div className="mb-3 tam-div-dato">
        <label for="exampleFormControlInput1 " className="form-label ">
          EMAIL:
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />

        <label for="exampleFormControlTextarea1" className="form-label">
          {props.consulta}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button classNameName="btn boton" id="BotonClick">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Forum;
