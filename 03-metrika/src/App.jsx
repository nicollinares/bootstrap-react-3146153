import React from 'react'
import "./App.css"
import { NavBar } from './componente/NavBar'
import { SectionCard } from './componente/SectionCard'

export function App  () {
  return (
    <>
    <NavBar/>
    <SectionCard/>
    <div className='container'></div>
     
    </>
   
  )
}
