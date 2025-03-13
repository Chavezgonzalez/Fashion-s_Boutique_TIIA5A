require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes"); // Importa las rutas de usuario

const app = express();

app.use(cors());
app.use(express.json()); // Permite recibir JSON

// Conexión a MongoDB
mongoose.connect(process.env.url_bd, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Base de datos conectada"))
.catch(err => console.error("❌ Error conectando a la base de datos", err));

// Rutas
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes); // Corrige la ruta de usuarios

app.listen(5000, () => {
    console.log("✅ Servidor corriendo en http://localhost:5000");
});
