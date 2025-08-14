import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductoDetalle.css'
import { useCart } from '../../context/CartContext.jsx';

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProducto(res.data);
      } catch (error) {
        console.error('Error al obtener producto:', error);
      }
    };

    obtenerProducto();
  }, [id]);
  if (!producto) {
    return <p>Cargando producto...</p>;
  }
  return (
    <div className='producto_container'>
      <div className="product_data">
        <h1 className='product_name'>
          {producto.title}
        </h1>
        <p className='product_price'>$ {producto.price}</p>
        <div className="description_cont">
          <p>{producto.description}</p>
        </div>
        <button onClick={() => addToCart(producto)}>Agregar al carrito</button>
      </div>
      <img src={producto.images[0]} className='product_img'></img>
    </div>
  )
}

export default ProductoDetalle