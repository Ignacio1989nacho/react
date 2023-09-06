import React from "react";
import "../csspublico/Footer.css";
const Footer = (props) => {
  const dia = new Date().getFullYear();
  return (
    <div classNameName="tam-foot color-footer ">
      <footer classNameName="d-flex flex-wrap justify-content-between align-items-center  ">
        <div id="fut" classNameName="col-md-4 d-flex align-items-center ">
          <span
            id="texto-span"
            classNameName="  mb-3 mb-md-0 text-body-secondary "
          >
            &copy; {dia} LotoSoftware
          </span>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <a
              href="/"
              classNameName="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <img
                className="imagen-footer"
                src={require(`../Imagenes/${props.imagenFooter}.ico`)}
              />
            </a>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
