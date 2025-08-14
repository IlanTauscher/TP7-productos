import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider');
  return ctx;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const guardado = localStorage.getItem('carrito');
      return guardado ? JSON.parse(guardado) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('carrito', JSON.stringify(cartItems));
    } catch {
      // ignorar errores de persistencia
    }
  }, [cartItems]);

  const addToCart = (producto) => {
    if (!producto || !producto.id) return;
    setCartItems((prev) => {
      const existente = prev.find((p) => p.id === producto.id);
      if (existente) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [
        ...prev,
        {
          id: producto.id,
          title: producto.title,
          price: producto.price,
          thumbnail: producto.thumbnail || (producto.images && producto.images[0]) || '',
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (idProducto) => {
    setCartItems((prev) => prev.filter((p) => p.id !== idProducto));
  };

  const clearCart = () => setCartItems([]);

  const getTotal = useMemo(() => {
    return () => cartItems.reduce((acc, p) => acc + p.price * p.quantity, 0);
  }, [cartItems]);

  const getItemCount = useMemo(() => {
    return () => cartItems.reduce((acc, p) => acc + p.quantity, 0);
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getTotal,
    getItemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;


