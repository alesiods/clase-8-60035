/* Patrones */

//EN react tenemos algunos patrones que nos permite reutilizar componentes

//1) HOC: HIGH ORDER COMPONENTS

//EJERCICIO 1: voy a armar una funcion que recibe un componente con un mensaje y voys a retornar un nuevo compoennte con ese mensaje + un titulo


export const mensajeConTitulo = (Mensaje) =>{
    return function(){
        return(
            <>
                <h2>Titulo agrego</h2>
                <Mensaje/>
            </>
        )
    }
}


//EJERCICIO 2: aumetno de precios

export const conAumento = (Producto) => {
    return function ({nombre, precio}) {
        let nuevoPrecio = precio + 500
        return <Producto nombre= {nombre} precio= {nuevoPrecio}/>
    }
}