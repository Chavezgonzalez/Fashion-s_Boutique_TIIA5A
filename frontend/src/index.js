import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Obtén el contenedor de tu aplicación
const root = ReactDOM.createRoot(document.getElementById("root"));

// Usa el nuevo método createRoot y renderiza el componente
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
