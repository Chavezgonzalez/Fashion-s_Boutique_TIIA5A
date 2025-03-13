import { useState } from "react";
import axios from "axios";
import './login.css'; 
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/users/login", { email, password });
            localStorage.setItem("token", res.data.token);
            alert("Inicio de sesión exitoso");
        } catch (error) {
            alert("Error en login: " + error.response.data.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Iniciar Sesión</h2>
                <div className="input-group">
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="input-field"
                    />
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="input-field"
                    />
                </div>
                <button onClick={handleLogin} className="login-btn">Iniciar sesión</button>
                <p className="signup-link">¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
            </div>
        </div>
    );
}

export default Login;
