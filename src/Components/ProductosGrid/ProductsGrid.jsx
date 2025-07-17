import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductsGrid.css';

import ProductCard from '../ProductoCard.jsx';

export default function ProductsGrid() {
 const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  
 useEffect(() => {
    const obtenerProductos = async () => {
      if(categoria) {
      try {
        const response = await axios.get(`https://dummyjson.com/products/category/${categoria}?limit=100`);
        setProductos(response.data.products);

        const indicesIniciales = {};
        response.data.products.forEach(p => {
          indicesIniciales[p.id] = 0;
        });

      } catch (err) {
        console.error("Error al obtener productos:", err);
        setError("No se pudieron cargar los productos ):");
      } finally {
        setCargando(false);
      }
    }
    else{
       try {
        const response = await axios.get(`https://dummyjson.com/products?limit=100`);
        setProductos(response.data.products);

        const indicesIniciales = {};
        response.data.products.forEach(p => {
          indicesIniciales[p.id] = 0;
        });

      } catch (err) {
        console.error("Error al obtener productos:", err);
        setError("No se pudieron cargar los productos ):");
      } finally {
        setCargando(false);
      }
    }
    };

    obtenerProductos();
  }, [categoria]);


  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos: {error.message}</p>;

  return (
    <div className="products-grid">
      {console.log("Productos:", productos)}
      {productos.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  );
}
