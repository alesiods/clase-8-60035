import React from 'react'
import Hooks from './componentes/Hooks/Hooks'
import { mensajeConTitulo, conAumento } from './componentes/Patrones/Patrones'
import Mensaje from './componentes/Patrones/Mensaje'
import Producto from './componentes/Patrones/Producto'
import Login from './componentes/Patrones/Login'

const App = () => {

    const NuevoComponente = mensajeConTitulo(Mensaje)
    const NuevoProducto = conAumento(Producto)
  return (
    <div>
      {/* <NuevoComponente/>
      <NuevoProducto nombre="tomate" precio={500} /> */}
      <Login/>
      {/* <Hooks/> */}
    </div>
  )
}

export default App