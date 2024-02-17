import React from "react";
import "../csspublico/Escritorio.css";
import "../csspublico/Imagen.css";

export const EscritorioSoftwareInfo = (props) => {
  return (
    <div className="col ">
      <div className="card shadow-sm borde-card margin-bot-imagenes-descripcion display">
        <div className="">
          <iframe
            className="tam-video"
            title="vimeo-player"
            src={props.video}
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      
        <div className="card-body">
          {props.descripcionImagen1}

          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscritorioSoftwareInfo;
