import React from "react";
import "./NavBar.css";
import "../Styles/NavBar.css"

export const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-content container d-flex justify-content-between align-items-center">

        {/* --- IZQUIERDA --- */}
        <div className="nav-left d-flex align-items-center gap-4">
          <span className="nav-link-custom">Conoce el cómic</span>
        </div>

        {/* --- CENTRO (LOGO + BOTÓN) --- */}
        <div className="nav-center d-flex flex-column align-items-center">
          <img
            src="/logo.png"
            alt="GlitchVerse"
            className="logo-nav"
          />
          <button className="btn btn-nav mt-1">Conoce GlitchVerse</button>
        </div>

        {/* --- DERECHA (ICONOS) --- */}
        <div className="nav-right d-flex align-items-center gap-4">
          <i className="bi bi-search nav-icon"></i>
          <i className="bi bi-cart nav-icon"></i>
        </div>

      </div>
    </header>
  );
}
