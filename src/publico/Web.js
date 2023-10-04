import React from 'react'
import EscritorioSoftwareInfo from "./EscritorioSoftwareInfo";
import Footer from './Footer';
export const Web = () => {
  return (
    <div>
      <h1>Web</h1>
      <EscritorioSoftwareInfo
        descripcionImagen1="Pagina Web, Estilo personalizado, Venta digital."
        descripcionImagen2="Pagina Web, Estilo personalizado, InfoWeb/Porfolio."
        descripcionImagen3="Pagina Web, Estilo personalizado, Foro/Blog."
        imagen="lasmechislenceria"
        imagen2="porfolioej"
        imagen3="loginWeb"
      />
      <br />
      <Footer imagenFooter="Email" />
    </div>
  );
}

export default Web
