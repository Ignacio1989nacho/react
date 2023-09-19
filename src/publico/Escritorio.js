import React from 'react'
import EscritorioSoftwareInfo from './EscritorioSoftwareInfo';
import "../csspublico/Escritorio.css";
import Footer from './Footer';

export const Escritorio = () => {
  return (
    <div>
      <h1>Escritorio</h1>
      <EscritorioSoftwareInfo
        descripcionImagen1="Software de escritorio, Estilo personalizado, Calculadora de costos en Industria. Conección a base de datos estilo nube o local. Propia definida por el cliente."
        descripcionImagen2="Software de escritorio, Estilo personalizado, Control de lineas en Logistica. Conección a base de datos estilo nube o local. Propia definida por el cliente."
        descripcionImagen3="Software de escritorio, Estilo personalizado, Sistema Agenda Medica."
        imagen="gm"
        imagen2="logistica"
        imagen3="formularioMedico"
      />
      <br />
      <Footer imagenFooter="Email" />
    </div>
  );
}

export default Escritorio
