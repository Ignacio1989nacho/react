import React from 'react'
import EscritorioSoftwareInfo from "./EscritorioSoftwareInfo";
import Footer from './Footer';
export const Movile = () => {
  return (
    <div>
      <h1>Movile</h1>

      <EscritorioSoftwareInfo
        descripcionImagen1="App Movile,Estilo personalizado,Info coneccion Locos x el futbol."
        descripcionImagen2="App Movile,Estilo personalizado,Info coneccion Locos x el futbol."
        descripcionImagen3="App Movile,Estilo personalizado,Info coneccion Locos x el futbol."
      />
      <br />
      <Footer imagenFooter="Email" />
    </div>
  );
}

export default Movile
