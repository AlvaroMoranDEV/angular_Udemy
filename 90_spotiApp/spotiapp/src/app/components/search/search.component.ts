import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas:any[] = [];

  loading:boolean;

  error:boolean;

  errorCode:string;

  constructor(private spotify:SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino:string) {

    this.loading = true;
    this.error = false;

    this.spotify.getArtistas(termino).subscribe( (data) => {
    this.artistas = data;
    this.loading = false;    
    }, (errorServicio) => {
      this.error = true;
      this.loading = false;
      this.errorCode = errorServicio.error.error.message;
    });
  }
}
