import React from "react";
import "../../public/styles/navbar.css";

const Navbar = () => (
  <nav className="navbar">
  <div className="navbar-logo">Portafolio Carlor Moales</div>
  <ul className="navbar-links">
    <li><a href="#about">Sobre mí</a></li>
    <li><a href="#projects">Proyectos</a></li>
    <li><a href="#skills">Habilidades</a></li>
    <li><a href="#contact">Contacto</a></li>
  </ul>
</nav>
);

export default Navbar;