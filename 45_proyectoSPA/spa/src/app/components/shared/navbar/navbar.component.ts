import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  private router:Router;

  constructor(router:Router) {
    this.router = router;
   }

  ngOnInit() {
  }

  buscarHeroe(term:string) {     
    this.router.navigate( ['/search', term] );
  }
}
