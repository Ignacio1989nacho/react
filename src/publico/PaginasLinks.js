import React from 'react'
import "../csspublico/PaginasLink.css"
const PaginasLinks = (props) => {
  return (
    <div className="ajuste-link-medio">
      <a href={props.link} target="_blank">
        {props.nombre}
      </a>
    </div>
  );
};

export default PaginasLinks;
