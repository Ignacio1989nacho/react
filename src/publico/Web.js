import React from 'react'
import EscritorioSoftwareInfo from "./EscritorioSoftwareInfo";
import Footer from './Footer';
export const Web = () => {
  return (
    <div>
      <h1>Web</h1>
      <EscritorioSoftwareInfo
        descripcionImagen1="Pagina Web,Estilo personalizado,Venta digital online de ropa."
        descripcionImagen2="Pagina Web,Estilo personalizado,Venta digital online de medias."
        descripcionImagen3="Pagina Web,Estilo personalizado,Venta digital online foro."
      />
      <br />
      <Footer imagenFooter="Email" />
    </div>
  );
}

export default Web
