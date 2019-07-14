"use strict";
var nombre = "Juan";
var apellido = "Perez";
var edad = 24;
var texto = "Hola:\n" + nombre + " \n" + apellido + " \n(Edad: " + edad + ")";
console.log(texto);
function getNombre() {
    return "Fernando";
}
var texto2 = "" + getNombre();
console.log(texto2);
