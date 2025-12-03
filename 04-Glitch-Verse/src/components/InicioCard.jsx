import React from 'react'
import { NavBar } from './NavBar'


export const InicioCard = () => {
  return (

    <div className="container inicio-container text-center mt-5 mb-5">
      <h3 className="inicio-title">Conoce GlitchVerse</h3>

      <div className="d-flex justify-content-center align-items-center mt-3">
        {/* Línea izquierda */}
        <div className="linea"></div>

        {/* Texto principal */}
        <h1 className="inicio-text">
          Nuestra marca se enfoca en busca la mejoría en el trato que le
          podemos dar a la tecnología, buscando a través de un cómic interactivo,
          mostrando la importancia que tiene el buen manejo de las redes
          sociales y la tecnología.
        </h1>

        {/* Línea derecha */}
        <div className="linea"></div>
      </div>





      <div className="inicio-section d-flex justify-content-center align-items-center">
        <div className="container row align-items-center g-4">

          {/* --- TEXTO IZQUIERDA --- */}
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

          {/* --- IMAGEN DERECHA --- */}
          <div className="col-md-5 text-center">
            <img
              src="/img/ilustracion.png"
              className="img-fluid img-ilustracion"
            />
          </div>
        </div>
      </div>
    </div>










  )
}
