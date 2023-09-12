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
        imagen="mechis"
        imagen2="ruedra_cargando"
        imagen3="ruedra_cargando"
      />
      <br />
      <Footer imagenFooter="Email" />
    </div>
  );
}

export default Web
