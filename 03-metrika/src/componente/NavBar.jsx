import React from "react";
import "../style/Navbar.css"


export const  NavBar = () =>{
  return (
    <nav className="navbar bg-white px-4 py-3 d-flex justify-content-between align-items-center shadow-sm">
      <h2 className="m-0">Metrika</h2>

      <div className="d-flex gap-3">
        <i className="bi bi-facebook fs-4"></i>
        <i className="bi bi-instagram fs-4"></i>
        <i className="bi bi-twitter fs-4"></i>
        <i className="bi bi-whatsapp fs-4"></i>
      </div>
    </nav>
  );
}
