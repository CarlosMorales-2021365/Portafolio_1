import React from "react";
import "../../public/styles/navbar.css";

const Navbar = () => (
  <nav className="navbar">
  <div className="navbar-logo">Portafolio Carlor Morales</div>
  <ul className="navbar-links">
    <li><a href="/">Inicio</a></li>
    <li><a href="/sobremi">Sobre mí</a></li>
    <li><a href="/proyectos">Proyectos</a></li>
    <li><a href="/habilidades">Habilidades</a></li>
    <li><a href="#contact">Contacto</a></li>
  </ul>
</nav>
);

export default Navbar;