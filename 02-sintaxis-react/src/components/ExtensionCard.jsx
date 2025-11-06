import React from 'react'
import "../stylesheets/ExtensionCard.css"

export const ExtensionCard = ({ cardTitle, cardImage, cardDescription, cardImagen }) => {
  return (
    <>
      <div className='contenedor-padre'>
        <div className="tarjetas">
          <img className='imglogo' src={cardImage} alt="" />
          <h1 className='title1' >{cardTitle}</h1>
          <p className='pCard'>{cardDescription}</p> <br />
          <div className='botones'>
            <button className='Remove' >Remove</button> <br />
            <img className='card-imagen' src={cardImagen} alt="" />
          </div>
        </div>
      </div>

    </>
  )
}
