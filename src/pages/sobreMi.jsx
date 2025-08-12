import React from "react";
import Navbar from "../components/navbar";
import "../../public/styles/sobremi.css";

const SobreMi = () => {
  return (
    <>
      <Navbar />
      <div className="sobremi-titulo">Desarrollador web</div>
      <div className="sobremi-main">
        <div className="sobremi-info">
          <div>Nombre: Carlos André Morales Coy</div>
          <div>Edad: 19 años</div>
          <div>Ocupación: Estudiante</div>
          <div>Correo Electrónico: moralesc21365@gmail.com</div>
          <div>Número de Teléfono: 42324060</div>
        </div>
        <img
          className="sobremi-img"
          src="/img/fotoActualizada.jpeg"
          alt="Foto de Carlos André Morales Coy"
        />
      </div>
      <div className="sobremi-subtitulo">Acerca de mí</div>
      <div className="sobremi-descripcion">
        Hola, mi nombre es Carlos y soy un desarrollador web. Sé realizar tanto backend como frontend, aunque me desempeño mejor realizando backend.
        Algunas de mis cualidades son: ser amable, honesto, responsable, solidario, empático, alguien que puede trabajar en equipo.
        Algunas de mis capacidades son: creación de APIs con JS, HTML y CSS, creación de APIs con el stack MERN, manejo de bases de datos relacionales y no relacionales.
        Mis metas actualmente son poder ir a la universidad y lograr graduarme de la carrera de ingeniería en sistemas.
      </div>
    </>
  );
};

export default SobreMi;