// Ejemplo unico argumento
let miFuncion = function( a:string) {
    return a;
}
let miFuncionFlecha = (a:string) => a;
console.log( miFuncion("normal"));
console.log( miFuncionFlecha("flecha"));

// Ejemplo varios argumentos
let miFuncion2 = function( a:number, b:number) {
    return a + b;
}
let miFuncionFlecha2 = (a:number, b:number) => a + b;

// Ejemplo con varias lineas
let miFuncion3 = function (nombre:string) {
    nombre = nombre.toUpperCase();
    return nombre;
}
let miFuncionFlecha3 = (nombre:string) =>  {
    nombre = nombre.toUpperCase();
    return nombre;
}



// Utilidades
let hulk =  {
    nombre: "Hulk",
    smash() {
        // parentesis vacios por flecha sin args
        setTimeout( () => {
            console.log(this.nombre + " smash!!!");
        }, 1500)      
    }
}
hulk.smash();



