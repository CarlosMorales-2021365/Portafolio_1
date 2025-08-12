import React from "react";
import Navbar from "../components/navbar";
import "../../public/styles/proyectos.css";

const proyectos = [
  { imagen: "/img/captura 1.png" },
  { imagen: "/img/captura 2.png" },
  { imagen: "/img/captura 3.png" },
  { imagen: "/img/captura 4.png" },
  { imagen: "/img/captura 5.png" },
  { imagen: "/img/captura 6.png" },
  { imagen: "/img/captura 7.png" },
  { imagen: "/img/captura 8.png" },
  { imagen: "/img/captura 9.png" },
];

const Proyectos = () => {
  return (
    <>
      <Navbar />
      <div className="proyectos-titulo">Proyectos</div>
      <div className="proyectos-grid">
        {proyectos.map((proy, idx) => (
          <div
            className={`proyecto-card${proyectos.length % 2 !== 0 && idx === proyectos.length - 1 ? " proyecto-card-center" : ""}`}
            key={idx}
          >
            <div className="proyecto-header">
              {/* Puedes poner un título aquí si lo deseas */}
            </div>
            <img className="proyecto-img" src={proy.imagen} alt={`Proyecto ${idx + 1}`} />
            {/* Puedes poner una descripción aquí si lo deseas */}
          </div>
        ))}
      </div>
      <div className="proyectos-titulo">Aplicaciones</div>
      <div className="aplicaciones-section">
  <div className="aplicaciones-descripcion">
    Aquí están algunos de los proyectos que he desarrollado y almacenado en repositorios de GitHub.
  </div>
  <div className="aplicaciones-lista">
    <div className="aplicacion-card">
      <div className="aplicacion-nombre"><strong>Blog de aprendizaje:</strong></div>
      <div className="aplicacion-detalle">
        API para añadir comentarios a publicaciones ya establecidas sobre proyectos de años pasados.<br />
        Enlace Back: <a href="https://github.com/CarlosMorales-2021365/Blog_de_Aprendizaje" target="_blank" rel="noopener noreferrer">https://github.com/CarlosMorales-2021365/Blog_de_Aprendizaje</a><br />
        Enlace Front: <a href="https://github.com/CarlosMorales-2021365/Front-Blog" target="_blank" rel="noopener noreferrer">https://github.com/CarlosMorales-2021365/Front-Blog</a>
      </div>
    </div>
    <div className="aplicacion-card">
      <div className="aplicacion-nombre"><strong>Venta Online:</strong></div>
      <div className="aplicacion-detalle">
        API para la gestión de ventas de productos.<br />
        Enlace: <a href="https://github.com/CarlosMorales-2021365/Venta_Online" target="_blank" rel="noopener noreferrer">https://github.com/CarlosMorales-2021365/Venta_Online</a>
      </div>
    </div>
    <div className="aplicacion-card">
      <div className="aplicacion-nombre"><strong>Proyecto Interfer:</strong></div>
      <div className="aplicacion-detalle">
        API para la gestión de nuevos socios para su feria. Este fue un proyecto escolar.<br />
        Enlace: <a href="https://github.com/CarlosMorales-2021365/Interfer" target="_blank" rel="noopener noreferrer">https://github.com/CarlosMorales-2021365/Interfer</a>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Proyectos;
