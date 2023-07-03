
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

do {
    opcion = prompt("Usted esta ingrensado a la sección de carga de stock. Ingrese: \nC - para continuar, \nS - para salir");
    opcion = opcion.toUpperCase();

} while (opcion != "C" && opcion != "S");


if (opcion == "C") {

    const productos = [];

    do {

        const cod_producto = prompt("Ingrese el código del producto:");
        const tipo_producto = prompt("Ingrese el tipo de producto:");
        const talle = prompt("Ingrese el talle del producto:");
        const color = prompt("Ingrese el color del producto:");
        const precio_costo_unitario = parseFloat(prompt("Ingrese el precio de costo unitario:"));
        const cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));


        // Agregar el objeto al array
        productos.push(new Producto(cod_producto, tipo_producto, talle, color, precio_costo_unitario, cantidad));

        do {
            continuar = prompt("¿Desea cargar otro producto?\nS : Si,\nN : No.")
            continuar = continuar.toUpperCase();
        } while (continuar != "S" && continuar != "N");

    } while (continuar != "N");


    do {

        revision = prompt("¿Desea revisar los datos cargados?. Ingrese: \nS - Si,\nN - No.");
        revision = revision.toUpperCase();

    } while (revision != "S" && revision != "N");

    while (revision == "S") {

        let mensaje = "Listado de productos:\n\n";

        productos.forEach((producto) => {
            mensaje += "Producto " + (productos.indexOf(producto) + 1) + "\n";
            mensaje += "cod_producto: " + producto.cod_producto + "\n";
            mensaje += "tipo de producto: " + producto.tipo_producto + "\n";
            mensaje += "talle: " + producto.talle + "\n";
            mensaje += "color: " + producto.color + "\n";
            mensaje += "precio costo unitario: " + producto.precio_costo_unitario + "\n";
            mensaje += "cantidad: " + producto.cantidad + "\n\n";
        });

        alert(mensaje);

        do {
            modificacion = prompt("¿Desea corregir algún producto mal cargados?. Ingrese: \nS - Si, \nN - No.");
            modificacion = modificacion.toUpperCase();

        } while (modificacion != "S" && modificacion != "N");

        while (modificacion == "S") {

            let indice = parseInt(prompt("Ingrese el nro de producto a corregir:"));
            indice = indice - 1;

            // Verifica si el índice es válido
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
                modificacion = prompt("¿Desea corregir otro producto mal cargados?. Ingrese: \nS - Si, \nN - No.");
                modificacion = modificacion.toUpperCase();

            } while (modificacion != "S" && modificacion != "N");

        }


        do {
            eliminacion = prompt("¿Desea eliminar uno de los datos cargados?. Ingrese: \nS - Si, \nN - No");
            eliminacion = eliminacion.toUpperCase();

        } while (eliminacion != "S" && eliminacion != "N");

        if (eliminacion == "S") {

            // Solicitar al usuario el índice del elemento a eliminar
            let indiceEliminar = 0;
            do {
                indiceEliminar = parseInt(prompt("Ingrese el nro de producto a eliminar:"));
                indiceEliminar = indiceEliminar - 1;

            } while (indiceEliminar < 0 || indiceEliminar > productos.length);

            productos.splice(indiceEliminar, 1);
        } 

        do {
            revision = prompt("¿Desea revisar los datos cargados?. Ingrese: \nS - Si, \nN - No.");
            revision = revision.toUpperCase();

        } while (revision != "S" && revision != "N");


    }

}

alert("Ud ha salido del módulo de carga de stock.")
