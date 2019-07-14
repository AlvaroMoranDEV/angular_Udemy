let promesa = new Promise( function (resolve, reject) {
    // Cuerpo del metodo a ejecutar
    setTimeout( () => {        
        console.log("Promesa terminada")
        // Termina bien
        resolve();

        // Termina mmal
        //reject();    
    }, 1500);    
})

console.log("Paso 1");

// Llamada a la funcion
promesa.then(function () {
    console.log("Ejecutame cuando se termine bien");
},
    function() {
        console.log("Ejecutame cuando se termine mal");
    }
)

console.log("Paso 2");