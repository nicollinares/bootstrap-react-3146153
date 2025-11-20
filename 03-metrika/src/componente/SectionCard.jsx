import React from 'react';
import '../style/SectionCard.css'

export const SectionCard = () => {
  return (
    <div className="container mt-5">

      <div
        className="d-grid gap-3"
        style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
      >
        <div className="p-4 text-white d-flex flex-column justify-content-center"
          style={{ background: "#6bb597", height: "150px", borderRadius: "6px" }}>
          <i className="bi bi-journal-bookmark" style={{ fontSize: "40px" }}></i>
          <span className="mt-2 fs-5">About Us</span>
        </div>

        <div className="p-4 text-white d-flex flex-column justify-content-center"
          style={{ background: "#7cb9a5", height: "150px", borderRadius: "6px" }}>
          <i className="bi bi-archive" style={{ fontSize: "40px" }}></i>
          <span className="mt-2 fs-5">Our Team</span>
        </div>

        <div className="p-4 text-white d-flex flex-column justify-content-center"
          style={{
            background: "#49a4c8",
            height: "320px",
            borderRadius: "6px",
            gridColumn: "span 2",
            gridRow: "span 2"
          }}>
          <i className="bi bi-image" style={{ fontSize: "60px" }}></i>
          <span className="mt-3 fs-4">Our Works</span>
        </div>

        <div className="p-4 text-white d-flex flex-column justify-content-center"
          style={{ background: "#c6537e", height: "150px", borderRadius: "6px" }}>
          <i className="bi bi-map" style={{ fontSize: "40px" }}></i>
          <span className="mt-2 fs-5">Contacts</span>
        </div>

        <div className="p-4 text-white d-flex flex-column justify-content-center"
          style={{
            background: "#be6344",
            height: "150px",
            borderRadius: "6px",
            gridColumn: "span 2"
          }}>
          <i className="bi bi-download" style={{ fontSize: "40px" }}></i>
          <span className="mt-2 fs-5">Resume</span>
        </div>

        <div className="p-4 text-white d-flex flex-column justify-content-center"
          style={{ background: "#c87a41", height: "150px", borderRadius: "6px" }}>
          <i className="bi bi-pencil" style={{ fontSize: "40px" }}></i>
          <span className="mt-2 fs-5">Blog</span>
        </div>

        <div className="p-4 text-white d-flex flex-column justify-content-center"
          style={{ background: "#d19b3d", height: "150px", borderRadius: "6px" }}>
          <i className="bi bi-envelope" style={{ fontSize: "40px" }}></i>
          <span className="mt-2 fs-5">Feedback</span>
        </div>

      </div>
    </div>
  );
}
