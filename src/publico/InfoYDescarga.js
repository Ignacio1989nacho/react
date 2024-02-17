import React from 'react'
import "../csspublico/infoYDescarga.css";
import Footer from './Footer';
const InfoYDescarga = (props) => {
  return (
    <div className="">
      <h1 className="ajustar-titulo">Info y Descarga</h1>

      <div class="container marketing ">
        <div class="row">
          <div class="col-lg-4">
            <div className="esfera">
              <img
                className="imagen1"
                src={require(`../Imagenes/${props.imagen2}.jpg`)}
                alt="imagen"
              />
            </div>

            <p>Demo calculadora básica de costo.</p>

            <p>
              <a
                className=""
                class="btn btn-secondary"
                href="https://drive.google.com/uc?id=16mVfU2yl7i0_9_aapPA7Snxi1dYCr_x7&export=download"
              >
                <span>👉</span>
                Descarga DEMO Calc Costo para PC
                <span>👈</span>
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <div className="esfera">
              <img
                className="imagen1"
                src={require(`../Imagenes/${props.imagen1}.jpg`)}
                alt="imagen"
              />
            </div>

            <p>Demo basico control de lineas de carga en logistica.</p>
            <p>
              <a
                class="btn btn-secondary"
                href="https://drive.google.com/uc?id=1r1NuZKW_xmkWA7-0rWaeTgCE2lhYA5FJ&export=download"
              >
                <span>👉</span>
                Descarga DEMO Control Linea para PC<span>👈</span>
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <div className="esfera">
              <img
                className="imagen1"
                src={require(`../Imagenes/${props.imagen3}.jpg`)}
                alt="imagen"
              />
            </div>

            <p>Agenda digital de pacientes.</p>
            <p>
              <a class="btn btn-secondary" href="#">
                <span>👉</span>
                Descargar DEMO Agenda Digital para PC<span>👈</span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <br />
      <p>
        <strong className="colorf">IMPORTANTE:</strong> PARA PODER EJECUTAR LOS
        PROGRAMAS NECESITA TENER INSTALADO JAVA
        <a
          className="item-centro"
          class="btn btn-secondary"
          href="https://www.java.com/es/download/ie_manual.jsp"
          taget="_blank"
        >
          <span>👉</span>
          DOWNLOAD JAVA JRE 8.0
          <span>👈</span>
        </a>
      </p>

      <Footer imagenFooter="Email" />
    </div>
  );
}

export default InfoYDescarga
