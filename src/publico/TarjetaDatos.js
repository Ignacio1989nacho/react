import React from 'react'
import "../csspublico/TarjetaDatos.css"

export const TarjetaDatos = (props) => {
  return (
    <div className="">
      <div class="datos-contacto">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

        </div>
        
        <img src={require(`../Imagenes/${props.imagen}.png`)} atl="imagen tarjeta"/>
      
      </div>
    </div>
  );
}

export default TarjetaDatos
