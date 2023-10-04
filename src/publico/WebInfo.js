import React from 'react'
import "../csspublico/Escritorio.css";
import "../csspublico/Imagen.css";


const WebInfo = (props) => {
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
            <div className="btn-group"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebInfo
