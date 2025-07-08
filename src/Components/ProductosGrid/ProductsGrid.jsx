import React, { useState, useEffect } from 'react';
import './ProductsGrid.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.images[0]}
        alt={product.title}
        className="product-image"
      />
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
        </div>
      </div>
    </div>
  );
}

export default function ProductsGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos: {error.message}</p>;

  return (
    <div className="products-grid">
      {products.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  );
}
