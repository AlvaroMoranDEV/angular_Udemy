"use strict";
// Tipos primitivos
var nombre = "Peter";
var numero = 123;
var booleano = false;
// Algunos tipos compuestos
var hoy = new Date();
hoy = new Date('2010-10-02');
// Tipo Any - Admite cualquiera
var cualquiera;
cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;
// Definición de tipo compuesto
var spiderman = {
    nombre: "Peter",
    edad: 20
};
// Redefinición del tipo compuesto - necesitamos todas sus variables
spiderman = {
    nombre: "Paco",
    edad: 46
};
