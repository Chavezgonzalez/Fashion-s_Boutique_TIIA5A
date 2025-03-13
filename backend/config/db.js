

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.url_bd, {
        });
        console.log("MongoDB conectado");
    } catch (error) {
        console.error("Error de conexión a MongoDB:", error);
        process.exit(1); // Cierra el proceso en caso de error
    }
};

module.exports = connectDB;
