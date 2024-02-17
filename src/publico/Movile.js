import React from 'react'
import EscritorioSoftwareInfo from "./EscritorioSoftwareInfo";
import Footer from './Footer';
export const Movile = () => {
  return (
    <div>
      <h1>Movile</h1>

      <EscritorioSoftwareInfo
        descripcionImagen1="App Movile ejemplo, Conección a su propia base de datos, la misma recolecta la información necesaria desde el programa de control de linea, es decir los dos programas estan conectados entre si."
        video="https://player.vimeo.com/video/914028960?h=f3002547fc"
      />
      <EscritorioSoftwareInfo
        descripcionImagen1="App Movile ejemplo, Conección a su propia base de datos, la misma recolecta la información necesaria desde la agenda digital de pacientes, es decir los dos programas estan conectados entre si."
        video="https://player.vimeo.com/video/914028154?h=3f89497fc5"
      />
      <br />
      <Footer imagenFooter="Email" />
    </div>
  );
}

export default Movile
