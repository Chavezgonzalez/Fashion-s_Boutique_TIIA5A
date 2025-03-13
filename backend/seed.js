const mongoose = require("mongoose");
const Product = require("./models/Product");

// Conexión a la base de datos (cambia "miDB" si tienes otro nombre de base de datos)
mongoose.connect("mongodb://localhost:27017/miDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const productos = [
    { name: "Camiseta Negra", price: 250, category: "Ropa", image: "https://via.placeholder.com/150" },
    { name: "Pantalón Azul", price: 500, category: "Jeans", image: "https://via.placeholder.com/150" },
    { name: "Zapatos Deportivos", price: 750, category: "Calzado", image: "https://via.placeholder.com/150" }
];

// Agrega los productos a la base de datos
Product.insertMany(productos)
    .then(() => {
        console.log("✅ Productos agregados correctamente");
        mongoose.connection.close(); // Cierra la conexión después de insertar
    })
    .catch(err => console.error("❌ Error al agregar productos:", err));
