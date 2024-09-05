//Este componente va a recibir los custom hooks creados
//1) importamos el useContador
import { useContador } from "../../custom-hooks/useContador";

//2) importamos el useFetch
import { useFetch } from "../../custom-hooks/useFetch";

import React from 'react'

const Hooks = () => {

    const {contador, incrementar, decrementar} = useContador(1, 10)

    const data= useFetch("https://jsonplaceholder.typicode.com/users")

  return (
    <div>
        <h2>Contador con Custom Hooks:</h2>
        <button onClick={decrementar}> Restar </button>
        <strong>{contador}</strong>
        <button onClick={incrementar}> Sumar </button>

        <hr />

        <h2>Fetch de Datos</h2>

        { data && data.map(usuario => <p key={usuario.id}> {usuario.name}</p> )
            
        }

    </div>
  )
}

export default Hooks