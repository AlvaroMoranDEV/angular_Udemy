"use strict";
// Ejemplo unico argumento
let miFuncion = function (a) {
    return a;
};
let miFuncionFlecha = (a) => a;
console.log(miFuncion("normal"));
console.log(miFuncionFlecha("flecha"));
// Ejemplo varios argumentos
let miFuncion2 = function (a, b) {
    return a + b;
};
let miFuncionFlecha2 = (a, b) => a + b;
// Ejemplo con varias lineas
let miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
let miFuncionFlecha3 = (nombre) => {
    nombre = nombre.toUpperCase();
    return nombre;
};
// Utilidades
let hulk = {
    nombre: "Hulk",
    smash() {
        // parentesis vacios por flecha sin args
        setTimeout(() => {
            console.log(this.nombre + " smash!!!");
        }, 1500);
    }
};
hulk.smash();
