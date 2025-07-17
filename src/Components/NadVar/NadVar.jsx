import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import './Nadvar.css';

export default function NavBar() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("https://dummyjson.com/products/categories");
        setCategorias(data);
      } catch (error) {
        console.error("Error al obtener las categorías:", error);
      }
    })();
  }, []);


  return (
    <div className="Nav">
      <ul>
        <li>
          <Link to="/" className="logo">
            <img src="/agregar-producto.png" />
          </Link>
        </li>
        <li>
          <Link to="/" className="link">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu">
            {categorias.map((categoria) => (
              <li key={categoria.slug}>
                <NavLink className="dropdown-item" to={`/productos/${categoria.slug}`}>
                  {categoria.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <Link to="/quienesSomos" className="link">Quiénes Somos</Link>
        </li>
        <li>
          <Link to="/contacto" className="link">Contacto</Link>
        </li>
      </ul>
    </div>
  );
}