import React from 'react'
import EscritorioGif from './EscritorioGif';
import "../csspublico/Escritorio.css";
import Footer from './Footer';

export const Escritorio = () => {
  return (
    <div>
      <h1>Escritorio</h1>

      <EscritorioGif
        imagen="gm"
        descripcionImagen1="Software de escritorio, Estilo personalizado, Calculadora de costos en Industria. Conección a base de datos estilo nube o local. Propia definida por el cliente."
      />
      <EscritorioGif
        imagen="logistica"
        descripcionImagen1="Software de escritorio, Estilo personalizado, Control de lineas en Logistica. Conección a base de datos estilo nube o local. Propia definida por el cliente."
      />
      <EscritorioGif
        imagen="formularioMedico"
        descripcionImagen1="Software de escritorio, Estilo personalizado, Sistema Agenda Medica."
      />
      <br />
      <Footer imagenFooter="Email" />
    </div>
  );
}

export default Escritorio
