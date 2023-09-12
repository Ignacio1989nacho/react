import React from 'react'
import Testimonio from "./Testimonio";
import Main from "./Main";
import Footer from "./Footer";
import Forum from "./Forum";
import NavBar from "./NavBar";

export const ElementoPaginaGeneral = () => {
  return (
    <div>
      
      <h1>LOTO SISTEMAS</h1>
      <Testimonio imagen="loto_fondo_web" />
      <Main
        imagen=""
        p1="LOGISTICO"
        p2="COMERCIO"
        p3="INDUSTRIA"
        p4="PERSONALIZADO"
        p5="BÁSICO"
        imagen1="appImagen"
        imagen2="loginImagen"
        imagen3="webImagen"
      />
      <Forum email="" consulta="Consulta:" />
      <Footer imagenFooter="Email" />
    </div>
  );
}

export default ElementoPaginaGeneral
