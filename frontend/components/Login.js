import { useState } from "react";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const res = await axios.post("http://localhost:5000/api/users/login", { email, password });
        localStorage.setItem("token", res.data.token);
        alert("Inicio de sesión exitoso");
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="email" onChange={e => setEmail(e.target.value)} />
            <input type="password" onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
    );
}

export default Login;
