"use strict";
// Funcion que espera un arg de entrada string
function activar(quien) {
    var mensaje;
    mensaje = quien + " activ\u00F3 la batse\u00F1al";
    console.log(mensaje);
}
activar("Gordon");
// activar(3); -> daria error de compilacion
function activarDefecto(quien, objeto) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    mensaje = quien + " activ\u00F3 la " + objeto;
    console.log(mensaje);
}
activarDefecto("Gordon");
activarDefecto("Pepe", "cosa");
function activarOpcional(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) { // Comprobamos si ha llegado algo
        mensaje = quien + " activ\u00F3 la " + objeto + " en el momento " + momento;
    }
    else {
        mensaje = quien + " activ\u00F3 la " + objeto;
    }
    console.log(mensaje);
}
activarOpcional("Pepe");
activarOpcional("Paco", "fregona");
activarOpcional("Colas", "luz", "anterior");
