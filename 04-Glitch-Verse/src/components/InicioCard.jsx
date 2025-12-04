import React from 'react'
import { NavBar } from './NavBar'
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
    </div>










  )
}
