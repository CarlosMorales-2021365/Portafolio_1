import React from 'react'
import Navbar from "../components/navbar";
import "../../public/styles/contacto.css";

export const contacto = () => {
  return (
    <>
    <Navbar />
    <div className="contacto-container">
  <div className="contacto-titulo">Contacto</div>
  <div className="contacto-descripcion">
    Aquí encontrarás mis perfiles de LinkedIn y Transdoc en donde podrás contactarme. Toma en cuenta que Transdoc al ser un portal de empleos no se puede obtener un enlace por lo que se adjunta la información de perfil y una captura.
  </div>
</div>
<div className="contacto-perfiles">
  <div className="contacto-perfil">
    <div className="contacto-perfil-titulo">LinkedIn</div>
    <div className="contacto-perfil-titulo">Nombre: Carlos André Morales Coy</div>
    <a href="http://www.linkedin.com/in/carlos-andré-morales-coy-348500367" target="_blank" rel="noopener noreferrer">
      <img src="/img/linkedin.png" alt="LinkedIn" className="contacto-img" />
    </a>
  </div>
  <div className="contacto-perfil">
    <div className="contacto-perfil-titulo">Transdoc</div>
    <div className="contacto-perfil-titulo">Nombres: Carlos André </div>
    <div className="contacto-perfil-titulo">Apellidos: Morales Coy</div>
    <img src="/img/transdoc.png" alt="Transdoc" className="contacto-img transdoc" />
  </div>
</div>
    </>
    
  )
}

export default contacto; 
