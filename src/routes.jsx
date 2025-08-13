import Homepage from "./pages/Homepage.jsx";
import SobreMi from "./pages/sobreMi.jsx";
import Proyectos from "./pages/proyectos.jsx";
import Habilidades from "./pages/habilidades.jsx";
import Contacto from "./pages/contacto.jsx";

export const routes = [
    {
        path: "/",
        element: <Homepage />
    },
    {
        path: "/sobremi",
        element: <SobreMi />
    },
    {
        path: "/proyectos",
        element: <Proyectos />
    },
    {
        path: "/habilidades",
        element: <Habilidades />
    },
    {
        path: "/contacto",
        element: <Contacto />
    },
];