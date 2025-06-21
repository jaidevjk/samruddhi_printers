// components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
                <Link to="/" className="text-2xl font-bold text-blue-600">Samruddhi Printers</Link>
                <div className="space-x-6 hidden md:flex">
                    <Link to="/" className="hover:text-blue-600 transition">Home</Link>
                    <Link to="/services" className="hover:text-blue-600 transition">Services</Link>
                    <Link to="/gallery" className="hover:text-blue-600 transition">Gallery</Link>
                    <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
                </div>
            </div>
        </nav>
    );
}



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X, Sun, Moon } from 'lucide-react';

// export default function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [darkMode, setDarkMode] = useState(false);
//     const [scrolled, setScrolled] = useState(false);

//     // Handle scroll to add shadow effect
//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 10);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     // Toggle dark mode class on <html>
//     useEffect(() => {
//         const root = window.document.documentElement;
//         if (!darkMode) {
//             root.classList.add('dark');
//         } else {
//             root.classList.remove('dark');
//         }
//     }, [darkMode]);

//     return (
//         <header className={`sticky top-0 z-50 transition-shadow ${scrolled ? 'shadow-md' : ''} bg-white dark:bg-gray-900`}>
//             <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//                 <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Samruddhi Printers</h1>

//                 {/* Desktop navigation */}
//                 <nav className="hidden md:flex space-x-8">
//                     <Link to="/" className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link>
//                     <Link to="/about" className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition">About</Link>
//                     <Link to="/services" className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition">Services</Link>
//                     <Link to="/gallery" className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition">Gallery</Link>
//                     <Link to="/contact" className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</Link>
//                 </nav>

//                 {/* Right icons */}
//                 <div className="flex items-center space-x-4 md:space-x-6">
//                     {/* Dark mode toggle */}
//                     <button
//                         onClick={() => setDarkMode(!darkMode)}
//                         className="text-gray-700 dark:text-gray-100 hover:text-yellow-500 transition"
//                         aria-label="Toggle Dark Mode"
//                     >
//                         {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//                     </button>

//                     {/* Mobile menu button */}
//                     <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" className="md:hidden text-blue-700 dark:text-blue-400">
//                         {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile navigation */}
//             {menuOpen && (
//                 <div className="md:hidden bg-white dark:bg-gray-900 shadow-md px-4 pb-4 space-y-2">
//                     <Link to="/" onClick={() => setMenuOpen(false)} className="block text-gray-800 dark:text-gray-100 hover:text-blue-600">Home</Link>
//                     <Link to="/about" onClick={() => setMenuOpen(false)} className="block text-gray-800 dark:text-gray-100 hover:text-blue-600">About</Link>
//                     <Link to="/services" onClick={() => setMenuOpen(false)} className="block text-gray-800 dark:text-gray-100 hover:text-blue-600">Services</Link>
//                     <Link to="/gallery" onClick={() => setMenuOpen(false)} className="block text-gray-800 dark:text-gray-100 hover:text-blue-600">Gallery</Link>
//                     <Link to="/contact" onClick={() => setMenuOpen(false)} className="block text-gray-800 dark:text-gray-100 hover:text-blue-600">Contact</Link>
//                 </div>
//             )}
//         </header>
//     );
// }
