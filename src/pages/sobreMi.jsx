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
          <div> <strong>Nombre:</strong> Carlos André Morales Coy</div>
          <div><strong>Edad:</strong> 19 años</div>
          <div><strong>Ocupación:</strong> Estudiante</div>
          <div><strong>Correo Electrónico:</strong> moralesc21365@gmail.com</div>
          <div><strong>Número de Teléfono:</strong> 42324060</div>
        </div>
        <img
          className="sobremi-img"
          src="/img/fotoActualizada.jpeg"
          alt="Foto de Carlos André Morales Coy"
        />
      </div>
      <div className="sobremi-subtitulo">Acerca de mí</div>
      <div className="sobremi-descripcion">
        Hola, mi nombre es Carlos y soy un desarrollador web.
        <div>Sé realizar tanto backend como frontend, aunque me desempeño mejor realizando backend.</div>
        <div><strong>Algunas de mis cualidades son:</strong></div>
        <div>ser amable, honesto, responsable, solidario, empático, alguien que puede trabajar en equipo.</div> 
         <div><strong>Algunas de mis capacidades son:</strong></div>
         <div>creación de APIs con JS, HTML y CSS, creación de APIs con el stack MERN, manejo de bases de datos relacionales y no relacionales.</div>
         <div>Mis metas actualmente son poder ir a la universidad y lograr graduarme de la carrera de ingeniería en sistemas.</div>
      </div>
    </>
  );
};

export default SobreMi;