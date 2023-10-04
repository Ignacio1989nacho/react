import React from "react";
import "../csspublico/Escritorio.css";
import "../csspublico/Imagen.css";

export const EscritorioSoftwareInfo = (props) => {
  return (
    <div className="col ">
      <div className="card shadow-sm borde-card margin-bot-imagenes-descripcion display">
        <img
          className="borde-imagen flex-imagen"
          src={require(`../Imagenes/${props.imagen}.gif`)}
          alt="Imagen aqui"
        />

        <div className="card-body">
          {props.descripcionImagen1}

          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a href="https://lasmechis.netlify.app/" target="_blank">
                Las Mechis.
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow-sm borde-card margin-bot-imagenes-descripcion display">
        <img
          className="borde-imagen flex-imagen"
          src={require(`../Imagenes/${props.imagen2}.gif`)}
          alt="Imagen aqui"
        />
        <div className="card-body">
          {props.descripcionImagen2}
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a href="https://dipardodev.netlify.app/" target="_blank">
                Porfolio.
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow-sm borde-card margin-bot-imagenes-descripcion display">
        <img
          className="borde-imagen flex-imagen"
          src={require(`../Imagenes/${props.imagen3}.gif`)}
          alt="Imagen aqui"
        />
        <div className="card-body">
          {props.descripcionImagen3}
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscritorioSoftwareInfo;
