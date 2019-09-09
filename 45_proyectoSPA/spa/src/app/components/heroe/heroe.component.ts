import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  private MARVEL:string = 'assets/img/marvel.jpg';

  private DC:string = 'assets/img/dc.jpg';

  private activatedRoute:ActivatedRoute;

  private heroesService:HeroesService;

  public heroe:any = {};

  constructor(activatedRoute:ActivatedRoute, heroesService:HeroesService) { 
    this.activatedRoute = activatedRoute;
    this.heroesService = heroesService;
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroesService.getHeroe(params ['id']);
    });
  }

  ngOnInit() {
  }

  getEditorial() {
    if (this.heroe.casa == 'Marvel') {
      return this.MARVEL;
    } else {
      return this.DC;
    }
  }
}
