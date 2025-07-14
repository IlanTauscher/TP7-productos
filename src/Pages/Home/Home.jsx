import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching categories:', err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="home">
      {/* Hero de bienvenida */}
      <section className="hero">
        <h1 className="hero__title">Bienvenido a Tiendita ORT</h1>
        <p className="hero__subtitle">
          Explora una selección de productos de ejemplo para tus proyectos.
        </p>
        <Link to="/productos" className="hero__button">
          Ver Productos
        </Link>
      </section>

      {/* Sección de categorías destacadas */}
      <section className="categories-section">
        <h2 className="categories-section__title">Categorías Destacadas</h2>
        {loading ? (
          <p>Cargando categorías...</p>
        ) : (
          <ul className="categories-list">
            {categories.slice(0, 4).map((cat) => (
              <li key={cat} className="categories-list__item">
                <Link to={`/productos/${encodeURIComponent(cat)}`} className="categories-list__link">

                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
