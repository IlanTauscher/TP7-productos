import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function ProductoCard({ product }) {
  const { addToCart } = useCart();
  if (!product) return null;

  return (
    <div className="product-card">
      <img
        src={product.thumbnail || (product.images && product.images[0])}
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
        <div style={{ display: 'flex', gap: '14px', marginTop: '8px', justifyContent: 'space-between' }}>
          <Link to={`/productoDetalle/${product.id}`} className="detalleBoton">Ver más</Link>
          <button onClick={() => addToCart(product)} className="detalleBoton boton-agregar">Agregar</button>
        </div>
      </div>
    </div>
  );
}