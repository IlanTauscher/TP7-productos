import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import ProductoCard from '../../Components/ProductoCard.jsx';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/products');
        setProducts(res.data.products);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos: {error.message}</p>;

  return (
    <main className="home">
      <section className="bienvenido">
        <h1 className="bienvenido__title">Bienvenido a Tiendita ORT</h1>
        <p className="bienvenido__subtitle">
          Explora una selección de productos de ejemplo para tus proyectos.
        </p>
        <Link to="/productos" className="bienvenido__button">Ver Productos</Link>
      </section>
      <section className="categories-section">
        <h2 className="categories-section__title">Categorías Destacadas</h2>
        {loading ? (<p>Cargando categorías...</p>) : (
          <div className="products-grid">
            {products.slice(0, 3).map((prod) => (
              <ProductoCard key={prod.id} product={prod} />
            ))}
        </div>
        )}
      </section>
    </main>
  );
}