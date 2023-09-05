import React from 'react'
import EscritorioSoftwareInfo from './EscritorioSoftwareInfo';
import "../csspublico/Escritorio.css";
import Footer from './Footer';

export const Escritorio = () => {
  return (
    <div>
      <h1>Escritorio</h1>
      <EscritorioSoftwareInfo
        descripcionImagen1="Software de escritorio, Estilo personalizado, Calculadora de costos en industria."
        descripcionImagen2="Software de escritorio, Estilo personalizado, Calculadora de costos en industria."
        descripcionImagen3="Software de escritorio, Estilo personalizado, Calculadora de costos en industria."
      />
      <br />
      <Footer imagenFooter="Email" />
    </div>
  );
}

export default Escritorio
