const IVA = 1.21;
const GANANCIA = 1.15;


class Producto {

    constructor(cod_producto, tipo_producto, talle, color, precio_costo_unitario, cantidad) {
        this.cod_producto = cod_producto;
        this.tipo_producto = tipo_producto;
        this.talle = talle;
        this.color = color;
        this.precio_costo_unitario = precio_costo_unitario;
        this.cantidad = cantidad;
    }


}



/* do {
    opcion = prompt("Usted esta ingrensado a la sección de carga de stock. Ingrese: \nC - para continuar, \nS - para salir");
    opcion = opcion.toUpperCase();

} while (opcion != "C" && opcion != "S");


if (opcion == "C") {

   const productos = [];

 do{


   const cod_producto = prompt("Ingrese el código del producto:");
   const tipo_producto = prompt("Ingrese el tipo de producto:");
   const talle = prompt("Ingrese el talle del producto:");
   const color = prompt("Ingrese el color del producto:");
   const precio_costo_unitario = parseFloat(prompt("Ingrese el precio de costo unitario:"));
   const cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));


  // Agregar el objeto al array
  productos.push(new Producto(cod_producto, tipo_producto, talle, color, precio_costo_unitario, cantidad));
   
  do{
  continuar = prompt("¿Desea cargar otro producto?\n C : Para continuar\n F : Para finalizar.")
  continuar = continuar.toUpperCase();
  }while(continuar != "C" && continuar != "F");

}while(continuar != "F");  */

const productos = [
    new Producto("001", "Camisa", "M", "Rojo", 29.99, 10),
    new Producto("002", "Pantalón", "L", "Negro", 49.99, 5),
    new Producto("003", "Zapatos", "40", "Azul", 79.99, 2)
];

do {
    revision = prompt("¿Desea revisar los datos cargados?. Ingrese: \nC - para continuar, \nS - para salir");
    revision = revision.toUpperCase();

} while (revision != "C" && revision != "S");

while (revision == "C") {

    let mensaje = "Listado de productos:\n\n";

    /*se eligio esta forma de salida ya que visualmente es mas aceptable desde el alert(), ya que la idea original era mostrarla con un encabezado y los productos listados
    un debajo del otro, pero la salida quedaba desprolija */

    for (let i = 0; i < productos.length; i++) {
        mensaje += "Producto " + (i + 1) + "\n";
        mensaje += "cod_producto: " + productos[i].cod_producto + "\n";
        mensaje += "tipo de producto: " + productos[i].tipo_producto + "\n";
        mensaje += "talle: " + productos[i].talle + "\n";
        mensaje += "color: " + productos[i].color + "\n";
        mensaje += "precio costo unitario: " + productos[i].precio_costo_unitario + "\n";
        mensaje += "cantidad: " + productos[i].cantidad + "\n\n";
    }

    alert(mensaje);

    /*aca hay que desarrollar la logica para corregir un elemento mal cargado*/

    do {
        modificacion = prompt("¿Desea corregir algún producto mal cargados?. Ingrese: \nC - para continuar, \nS - para salir");
        modificacion = modificacion.toUpperCase();

    } while (modificacion != "C" && modificacion != "S");

    while (modificacion == "C") {

        indice = parseInt(prompt("Ingrese el nro de producto a corregir:"));
        indice = indice - 1;

        // Verificar si el índice es válido
        if (indice >= 0 && indice < productos.length) {
            // Obtener el objeto Producto correspondiente al índice ingresado
            const productoAModificar = productos[indice];

            // Solicitar al usuario los nuevos valores para corregir los atributos del objeto
            const cod_producto = prompt("Ingrese el nuevo código del producto:");
            const tipo_producto = prompt("Ingrese el nuevo tipo de producto:");
            const talle = prompt("Ingrese el nuevo talle del producto:");
            const color = prompt("Ingrese el nuevo color del producto:");
            const precio_costo_unitario = parseFloat(prompt("Ingrese el nuevo precio de costo unitario:"));
            const cantidad = parseInt(prompt("Ingrese la nueva cantidad de productos:"));

            // Actualizar los valores del objeto con los nuevos valores ingresados por el usuario
            productoAModificar.cod_producto = cod_producto;
            productoAModificar.tipo_producto = tipo_producto;
            productoAModificar.talle = talle;
            productoAModificar.color = color;
            productoAModificar.precio_costo_unitario = precio_costo_unitario;
            productoAModificar.cantidad = cantidad;

            // Mostrar un mensaje de éxito
            alert("El elemento ha sido corregido correctamente.");
        } else {
            // Mostrar un mensaje de error si el índice no es válido
            alert("El índice ingresado no es válido.");
        }
        // se vuelve a consultar si se desea corregir otro producto.
        do {
            modificacion = prompt("¿Desea corregir otro producto mal cargados?. Ingrese: \nC - para continuar, \nS - para salir");
            modificacion = modificacion.toUpperCase();

        } while (modificacion != "C" && modificacion != "S");

    } // aca termina el while del comienzo de la seccion corregir producto


    /*aca hay que desarrollar la logica para elimiar un elemento mal cargado*/

    do {
        eliminacion = prompt("¿Desea eliminar uno de los datos cargados?. Ingrese: \nS - para continuar, \nN - para salir");
        eliminacion = eliminacion.toUpperCase();

    } while (eliminacion != "S" && eliminacion != "N");

    if (eliminacion == "S") {

        // Verificar si el índice es válido
        if (indice >= 0 && indice < productosArray.length) {
            // Utilizar el método splice() para eliminar el elemento del array
            productosArray.splice(indice, 1);

            // Mostrar un mensaje de éxito
            alert("El elemento ha sido eliminado correctamente.");
        } else {
            // Mostrar un mensaje de error si el índice no es válido
            alert("El índice ingresado no es válido.");
        }


    } else {

    }

    // fin seccion eliminar producto

    do {
        revision = prompt("¿Desea revisar los datos cargados?. Ingrese: \nC - para continuar, \nS - para salir");
        revision = revision.toUpperCase();

    } while (revision != "C" && revision != "S");


} // cierre del while que pregunta si de desea ver el listado 

/* agregar el porcentaje de comision sobre cada producto */

do {
    precioFinal = prompt("¿Desea listar los productos con sus precios de venta?. Ingrese: \nS - para continuar, \nN - para salir");
    precioFinal = precioFinal.toUpperCase();

} while (precioFinal != "S" && precioFinal != "N");

if (precioFinal == "S") {


} else {

}


/* }else{ */

/* } */

alert("Ud ha salido del módulo de carga de stock.")
