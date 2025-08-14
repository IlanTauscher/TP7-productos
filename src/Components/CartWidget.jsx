import React, { useMemo, useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import icono from '../assets/carrito-de-compras.png';
import './CartWidget.css';

export default function CartWidget() {
  const { cartItems, removeFromCart, clearCart, getTotal, getItemCount } = useCart();
  const [abierto, setAbierto] = useState(false);

  const total = useMemo(() => getTotal(), [cartItems, getTotal]);
  const cantidad = useMemo(() => getItemCount(), [cartItems, getItemCount]);

  return (
    <div className="cart-widget">
      <button className="cart-button" onClick={() => setAbierto((v) => !v)} aria-label="Abrir carrito">
        <img src={icono} alt="Carrito" />
        <span className="badge">{cantidad}</span>
      </button>

      {abierto && (
        <div className="cart-panel">
          <div className="cart-header">
            <h4>Tu carrito</h4>
            <button className="cerrar" onClick={() => setAbierto(false)}>×</button>
          </div>
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p className="vacio">Aún no agregaste productos.</p>
            ) : (
              cartItems.map((p) => (
                <div className="item" key={p.id}>
                  <img src={p.thumbnail} alt={p.title} />
                  <div className="info">
                    <span className="titulo">{p.title}</span>
                    <span className="precio">$ {p.price} × {p.quantity}</span>
                  </div>
                  <button className="quitar" onClick={() => removeFromCart(p.id)}>Quitar</button>
                </div>
              ))
            )}
          </div>
          <div className="cart-footer">
            <div className="total">
              <span>Total:</span>
              <strong>$ {total.toFixed(2)}</strong>
            </div>
            <div className="acciones">
              <button className="vaciar" onClick={clearCart} disabled={cartItems.length === 0}>Vaciar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


