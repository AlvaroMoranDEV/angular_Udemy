import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  loading:boolean;

  error:boolean;

  errorCode:string;

  constructor(private service:SpotifyService) {

      this.loading = true;
      this.error = false;

      this.service.getNewReleases().subscribe( (data) => {
        this.nuevasCanciones = data;
        this.loading = false;
      }, (errorServicio) => {
        this.error = true;
        this.loading = false;
        this.errorCode = errorServicio.error.error.message;
        console.log(errorServicio);
      });
   }

  ngOnInit() {
  }

}
