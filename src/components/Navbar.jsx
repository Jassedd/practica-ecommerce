import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <p>
        <Link to= "/">Home</Link>
      </p>
      <p>
        <Link to= "/articles">Articulos</Link>
      </p>
      <p>
        <Link to= "/formulario">Formulario</Link>
      </p>
    </nav>
  )
}

export default Navbar