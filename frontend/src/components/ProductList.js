import { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
        
        // Aseguramos que el título siempre sea visible
        const titleElement = document.getElementById("product-title");
        if (titleElement) {
            titleElement.style.visibility = "visible";
            titleElement.style.opacity = "1";
        }
    }, []);  // Solo se ejecuta una vez cuando el componente se monta

    return (
        <div>
            <h2 id="product-title" style={{ visibility: "visible", opacity: 1 }}>Productos</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "10px" }}>
                {products.map(product => (
                    <div key={product._id} style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>
                        <img src={product.image} alt={product.name} style={{ width: "100%", height: "auto" }} />
                        <h3>{product.name}</h3>
                        <p><strong>Categoría:</strong> {product.category}</p>
                        <p><strong>Precio:</strong> ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
