import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) {    
   }

  ngOnInit() {
  }

  buscarHeroe(term:string) { 
    console.log('Buscando con clave: ' + term);        
    this.router.navigate( ['/search', term] );
  }
}
