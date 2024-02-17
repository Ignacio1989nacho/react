import React from 'react'
import "../csspublico/TarjetaDatos.css"

export const TarjetaDatos = (props) => {
  return (
    <div className="">
      <div class="datos-contacto">
         <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-secundary">
          <div class="card-header py-3 text-bg-primary border-primary">
            <h4 class="my-0 fw-normal">IGNACIO DI PARDO</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">DEV</h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>BACKEND y FRONTEND </li>
              <li>Email: dipardodev@gmail.com</li>
            </ul>
          
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default TarjetaDatos
