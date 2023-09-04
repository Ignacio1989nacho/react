import React from "react";

const Footer = (props) => {
  const dia = new Date().getFullYear();
  return (
    <div classNameName="tam-foot color-footer fut">
      <footer classNameName=" d-flex flex-wrap justify-content-between align-items-center  ">
        <div classNameName=" col-md-4 d-flex align-items-center">
          <span classNameName="mb-3 mb-md-0 text-body-secondary">
            &copy; {dia} LotoSoftware
          </span>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <a
              href="/"
              classNameName="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <img src={require(`../Imagenes/${props.imagenFooter}.ico`)} />
            </a>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
