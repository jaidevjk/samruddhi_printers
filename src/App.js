import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ResponsiveAppBar from "./components/AppBar";
import routes from "./routes";
import './App.css';
import whatsappIcon from './assets/images/whatsapp.png';

export default function App() {

    return (
        <Router>

            {/* <div className="font-sans text-gray-800 bg-white">
                <Navbar />
                    <Routes>
                        {routes.map(({ path, element }, idx) => (
                            <Route key={idx} path={path} element={element} />
                        ))}
                    </Routes>
                <Footer />
            </div> */}
            <div className="flex flex-col min-h-screen" >
                {/* <Navbar /> */}
                <ResponsiveAppBar />
                <main className="flex-grow" >
                    <Routes>
                        {routes.map(({ path, element }, idx) => (
                            <Route key={idx} path={path} element={element} />
                        ))}
                    </Routes>
                </main>
                <Footer />
                <a
                    href="https://wa.me/919591967075"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ position: "fixed", bottom: 90, right: "10px", zIndex: 1000 }}

                >
                    <img className="whatsapp-icon" src={whatsappIcon} width="40px" />
                </a>
            </div>
        </Router>
    );
}
