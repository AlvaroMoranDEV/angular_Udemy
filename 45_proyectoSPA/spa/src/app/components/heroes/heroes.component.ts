import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  private heroesService:HeroesService;
  private router:Router;

  public heroes:Heroe[] = [];

  constructor(heroesService:HeroesService, router:Router) { 
    this.heroesService = heroesService;
    this.router = router;
  }

  // Carga la informacion del servicio una vez esta inicializado el componente
  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

  verHeroe(id:number) {
    this.router.navigate( ['/heroe', id] );
  }

}
