import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  loading:boolean = false;

  constructor(private service:SpotifyService) {

      this.loading = true;

      this.service.getNewReleases().subscribe( (data) => {
        this.nuevasCanciones = data;
        this.loading = false;
      });
   }

  ngOnInit() {
  }

}
