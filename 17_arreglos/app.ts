let avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
}

// Sintaxis con desestructuracion de objetos -> sintaxis let {}
let { nombre, clave, poder} = avenger;
console.log(nombre, clave, poder);

let {nombre:alias1, poder:alias2, clave:alias3} = avenger;
console.log(alias1, alias2, alias3);

// Acceso común a sus variables
//let nombre = avenger.nombre;
//let clave = avenger.clave;
//let poder = avenger.poder;

// Creacion de un array
let avengers:string[] = ["Thor", "Steve", "Tony"];
// Accedemos a ellos mediante desestructuracion de arreglos -> ES SECUENCIAL
let [thor, capi, ironman] = avengers;
console.log(thor, capi, ironman);

