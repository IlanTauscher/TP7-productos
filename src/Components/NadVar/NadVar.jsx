import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nadvar.css';

export default function NavBar() {
  return (
    <div className="Nav">
      <ul>
        <li>
          <NavLink to="/" className="link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/productos" className="link">Productos</NavLink>
        </li>
        <li>
          <NavLink to="/quienesSomos" className="link">Quiénes Somos</NavLink>
        </li>
        <li>
          <NavLink to="/contacto" className="link">Contacto</NavLink>
        </li>
      </ul>
    </div>
  );
}
