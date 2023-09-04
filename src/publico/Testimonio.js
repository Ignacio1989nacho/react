import React from "react";
import "../csspublico/Testimonio.css";
import "../csspublico/Imagen.css";
export const Testimonio = (props) => {
  return (
    <div classNameName="contenedor-general">
      <img className="img1"
        
        src={require(`../Imagenes/${props.imagen}.png`)}
      />
    </div>
  );
};

export default Testimonio;
