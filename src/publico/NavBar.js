import React from 'react'
import { Outlet,Link } from 'react-router-dom';
import Escritorio from "./Escritorio";
import Web from './Web';
import Movile from './Movile';
import {  Routes, Route } from "react-router-dom";
import "../csspublico/NavBar.css";
import ElementoPaginaGeneral from './ElementoPaginaGeneral';
import InfoYDescarga from './InfoYDescarga';


const NavBar = (props) => {
  return (
    <div className="div-borde">
      <nav
        class="imagen-fondo borde navbar navbar-expand-lg navbar bg-ligthblue border-bottom border-body"
        data-bs-theme="dark"
      >
        <div class="container-fluid i">
          <img
            className="tama-img-ico"
            src={require(`../Imagenes/${props.imagen}.ico`)}
          />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" className="color-font descrip-text">
                  Pagina Principal
                </Link>
              </li>
              <li class="nav-item ">
                <Link to="/info" className="color-font descrip-text">
                  Info y Descarga{" "}
                </Link>
              </li>
              <li class="nav-item dropdown ">
                <a
                  class="descrip-text  dropdown-toggle  "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sistemas
                </a>
                <ul class="dropdown-menu bg-ligthblue border-li ">
                  <li>
                    <Link to="/escritorio" className="color-font ">
                      Escritorio{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/web" className="color-font ">
                      Webs{" "}
                    </Link>
                  </li>

                  <li>
                    <Link to="/movile" className="color-font ">
                      Movile{" "}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <img
              className="tama-img-ico margin-segunda-imagen"
              src={require(`../Imagenes/${props.imagen}.ico`)}
            />
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<ElementoPaginaGeneral />} />
        <Route path="/escritorio" element={<Escritorio />} />
        <Route path="/movile" element={<Movile />} />
        <Route path="/web" element={<Web />} />
        <Route path="/info" element={<InfoYDescarga />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default NavBar
