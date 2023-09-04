import React from "react";
import "../csspublico/Escritorio.css";

export const EscritorioSoftwareInfo = (props) => {
  return (
    <div className="col ">
      <div className="card shadow-sm borde-card margin-bot-imagenes-descripcion display">
        <svg
          className="bd-placeholder-img card-img-top borde-card"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c" />
        </svg>
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
        <svg
          className="bd-placeholder-img card-img-top borde-card"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c" />
        </svg>
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
        <svg
          className="bd-placeholder-img card-img-top borde-card"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c" />
        </svg>
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
