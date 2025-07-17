import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductoCard({ product }) {
  console.log( "productos totales", product );
  if (!product) return null;

  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
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
        <Link to={`/productoDetalle/${product.id}`} className="detalleBoton">Ver mas</Link>
      </div>
    </div>
  );
}