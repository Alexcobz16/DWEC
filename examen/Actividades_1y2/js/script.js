///////////////////////////// FUNCIONES QUE DEBES IMPLEMENTAR /////////////////////////

// ACTIVIDAD 1:
// Clase Producto

/**
 * Clase producto con los atributos privados id, descripción y precio
 */
    class Producto{

    #id;
    #descripcion;
    #precio;
    
    /**
     * 
     * @param {*} id            Código del producto 
     * @param {*} descripcion   Breve descripción del producto
     * @param {*} precio        Valor del producto
     * 
     * Constructor al que se le deben pasar todos los parámetros al crear el objeto
     */

        constructor(id, descripcion, precio){
            this.#id = id;
            this.#descripcion = descripcion;
            this.#precio = precio;
        }
/**
 * Getters y setters de todos los atributos de la clase Producto
 */
        get id(){
            return this.#id;
        }

        set id(id){
            this.#id = id;
        }

        get descripcion(){
            return this.#descripcion;
        }

        set descripcion(descripcion){
            this.#descripcion = descripcion;
        }
        
        get precio(){
            return this.#precio;
        }

        set precio(precio){
            this.#precio = precio;
        }
/**
 * 
 * @returns Cadena que contiene información de todos los parámetros de la clase Producto
 * 
 */
        toString(){
            return "(" + this.#id + ") " + this.#descripcion + " - " + this.#precio;
        }

    }

//Clase ArticuloFactura

/**
 * clase ArticuloFactura hija de Producto que solo contiene el parámetro cantidad
 */

    class ArticuloFactura extends Producto{

        #cantidad;
/**
 * 
 * @param {*} cantidad      Parámetro de ArticuloFactura
 * @param {*} id            Código del producto de la clase Producto
 * @param {*} descripcion   Descripción del producto
 * @param {*} precio        Valor del producto
 * 
 * Constructor de la clase ArticuloFactura
 */
        constructor(cantidad, id, descripcion, precio){
            super(id, descripcion, precio);
            this.#cantidad = cantidad;
        }
    
        /**
         * Getter y setter del parámetro cantidad
         */

        get cantidad(){
            return this.#cantidad;
        }

        set cantidad(cantidad){
            this.#cantidad = cantidad;
        }

        /**
         * 
         * @returns Devuelve el precio total a pagar de un artículo
         */

        getTotal() {
            let total = this.cantidad * super.precio;
            return total;
        }

        /**
         * 
         * @returns Cadena con la información del producto a la que se complementa con la cantidad
         */

        toString(){
            return super.toString() + " x " + this.#cantidad;
        }

    };

//ACTIVIDAD 2:
/**
 * 
 * @returns Array de objetos ArticuloFactura
 */
function crearFactura(){
    const articulos = [new ArticuloFactura(3, 8, "Almendras bolsa 200gr", 3.12), new ArticuloFactura(1, 12, "Harina bolsa 1Kg", 2.30), new ArticuloFactura(4, 4, "Piña conserva lata 500gr", 2.10)];
    return articulos;
}
/**
 * 
 * @param {*} factura 
 * 
 * Muestra por pantalla una factura
 */
function mostrarFacturas(factura){
    console.log(facturas[i].toString());
}
/**
 * total = suma de los precios por las cantidades de todos los productos
 * facturas  = Array de objetos ArticuloFactura
 */

let total = 0;
const facturas = crearFactura();

/**
 * Muestra cada una de las facturas y suma el total de cada una
 */

for(i=0;i<facturas.length;i++){
    mostrarFacturas(facturas[i]);
    total += facturas[i].getTotal();
}

//Muestra el total de la factura

console.log(total.toFixed(2));

///////////////////////////// FIN FUNCIONES QUE DEBES IMPLEMENTAR /////////////////////////