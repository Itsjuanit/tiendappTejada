import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import Marketapp from "../Components/Marketapp.png"

const Navbar = () => {
  return (
    <>
      <nav>
        <div class="nav-wrapper grey darken-4">
          <a href="https::/hola.com" class="brand-logo">
            <img src={Marketapp} alt="Logo de Marketapp" />
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Tienda</a>
            </li>
            <li>
              <a href="badges.html">¿Quienes somos?</a>
            </li>
            <li>
              <a href="collapsible.html">Ayuda</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
