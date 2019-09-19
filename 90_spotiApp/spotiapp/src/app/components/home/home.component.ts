import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

import { map } from 'rxjs/operator'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  constructor(private service:SpotifyService) {

      this.service.getNewReleases().subscribe( (data: any) => {
        console.log(data.albums.items);
        this.nuevasCanciones = data.albums.items;
      });
   }

  ngOnInit() {
  }

}
