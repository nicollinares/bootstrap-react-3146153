import React from 'react'
import "../Styles/NavBar.css"

export const NavBar = () => {
  return (
    <header className="navbar-wrapper" style={{ height: "160px" }}>
      <nav className="">


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


    </header>
  )
}
