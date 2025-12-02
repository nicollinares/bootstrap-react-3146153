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
        <p className="inicio-text mx-4">
          Nuestra marca se enfoca en busca la mejoría en el trato que le
          podemos dar a la tecnología, buscando a través de un cómic interactivo,
          mostrando la importancia que tiene el buen manejo de las redes
          sociales y la tecnología.
        </p>

        {/* Línea derecha */}
        <div className="linea"></div>
      </div>
    </div>
     )
   }
   