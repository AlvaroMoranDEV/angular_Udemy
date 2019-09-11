import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pipes';
  
  nombre:string = "Fernando";

  array:number[] = [1,2,3,4,5,6];

  pi:number = Math.PI;

  decimal:number = 0.35156;

  salario:number = 12.345;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: "3"
    }
  }

  //registerLocaleData(localeEs);

  valorDePromesa = new Promise ( (resolve, reject) => {
    setTimeout( ()=> resolve('Llego el dato'), 3500);
  });

  fecha = new Date();

  nombres:string[] = ['ferNando','herReRA','pePE','PACo'];

}
