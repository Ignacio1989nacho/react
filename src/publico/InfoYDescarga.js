import React from 'react'
import "../csspublico/infoYDescarga.css";
import Footer from './Footer';
const InfoYDescarga = () => {
  return (
    <div className="">
      <h1 className="ajustar-titulo">Info y Descarga</h1>
      <div class="container marketing ">
        <div class="row">
          <div class="col-lg-4">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              />
            </svg>
            <h2 class="fw-normal">Heading</h2>
            <p>
              Demo calculadora básica de costo.
              <br />
            </p>
            <p>
              <a
                className=""
                class="btn btn-secondary"
                href="https://drive.google.com/uc?id=16mVfU2yl7i0_9_aapPA7Snxi1dYCr_x7&export=download"
              >
                Descarga DEMO Calc Costo
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              />
            </svg>
            <h2 class="fw-normal">Heading</h2>
            <p>Demo basico control de lineas de carga en logistica.</p>
            <p>
              <a
                class="btn btn-secondary"
                href="https://drive.google.com/uc?id=1VYguBtlDC50QBn7cY9Se29msi8HFYj_l&export=download"
              >
                Descarga DEMO Control Linea
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              />
            </svg>
            <h2 class="fw-normal">Heading</h2>
            <p>Agenda digital de clientes.</p>
            <p>
              <a class="btn btn-secondary" href="#">
                Descargar DEMO Agenda Digital.
              </a>
            </p>
          </div>
        </div>
      </div>
      <br />
      <p>
        <strong>IMPORTANTE:</strong> PARA PODER EJECUTAR LOS PROGRAMAS NECESITA
        TENER INSTALADO JAVA
      </p>
      <Footer imagenFooter="Email" />
    </div>
  );
}

export default InfoYDescarga
