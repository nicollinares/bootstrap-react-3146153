import React from 'react'
import "../Styles/NavBar.css"

export const NavBar = () => {
  return (
    <header className="navbar-wrapper" style={{ height: "160px" }}>
      <nav className="container d-flex justify-content-between align-items-center">


        <div className="d-flex gap-4 align-items-center ms-auto ">
          <a href="#" className="nav-link-custom ">Conoce el cómic</a>
          <a href="#" className="nav-link-custom ">Conoce GlitchVerse</a>
        </div>


        <div className="m-auto ">
          <img
            src="./logo.png"
            alt="GlitchVerse"
            className="logo-img"
          />
        </div>


        <div className="d-flex gap-3 align-items-center">
          <i className="bi bi-search nav-icon"></i>
          <i className="bi bi-cart3 nav-icon"></i>
        </div>
      </nav>




      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand fw-bold glitch-title" href="/">
            GlitchVerse
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#inicio">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">Sobre Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#comic">Cómic</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>




    </header>
  )
}
