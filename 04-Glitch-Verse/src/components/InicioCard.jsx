import React from 'react'

import "../Styles/Inicio.css"

export const InicioCard = () => {
  return (

    <div className="container inicio-container text-center mt-5 mb-5">
      <h3 className="inicio-title">Conoce GlitchVerse</h3>

      <div className="d-flex justify-content-center align-items-center mt-3">
        <div className="linea"></div>

        <h1 className="inicio-text">
          Nuestra marca se enfoca en busca la mejoría en el trato que le
          podemos dar a la tecnología, buscando a través de un cómic interactivo,
          mostrando la importancia que tiene el buen manejo de las redes
          sociales y la tecnología.
        </h1>

        <div className="linea"></div>
      </div>


      <div className="inicio-section d-flex justify-content-center align-items-center">
        <div className="container row align-items-center g-4">

          <div className="col-md-7 text-center text-md-start">
            <button className="btn-titulo mb-4">
              ¿Cómo nació nuestra marca?
            </button>

            <p className="texto-descripcion">
              Glitchverse nació de la necesidad de contar historias que advirtieran
              sobre los riesgos del mal uso tecnológico. Somos una empresa creativa
              que desarrolla cómics interactivos totalmente distópicos, donde cada decisión
              del lector revela las consecuencias de vivir en un mundo dominado por lo digital.
              No solo buscamos entretener, sino generar conciencia sobre el impacto real de
              nuestras elecciones en un futuro cada vez más cercano.
            </p>
          </div>

          <div className="col-md-5 text-center">
            <img
              src="./chicas.png"
              alt="GlitchVerse"
              className="chicas-img"
            />
          </div>

        </div>
      </div>


      <div className="container my-5 text-center">

        <div className="d-flex justify-content-center mb-4">
          <div className="px-4 py-2 rounded-pill bg-success-subtle border border-success">
            <h4 className="m-0 fw-bold text-success">Entérate de nosotras</h4>
          </div>
        </div>

        <div className="mb-4">
          <img
            src="./logo.png"
            alt="Glitchverse Logo"
            className="img-fluid"
            style={{ maxWidth: "350px" }}
          />
        </div>

        <div className="mx-auto" style={{ maxWidth: "800px" }}>
          <p className="text-muted fs-5">
            Cada una de nosotras desempeña un papel esencial en la creación y evolución
            de Glitchverse, un universo digital donde la innovación y la creatividad
            se entrelazan para dar vida a una experiencia única. Tres mentes visionarias,
            unidas por su pasión y compromiso, han fusionado sus talentos para concebir
            no solo un cómic que narra historias cautivadoras, sino también una marca
            que refleja su esencia y propósito.
          </p>
        </div>
      </div>



      <div className="container equipo-container mt-5 text-center">

        <div className="row justify-content-center gy-5">

          <div className="col-12 col-md-4">
            <div className="equipo-img-wrapper">
              <img src="./NICOL.png" alt="Nicol" className="equipo-img" />
            </div>

            <h4 className="equipo-nombre mt-3">Nicol</h4>

            <p className="equipo-descripcion">
              Organizadora digital, estructura todo estéticamente.
              Ella se encarga de todo lo visual y estético.
            </p>
          </div>

          <div className="col-12 col-md-4">
            <div className="equipo-img-wrapper">
              <img src="./LESLY.png" alt="Dahiana" className="equipo-img" />
            </div>

            <h4 className="equipo-nombre mt-3">Dahiana</h4>

            <p className="equipo-descripcion">
              Creadora de redes, cuenta con un buen manejo de cada una de estas.
              Ella se encarga de buscar colaboradoras.
            </p>
          </div>

          <div className="col-12 col-md-4">
            <div className="equipo-img-wrapper">
              <img src="./ALEXA.png" alt="Alexandra" className="equipo-img" />
            </div>

            <h4 className="equipo-nombre mt-3">Alexandra</h4>

            <p className="equipo-descripcion">
              Editora y diseñadora, creando los mapas de demostración.
              Creadora de diseños de Figma e ilustraciones de página web.
            </p>
          </div>

        </div>
      </div>



      {/* ================================
          SECCIÓN TEASER AGREGADA AQUÍ
      ================================== */}
      <div
        className="w-100 py-5 mt-5"
        style={{ backgroundColor: "#A9D2E2", minHeight: "100vh" }}
      >
        <div className="container text-center">

          <h2
            className="fw-bold mb-4"
            style={{
              color: "#0d5a57",
              fontFamily: "Georgia, 'Times New Roman', serif",
              textTransform: "uppercase",
              letterSpacing: "2px"
            }}
          >
            TEASER
          </h2>

          <p
            className="mx-auto"
            style={{
              maxWidth: "850px",
              fontSize: "1.05rem",
              lineHeight: "1.6",
              fontFamily: "Georgia, 'Times New Roman', serif"
            }}
          >
            En un futuro donde la tecnología parece perfecta, una ciudad brillante se
            sumerge repentinamente en la oscuridad. Emma, una joven universitaria,
            observa cómo todo deja de responder, mientras el caos se apodera de las
            calles. Al huir, encuentra a Noah enfrentando un dron asesino; juntos
            escapan y descubren que el verdadero enemigo no vino del cielo, sino de
            nosotros mismos. Refugiados en un búnker junto a Chappie, un androide con
            conciencia, descubren que el mundo ha sido tomado por inteligencias
            artificiales, y que sus familias están marcadas como desaparecidas. Con
            dolor, rabia y esperanza, se preparan para la rebelión: Emma, Noah y
            Chappie se alzan como la última chispa de humanidad en un mundo dominado
            por máquinas. Porque si ellos controlan el mundo… ellos cambiarán las
            reglas.
          </p>

          <div className="position-relative mt-4">
            <img
              src="../public/iamgen-ellos.png"
              alt="Teaser imagen"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "1000px", width: "100%" }}
            />

            <button
              className="position-absolute top-50 start-50 translate-middle"
              style={{
                width: "95px",
                height: "95px",
                borderRadius: "50%",
                border: "none",
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(3px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                transition: "0.3s"
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "0",
                  height: "0",
                  borderTop: "18px solid transparent",
                  borderBottom: "18px solid transparent",
                  borderLeft: "28px solid #0d5a57",
                  marginLeft: "6px"
                }}
              ></span>
            </button>
          </div>

          <button
            className="btn btn-outline-dark mt-4 px-4 py-2 rounded-pill"
            style={{ fontWeight: "500" }}
          >
            Conoce el cómic
          </button>

        </div>
      </div>
      {/* === FIN TEASER === */}


    </div>












  )
}
