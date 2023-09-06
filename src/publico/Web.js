import React from 'react'
import EscritorioSoftwareInfo from "./EscritorioSoftwareInfo";
import Footer from './Footer';
export const Web = () => {
  return (
    <div>
      <h1>Web</h1>
      <EscritorioSoftwareInfo
        descripcionImagen1="Pagina Web, Estilo personalizado, Venta digital."
        descripcionImagen2="Pagina Web, Estilo personalizado, Foro/Blog."
        descripcionImagen3="Pagina Web, Estilo personalizado, InfoWeb/Porfolio."
        imagen="universo_violeta"
        imagen2="universo_violeta"
        imagen3="webPersonalizada"
      />
      <br />
      <Footer imagenFooter="Email" />
    </div>
  );
}

export default Web
