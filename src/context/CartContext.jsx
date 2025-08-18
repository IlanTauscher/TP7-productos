import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

export const useCart = () => {
  const contexto = useContext(CartContext);
  if (!contexto) throw new Error('useCart debe usarse dentro de CartProvider');
  return contexto;
};

export const CartProvider = ({ children }) => {
  const [elementosCarrito, establecerElementosCarrito] = useState(() => {
    try {
      const carritoGuardado = localStorage.getItem('carrito');
      return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('carrito', JSON.stringify(elementosCarrito));
    } catch {
      // ignorar errores de persistencia
    }
  }, [elementosCarrito]);

  const addToCart = (producto) => {
    if (!producto || !producto.id) return;
    establecerElementosCarrito((elementosAnteriores) => {
      const productoExistente = elementosAnteriores.find((productoEnCarrito) => productoEnCarrito.id === producto.id);
      if (productoExistente) {
        return elementosAnteriores.map((productoEnCarrito) =>
          productoEnCarrito.id === producto.id ? { ...productoEnCarrito, cantidad: productoEnCarrito.cantidad + 1 } : productoEnCarrito
        );
      }
      return [
        ...elementosAnteriores,
        {
          id: producto.id,
          titulo: producto.title,
          precio: producto.price,
          miniatura: producto.thumbnail || (producto.images && producto.images[0]) || '',
          cantidad: 1,
        },
      ];
    });
  };

  const removeFromCart = (idProducto) => {
    establecerElementosCarrito((elementosAnteriores) => elementosAnteriores.filter((productoEnCarrito) => productoEnCarrito.id !== idProducto));
  };

  const clearCart = () => establecerElementosCarrito([]);

  const getTotal = useMemo(() => {
    return () => elementosCarrito.reduce((acumulador, productoEnCarrito) => acumulador + productoEnCarrito.precio * productoEnCarrito.cantidad, 0);
  }, [elementosCarrito]);

  const getItemCount = useMemo(() => {
    return () => elementosCarrito.reduce((acumulador, productoEnCarrito) => acumulador + productoEnCarrito.cantidad, 0);
  }, [elementosCarrito]);

  const value = {
    elementosCarrito,
    addToCart,
    removeFromCart,
    clearCart,
    getTotal,
    getItemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;


