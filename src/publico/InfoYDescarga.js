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
              En esta sección brindamos al usuario un demo de los sistemas ya
              realizados, para su mejor comprensión.
              <br />Y pedir o realizar futuras modificaciones.
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
            <p>
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
            <p>
              <a class="btn btn-secondary" href="#">
                View details &raquo;
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
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <a class="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>
        </div>
      </div>
      <br />
      <Footer imagenFooter="Email" />
    </div>
  );
}

export default InfoYDescarga
