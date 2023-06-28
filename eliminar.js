function ingresarUsuario(mensaje) {
    let pedir = prompt(mensaje);
    return pedir;
}

function pedirCantidad(mensaje1) {
    let pedir1 = parseInt(prompt(mensaje1))
    return pedir1;
}

function eliminarExistencias() {
    let categorias = "";
    let cantidad = 0;
    let cantidadPro = 0;
    let producto = "";
    let mostrar="";

    categorias = ingresarUsuario("Ingrese la categoria");
    producto = ingresarUsuario("Ingrese el producto");


    if (categorias == "granos") {
        switch (producto) {
            case producto = "arroz":
                cantidad = localStorage.getItem("arroz")
                cantidadPro = pedirCantidad("Ingrese la cantidad la cual desea eliminar")
                localStorage.setItem("arroz", parseInt(cantidad) - cantidadPro)
                console.log("La cantidad del " + producto + " ha sido eliminada a", localStorage.getItem("arroz"));
                break;
            case producto = "frijoles":
                cantidad = localStorage.getItem("frijoles")
                cantidadPro = pedirCantidad("Ingrese la cantidad la cual desea eliminar")
                localStorage.setItem("frijoles", parseInt(cantidad) - cantidadPro)
                console.log("La cantidad del " + producto + " ha sido eliminada a", localStorage.getItem("frijoles"));
                break;

            case producto = "lentejas":
                cantidad = localStorage.getItem("lentejas")
                cantidadPro = pedirCantidad("Ingrese la cantidad la cual desea eliminar")
                localStorage.setItem("lentejas", parseInt(cantidad) - cantidadPro)
                console.log("La cantidad del " + producto + " ha sido eliminada a", localStorage.getItem("lentejas"));
                break;
            default:

                break;
        }
    }

    if (categorias == "aseo") {
        switch (producto) {
            case producto = "jabon":
                cantidad = localStorage.getItem("jabon")
                cantidadPro = pedirCantidad("Ingrese la cantidad la cual desea eliminar")
                localStorage.setItem("jabon", parseInt(cantidad) - cantidadPro)
                console.log("La cantidad del " + producto + " ha sido eliminada a", localStorage.getItem("jabon"));
                break;

            case producto = "limpido":
                cantidad = localStorage.getItem("limpido")
                cantidadPro = pedirCantidad("Ingrese la cantidad la cual desea eliminar")
                localStorage.setItem("limpido", parseInt(cantidad) - cantidadPro)
                console.log("La cantidad del " + producto + " ha sido eliminada a", localStorage.getItem("limpido"));
                break;

            case producto = "champu":
                cantidad = localStorage.getItem("champu")
                cantidadPro = pedirCantidad("Ingrese la cantidad la cual desea eliminar")
                localStorage.setItem("champu", parseInt(cantidad) - cantidadPro)
                console.log("La cantidad del " + producto + " ha sido eliminada a", localStorage.getItem("champu"));
                break;

            default:
                break;
        }
    }

    if (categorias == "carnes") {
        switch (producto) {
            case producto = "pescado":
                cantidad = localStorage.getItem("pescado")
                cantidadPro = pedirCantidad("Ingrese la cantidad la cual desea eliminar")
                localStorage.setItem("pescado", parseInt(cantidad) - cantidadPro)
                console.log("La cantidad del " + producto + " ha sido eliminada a", localStorage.getItem("pescado"));
                break;

            case producto = "res":
                cantidad = localStorage.getItem("res")
                cantidadPro = pedirCantidad("Ingrese la cantidad la cual desea eliminar")
                localStorage.setItem("res", parseInt(cantidad) - cantidadPro)
                console.log("La cantidad del " + producto + " ha sido eliminada a", localStorage.getItem("res"));
                break;

            case producto = "cerdo":
                cantidad = localStorage.getItem("cerdo")
                cantidadPro = pedirCantidad("Ingrese la cantidad la cual desea eliminar")
                localStorage.setItem("cerdo", parseInt(cantidad) - cantidadPro)
                console.log("La cantidad del " + producto + " ha sido eliminada a", localStorage.getItem("cerdo"));
                break;
            break;
            default:
                break;
        }
    }

    if (categorias == "lacteos") {
        switch (producto) {
            case producto = "kumis":
                cantidad = localStorage.getItem("kumis")
                cantidadPro = pedirCantidad("Ingrese la cantidad la cual desea eliminar")
                localStorage.setItem("kumis", parseInt(cantidad) - cantidadPro)
                console.log("La cantidad del " + producto + " ha sido eliminada a", localStorage.getItem("kumis"));
                break;

            case producto = "yogurt":
                cantidad = localStorage.getItem("yogurt")
                cantidadPro = pedirCantidad("Ingrese la cantidad la cual desea eliminar")
                localStorage.setItem("yogurt", parseInt(cantidad) - cantidadPro)
                console.log("La cantidad del " + producto + " ha sido eliminada a", localStorage.getItem("yogurt"));
                break;

            case producto = "leche":
                cantidad = localStorage.getItem("leche")
                cantidadPro = pedirCantidad("Ingrese la cantidad la cual desea eliminar")
                localStorage.setItem("leche", parseInt(cantidad) - cantidadPro)
                console.log("La cantidad del " + producto + " ha sido eliminada a", localStorage.getItem("leche"));
                break;

            default:
                break;
        }
    }
    mostrar = prompt("¿desea ver el la lista actualizada? \n 1. Si \n 2. No")
        if (mostrar == "1") {
            console.log(localStorage);
        } else {
            console.log("Gracias por utilizar nuestro programa");
        }
}
    
  export{eliminarExistencias}