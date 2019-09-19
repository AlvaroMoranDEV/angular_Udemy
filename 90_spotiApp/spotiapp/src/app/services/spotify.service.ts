import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

   getNewReleases() {
  
      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQCCc7N2MXoQxh4SWIFK3FC_7Vf2rR_kc2lP64CnZMVx8Yn5BlraH-uZkouKZx6M0imgFkSxZXekmZ_olEE'
      });

      return this.http.get('https://api.spotify.com/v1/browse/new-releases?country=SE', {headers})
      .pipe( map( )) 
   }

   getArtista(termino:string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCCc7N2MXoQxh4SWIFK3FC_7Vf2rR_kc2lP64CnZMVx8Yn5BlraH-uZkouKZx6M0imgFkSxZXekmZ_olEE'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers});
   }
}
