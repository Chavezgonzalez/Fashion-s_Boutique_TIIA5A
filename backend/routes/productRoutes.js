const express = require("express");
const router = express.Router();
const { getProducts, addProduct } = require("../controllers/productControllers");

router.get("/", getProducts);  // Obtiene todos los productos
router.post("/", addProduct);  // Agrega un nuevo producto

module.exports = router;
