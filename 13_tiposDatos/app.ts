// Tipos primitivos
let nombre:string = "Peter";
let numero:number = 123;
let booleano:boolean = false;

// Algunos tipos compuestos
let hoy:Date = new Date();
hoy = new Date('2010-10-02');

// Tipo Any - Admite cualquiera
let cualquiera:any;
cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;

// Definición de tipo compuesto
let spiderman = {
    nombre:"Peter",
    edad: 20
}
// Redefinición del tipo compuesto - necesitamos todas sus variables
spiderman = {
    nombre:"Paco",
    edad:46
}