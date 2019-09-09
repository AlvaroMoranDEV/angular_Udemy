import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  
  heroes:Heroe[] = [];

  termino:string;

  vacio:boolean;

  constructor(private activatedRoute:ActivatedRoute, 
              private heroesService:HeroesService) {   
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['term'];
      this.heroes = this.heroesService.buscarHeroes(this.termino);
      console.log(this.heroes);
    });

    if (this.heroes.length > 0) {
      this.vacio = false;
    } else {
      this.vacio = true;
    }
  }

  verHeroe(id:number){    
    console.log('no implementado');
  }
}
