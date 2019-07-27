import { Component } from '@angular/core'

@Component (
    {
        selector: 'app-body',
        templateUrl: './body.component.html'
    }
)
export class BodyComponent {

    frase:any = {
        mensaje:"Tengo hambre",
        autor: "Alvaro"
    }

    mostrar:boolean = true;

    personajes: string[] = 
    [
        'Spiderman',
        'Venom',
        'Dr. Octopues'
    ];

}