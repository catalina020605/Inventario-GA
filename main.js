import { ingresarUsuario, ingresarExistencias } from "./ingresar.js"
import { eliminarExistencias } from "./eliminar.js";

function eleccionUsuario(pedir) {
    window.alert("Podras elegir entre: \n 1. Mostrar cantidad de productos disponibles \n 2. Ingresar nuevas existencias del producto \n 3. Eliminar existencias del producto ")
    pedir = ingresarUsuario("Que desea hacer");
    let actualizado="";
    let eliminar="";

    switch (pedir) {
        case "1":
            console.log(localStorage);
            break;
        case "2":
            actualizado = ingresarExistencias();
            break;
        case "3":
            eliminar = eliminarExistencias();
            break;
        default:
            console.log("no coincide");
            break;
    }
    return pedir;

}

eleccionUsuario();
