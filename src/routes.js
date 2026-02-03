import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import Shipping from "./pages/Shipping";
import Portfolio from "./pages/Portfolio";
import TestimonialsPage from "./pages/TestimonialsPage";
import RequestQuote from "./pages/RequestQuote";
import DownloadCenter from "./pages/DownloadCenter";
import ContactMap from "./pages/ContactMap";
import Partners from "./pages/Partners";
import Press from "./pages/Press";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/services", element: <Services /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/contact", element: <Contact /> },
    { path: "/faq", element: <FAQ /> },
    { path: "/careers", element: <Careers /> },
    { path: "/blog", element: <Blog /> },
    { path: "/pricing", element: <Pricing /> },
    { path: "/team", element: <Team /> },
    { path: "/terms", element: <Terms /> },
    { path: "/privacy", element: <Privacy /> },
    { path: "/refund", element: <Refund /> },
    { path: "/shipping", element: <Shipping /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/testimonials", element: <TestimonialsPage /> },
    { path: "/request-quote", element: <RequestQuote /> },
    { path: "/download-center", element: <DownloadCenter /> },
    { path: "/contact-map", element: <ContactMap /> },
    { path: "/partners", element: <Partners /> },
    { path: "/press", element: <Press /> },
];

export default routes;
