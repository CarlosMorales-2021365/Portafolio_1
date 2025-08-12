import React from "react";
import Navbar from "../components/navbar";
import "../../public/styles/home.css";

const Homepage = () => (
  <>
    <Navbar />
    <div className="Titulo">Bienvenido a mi portafolio</div>
    <div className="texto-contenedor">
      <div className="texto1">Aqui podras encontrar toda la informacion sobre mi preparacion profecional y mi persona</div>
      <div className="texto1">Y recuerda</div>
        <strong>
            <div className="texto1">No se trata solo de escribir código, se trata de crear soluciones.</div>
        </strong>
    </div>
  </>
);

export default Homepage;