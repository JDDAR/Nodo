import React from "react";

const Header = () => {
  return (
    <>
      <div className="containerHeader">
        <div className="containerHeader__logo">
          <h2>NODO</h2>
        </div>
        <div className="containerHeader__nav">
          <ul>
            <li>Servicios</li>
            <li>Proyectos</li>
            <li>Nosotros</li>
          </ul>
          <button>Contacto</button>
        </div>
      </div>
    </>
  );
};

export default Header;
