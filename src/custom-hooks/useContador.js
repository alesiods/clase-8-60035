//vamos a trabajr con Customs Hooks: donde creams un hook para contar productos
 import { useState } from "react";

 export const useContador = (valorInicial, valorMaximo) => {
    const [contador, setContador] = useState (valorInicial)

    const incrementar = () => {
        if(contador < valorMaximo) {
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if(contador > valorInicial) {
            setContador(contador - 1)
        }
    }

    return {contador, incrementar, decrementar}

 }