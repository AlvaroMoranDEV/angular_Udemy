import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {

  @Input () items:any[] = [];

  constructor(private router:Router) { }

  ngOnInit() { }

  verArtista(item:any) {
    
    let artistaId;
    
    if (item.type ==='artist') {
      // Recibimos un artista
      artistaId = item.id;
    } else {
      // Recibimos un album
      artistaId = item.artists[0].id;
    }
    this.router.navigate(['/artist', artistaId]);
  }

}