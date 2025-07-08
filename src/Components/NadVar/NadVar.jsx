import React from 'react';
import { Link } from 'react-router-dom';
import './Nadvar.css';

export default function NavBar() {
  return (
    <div className="Nav">
      <ul>
        <li>
          <Link to="/" className="logo">
            <img src="/agregar-producto.png"/>
          </Link>
        </li>
        <li>
          <Link to="/" className="link">Home</Link>
        </li>
        <li>
          <Link to="/productos" className="link">Productos</Link>
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
