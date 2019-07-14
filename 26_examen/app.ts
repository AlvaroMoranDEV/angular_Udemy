// Uso de Let y Const
var nombre = "Ricardo";
var edad = 23;
var Personaje =  {
    nombre: nombre,
    edad: edad
}

let nombre1 = "Pepe";
let edad1 = 24;
let Personaje1 =  {
    nombre,
    edad
}
const nombre2 = "Paco";
const edad2 = 254;
const Personaje2 =  {
    nombre, 
    edad
}

// Interfaz para validar el siguiente objeto
var batman =  {
    nombre: "Bruno Diaz",
    artesMarciales: ["karate, aikido"]
}

interface heroe {
    nombre:string,
    artesMarciales:string[]
}
let batman2:heroe = {
    nombre: "Batman",
    artesMarciales: ["una", "dos"]
}

// Convertir esta funcion a una funcion de flecha
function resultadoDoble (a,b) {
    return (a + b) * 2;
}
let resultadoDobleFlecha = (a:number, b:number) => (a + b) * 2;

// Funcion con parametros obligatorios, opcionales y defecto
function getAvenger (nombre:string, poder?:string, arma:string = "arco") {
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    } else {
        mensaje = nombre + " tiene un arma " + arma;
    }
}