const Product = require("../models/Product");

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos" });
    }
};

const addProduct = async (req, res) => {
    const { name, price, category, image } = req.body;

    if (!name || !price || !category || !image) {
        return res.status(400).json({ message: "Todos los campos son requeridos" });
    }

    try {
        const newProduct = new Product({ name, price, category, image });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: "Error al agregar el producto" });
    }
};

module.exports = { getProducts, addProduct};
