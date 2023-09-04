import React from "react";

import "../csspublico/Main.css";
export const Main = (props) => {
  return (
    <div classNameName="carrousel ">
      <p classNameName="info-sobre-imagen-carrousel">
        {props.p1} - {props.p2} - {props.p3} - {props.p4} - {props.p5}
      </p>
      <div id="carouselExampleIndicators" className="carousel slide active">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner imagen-carrousel ">
          <div className="carousel-item active">
            <img
              src={require(`../Imagenes/${props.imagen1}.jpg`)}
              className="container pad imagen-responsiva d-block w-10"
              alt="..."
            />
          </div>
          <div className="carousel-item ">
            <img
              src={require(`../Imagenes/${props.imagen2}.jpg`)}
              className="container pad imagen-responsiva d-block w-10"
              alt="..."
            />
          </div>
          <div className="carousel-item ">
            <img
              src={require(`../Imagenes/${props.imagen3}.jpg`)}
              className="container pad imagen-responsiva d-block w-10"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Main;
