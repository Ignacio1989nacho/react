import React from 'react'
import EscritorioSoftwareInfo from "./EscritorioSoftwareInfo";
import Footer from './Footer';
export const Movile = () => {
  return (
    <div>
      <h1>Movile</h1>

      <EscritorioSoftwareInfo
        descripcionImagen1="App Movile ejemplo, Conección a su propia base de datos, la misma recolecta la información necesaria desde el programa de control de linea, es decir los dos programas estan conectados entre si."
        imagen="infoWebLogistica"
      />
      <EscritorioSoftwareInfo
        descripcionImagen1="App Movile ejemplo, Conección a su propia base de datos, la misma recolecta la información necesaria desde el programa de calculadora de costos, es decir los dos programas estan conectados entre si."
        imagen="infoWebIndustria"
      />
      <br />
      <Footer imagenFooter="Email" />
    </div>
  );
}

export default Movile
