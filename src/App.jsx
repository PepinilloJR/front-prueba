//import { useState } from 'react'
import './App.css'
import { HashRouter  } from 'react-router-dom'
import { RutasCliente } from './paginas/rutas.jsx'

function App() {

  return (
    <>
      <div>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <RutasCliente></RutasCliente>
        </HashRouter>
      </div>
    </>
  )
}

export default App
