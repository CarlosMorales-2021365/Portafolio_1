import React from "react";
import Navbar from "../components/navbar";
import Graficas from "../components/graficas";

const Habilidades = () => {
  return (
    <>
      <Navbar />
      <div className="Titulo">Habilidades</div>
      <Graficas />
      <div className="Titulo">Curriculum</div>
      <br />
      <div className="Texto">Durante los tres años de la carrera he aprendido a utilizar las 
        herramientas necesarias para desenvolverme en mi carrera comenzando por la creación de 
        aplicaciones en consola utilizando java y el patrón Modelo, Vista, Controlador y a conectarlo 
        con bases de datos relacionales, hasta la creación de apis utilizando lo que es nodejs y 
        usando bases de datos no relacionales a trabes de mongoDB para mas adelante utilizar react 
        para darle una interfaz de usuario ​Como experiencia puedo resaltar mis practicas en las 
        cuales pude pulir mis habilidades y expandir mis conocimientos en la rama de la programación 
        </div>
    </>
  );
};

export default Habilidades;
