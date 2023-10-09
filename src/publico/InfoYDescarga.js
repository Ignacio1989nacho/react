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
                href="https://drive.google.com/uc?id=1VYguBtlDC50QBn7cY9Se29msi8HFYj_l&export=download"
              >
                Descarga DEMO Control Linea
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
        <strong className="colorf">IMPORTANTE:</strong> PARA PODER EJECUTAR LOS
        PROGRAMAS NECESITA TENER INSTALADO JAVA
        <a
          className="item-centro"
          class="btn btn-secondary"
          href="https://www.java.com/es/download/ie_manual.jsp"
          taget="_blank"
        >
          DOWNLOAD JAVA JRE 8.0
        </a>
      </p>

      <Footer imagenFooter="Email" />
    </div>
  );
}

export default InfoYDescarga
