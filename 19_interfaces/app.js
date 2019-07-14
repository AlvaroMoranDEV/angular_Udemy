"use strict";
var wolverine = {
    nombre: "Wolverine",
    poder: "regeneracion"
};
function enviarMision(xmen) {
    console.log("Enviar a: " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviar al cuartel a: " + xmen.nombre);
}
enviarMision(wolverine);
enviarCuartel(wolverine);
