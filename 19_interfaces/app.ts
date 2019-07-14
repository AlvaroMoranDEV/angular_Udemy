interface Xmen {
    nombre:string, 
    poder:string
}

let wolverine:Xmen = {
    nombre: "Wolverine",
    poder: "regeneracion"
}


function enviarMision (xmen : Xmen) {
    console.log("Enviar a: " + xmen.nombre);
}

function enviarCuartel  (xmen : Xmen) {
    console.log("Enviar al cuartel a: " + xmen.nombre);
}

enviarMision(wolverine); 
enviarCuartel(wolverine);

