import React from 'react'
import WebInfo from './WebInfo';
import Footer from './Footer';
import PaginasLinks from './PaginasLinks';

export const Web = () => {
  return (
    <div>
      <h1>Web</h1>
      <WebInfo
        descripcionImagen1="Pagina Web, Estilo personalizado, Venta digital."
        imagen="lasmechislenceria"
      />
      <PaginasLinks link="https://lasmechis.netlify.app/" nombre="Las Mechis" />
      <WebInfo
        descripcionImagen1="Pagina Web, Estilo personalizado, InfoWeb/Porfolio."
        imagen="porfolioej"
      />
      <PaginasLinks
        link="https://dipardodev.netlify.app/"
        nombre="Porfolio"
      />
      <WebInfo
        descripcionImagen1="Pagina Web, Estilo personalizado, Foro/Blog/Red social."
        imagen="loginWeb"
      />

      <br />
      <Footer imagenFooter="Email" />
    </div>
  );
}

export default Web
