import Homepage from "./pages/Homepage.jsx";
import SobreMi from "./pages/sobreMi.jsx";

export const routes = [
    {
        path: "/",
        element: <Homepage />
    },
    {
        path: "/sobremi",
        element: <SobreMi />
    }
];