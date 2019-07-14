// Creacion de clase
class Avenger {
    // Variables con generacion de valores por defecto
    nombre:string = "Antman";
    equipo:string = undefined;
    nombreReal:string = undefined;
    
    puedePelear:boolean = false;
    peleasGanadas:number = 0;

    //Constructor de la clase
    constructor(nombre:string, equipo:string, nombreReal:string) {
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
    }
}

// Creacion del objeto
let antMan:Avenger = new Avenger("Nombre", "Equipo", "NombreReal");
console.log(antMan);