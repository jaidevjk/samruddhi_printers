import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/services", element: <Services /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/contact", element: <Contact /> }
];

export default routes;
