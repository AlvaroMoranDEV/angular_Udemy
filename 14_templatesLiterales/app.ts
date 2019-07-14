let nombre:string = "Juan";
let apellido:string = "Perez";
let edad:number = 24;

let texto = `Hola:
${nombre} 
${apellido} 
(Edad: ${edad})`;

console.log(texto);


function getNombre() {
    return "Fernando";
}
let texto2 = `${ getNombre()}`;
console.log(texto2);