import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css"; // Asegúrate de crear y enlazar este archivo CSS

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/users/login", {
                email,
                password
            });
    
            if (!response.data.token) {
                throw new Error("Error en autenticación: Token no recibido");
            }
    
            console.log("Token recibido:", response.data.token);
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch (error) {
            alert("Error en inicio de sesión: " + (error.response?.data?.message || error.message));
        }
    };
    

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Crear Cuenta</h2>
                <input
                    type="text"
                    placeholder="Nombre completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-field"
                />
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                />
                <button onClick={handleRegister} className="register-btn">Registrarse</button>
                <p className="login-link">¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
            </div>
        </div>
    );
}

export default Register;
