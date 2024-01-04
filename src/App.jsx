//import { useState } from 'react'
import './App.css'
import { HashRouter  } from 'react-router-dom'
import { RutasCliente } from './paginas/rutas.jsx'

function App() {
  //basename={process.env.PUBLIC_URL}
  return (
    <>
      <div>
        <HashRouter>
          <RutasCliente></RutasCliente>
        </HashRouter>
      </div>
    </>
  )
}

export default App
