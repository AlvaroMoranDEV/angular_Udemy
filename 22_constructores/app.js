"use strict";
// Creacion de clase
var Avenger = /** @class */ (function () {
    //Constructor de la clase
    function Avenger(nombre, equipo, nombreReal) {
        // Variables con generacion de valores por defecto
        this.nombre = "Antman";
        this.equipo = undefined;
        this.nombreReal = undefined;
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
// Creacion del objeto
var antMan = new Avenger("Nombre", "Equipo", "NombreReal");
console.log(antMan);
