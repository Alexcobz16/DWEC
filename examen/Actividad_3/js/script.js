///////////////////////////// CÓDIGO QUE DEBES UTILIZAR /////////////////////////
const factura = [
    {id: 1, descripcion: "Atún 3 latas 30gr", precio: 2.4, cantidad: 3},
    {id: 2, descripcion: "Tomate frito 3 briks 390gr", precio: 1.45, cantidad: 1},
    {id: 3, descripcion: "Café molido 250gr", precio: 3.99, cantidad: 2},
    {id: 4, descripcion: "Garbanzos cocidos 400gr", precio: 0.85, cantidad: 4},
    {id: 5, descripcion: "Azúcar blanco 1kg", precio: 1.47, cantidad: 2},
    {id: 6, descripcion: "Arroz 1kg", precio: 1.35, cantidad: 1},
    {id: 7, descripcion: "Leche semidesnatada 1l", precio: 1.06, cantidad: 6},
    {id: 8, descripcion: "Tomate triturado 390gr", precio: 0.72, cantidad: 2},
    {id: 9, descripcion: "Nata líquida 3 unidades de 200 ml", precio: 1.75, cantidad: 1},
    {id: 10, descripcion: "Aceite de oliva suave 1l", precio: 4.99, cantidad: 4}
];
///////////////////////////// FIN CÓDIGO QUE DEBES UTILIZAR /////////////////////////

///////////////////////////// AQUÍ COMIENZA TU CÓDIGO /////////////////////////

// ACTIVIDAD 3:
// Apartado 1:

/**
 * 
 * @param {*} factura Array factura
 * @returns Devuelve un array con los productos más caros que cumplen el filter
 */

function obtenerCarosOrdenadosPorCantidad(factura){
   let orden = factura.filter(x => x.precio > 2).sort((x, y) => y.precio - x.precio);
    return orden;
}

const orden = obtenerCarosOrdenadosPorCantidad(factura);

//  Bucle para mostrar el array ordenado

function mostrar(array){
    for(i=0;i<array.length;i++){
        console.log("id: " + array[i].id + ", descripcion: " + array[i].descripcion + ", precio: " + array[i].precio + ", cantidad: " + array[i].cantidad);
    }
}

mostrar(orden);


// Apartado 2:

/**
 * 
 * @param {*} factura Array factura
 * @param {*} elementos Total de elementos que se guardan en el resultado
 * @returns devuelve resultado
 */

function obtenerNMasCaros(factura, elementos){
    let resultado = "";
    if(elementos > factura.length){
        resultado = "ERROR: El total de elementos es mayor al tamaño de la factura";
    }else{
        resultado = factura.sort((x, y) => y.precio - x.precio).slice(0,elementos);
    }
    return resultado;
}

const caros = obtenerNMasCaros(factura, 1);

mostrar(caros);

///////////////////////////// AQUÍ TERMINA TU CÓDIGO /////////////////////////