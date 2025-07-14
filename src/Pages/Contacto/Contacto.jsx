import React from 'react';
import './Contacto.css';

export default function Contacto() {
  return (
    <div className="contacto">
      <h1 className="contacto__titulo">Contacto</h1>
      <div className="contacto__detalles">
        <p>Teléfono: +54 11 2703-5580</p>
        <p>Email: tauscherilan@gmail.com</p>
        <p>Horario de atención: Lunes a Viernes de 9:00 a 18:00</p>
        <p>Dirección: Yatay 240, Almagro, Ciudad Autónoma de Buenos Aires</p>
      </div>
      <div className="mapa">
        <iframe 
          title="Mapa de ORT Almagro"
          src="https://maps.google.com/maps?q=Yatay%20240,%20Buenos%20Aires&z=15&output=embed"
        />
      </div>
    </div>
  );
}
