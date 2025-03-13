import { useEffect, useState } from "react";
import axios from "axios";
import "./home.css"; // Importa los estilos

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
            .then(res => {
                console.log("Productos recibidos:", res.data); // Ver qué llega desde la API
                setProducts(res.data);
            })
            .catch(err => console.error("Error obteniendo productos:", err));
    }, []);
    

    return (
        <div className="home-container">
            <h2 className="page-title">🛍️ Productos Disponibles</h2>
            {products.length === 0 ? (
                <p className="no-products">No hay productos disponibles.</p>
            ) : (
                <div className="product-list">
                    {products.map(product => (
                        <div className="product-card" key={product._id}>
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-category">Categoría: {product.category}</p>
                            <p className="product-price">${product.price}</p>
                            <button className="btn-buy">Comprar</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );    
}

export default Home;
