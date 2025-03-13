import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const location = useLocation();

    // Ocultar el navbar en "/", "/login" y "/register"
    if (["/", "/login", "/register"].includes(location.pathname)) {
        return null;
    }

    return (
        <nav className="navbar">
            <div className="logo">🛍️ Mi Tienda</div>
            <ul className="nav-links">
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/perfil">Mi Perfil</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

