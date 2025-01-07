import { useState } from "react";
import logo from "../assets/logos/logos.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="flex justify-between items-center w-full px-8 py-4 bg-white shadow-md md:px-16">
            {/* Logo y Nombre */}
            <div className="text-primary font-semibold text-2xl flex items-center">
                <img src={logo.src} alt="logo" className="w-16" />
                <span className="ml-2 font-raleway">vravo</span>
            </div>
            {/* Navegación de escritorio */}
            <div className="hidden md:flex space-x-10 font-semibold text-base">
                <a href="#" className="text-primary py-0.5 hover:text-secondary transition">
                    Inicio
                </a>
                <a href="#" className="text-primary py-0.5 hover:text-secondary transition">
                    Soluciones
                </a>
                <a href="#" className="text-primary py-0.5 hover:text-secondary transition">
                    Nosotros
                </a>
                <a href="#" className="text-primary py-0.5 hover:text-secondary transition">
                    Contacto
                </a>
            </div>
            {/* Botón de menú móvil */}
            <button
                onClick={toggleMenu}
                className="md:hidden text-primary text-2xl focus:outline-none"
                aria-label="Menú"
            >
                <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>
            {/* Menú móvil */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50">
                    <ul className="flex flex-col items-center space-y-4 py-4 font-semibold text-base">
                        <li>
                            <a
                                href="#"
                                className="text-primary py-1.5 hover:text-secondary transition"
                                onClick={toggleMenu}
                            >
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-primary py-1.5 hover:text-secondary transition"
                                onClick={toggleMenu}
                            >
                                Soluciones
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-primary py-1.5 hover:text-secondary transition"
                                onClick={toggleMenu}
                            >
                                Nosotros
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-primary py-1.5 hover:text-secondary transition"
                                onClick={toggleMenu}
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
