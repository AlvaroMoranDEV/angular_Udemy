// Funcion que espera un arg de entrada string
function activar( quien:string) {

    let mensaje:string;
    mensaje = `${quien} activó la batseñal`;
    console.log(mensaje);

}
activar("Gordon");
// activar(3); -> daria error de compilacion

function activarDefecto (quien:string, objeto:string = "batiseñal") {
    let mensaje:string;
    mensaje = `${quien} activó la ${objeto}`;
    console.log(mensaje);
}
activarDefecto("Gordon");
activarDefecto("Pepe", "cosa");

function activarOpcional(    quien:string, 
                             objeto:string = "batiseñal",
                             momento?:string) {
   
    let mensaje:string;

    if (momento) { // Comprobamos si ha llegado algo
        mensaje = `${quien} activó la ${objeto} en el momento ${momento}`;
    } else {
        mensaje = `${quien} activó la ${objeto}`;
    }
    console.log(mensaje);
}

activarOpcional("Pepe");
activarOpcional("Paco", "fregona");
activarOpcional("Colas", "luz", "anterior");
