//import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { RutasCliente } from './paginas/rutas.jsx'

function App() {

  return (
    <>
      <div>
        <BrowserRouter basename='/front-prueba'>
          <RutasCliente></RutasCliente>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
