import React from "react";
import "../csspublico/Escritorio.css";
import "../csspublico/Imagen.css";

export const EscritorioSoftwareInfo = (props) => {
  return (
    <div className="col ">
      <div className="card shadow-sm borde-card margin-bot-imagenes-descripcion display">
        <img
          className="borde-imagen flex-imagen"
          src={require(`../Imagenes/${props.imagen}.jpg`)}
          alt="Imagen aqui"
        />

        <div className="card-body">
          {props.descripcionImagen1}

          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow-sm borde-card margin-bot-imagenes-descripcion display">
        <img
          className="borde-imagen flex-imagen"
          src={require(`../Imagenes/${props.imagen2}.jpg`)}
          alt="Imagen aqui"
        />
        <div className="card-body">
          {props.descripcionImagen2}
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow-sm borde-card margin-bot-imagenes-descripcion display">
        <img
          className="borde-imagen flex-imagen"
          src={require(`../Imagenes/${props.imagen3}.jpg`)}
          alt="Imagen aqui"
        />
        <div className="card-body">
          {props.descripcionImagen3}
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscritorioSoftwareInfo;
