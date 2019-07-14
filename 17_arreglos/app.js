"use strict";
var avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};
// Sintaxis con desestructuracion de objetos -> sintaxis let {}
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
console.log(nombre, clave, poder);
var alias1 = avenger.nombre, alias2 = avenger.poder, alias3 = avenger.clave;
console.log(alias1, alias2, alias3);
// Acceso común a sus variables
//let nombre = avenger.nombre;
//let clave = avenger.clave;
//let poder = avenger.poder;
// Creacion de un array
var avengers = ["Thor", "Steve", "Tony"];
// Accedemos a ellos mediante desestructuracion de arreglos -> ES SECUENCIAL
var thor = avengers[0], capi = avengers[1], ironman = avengers[2];
console.log(thor, capi, ironman);
