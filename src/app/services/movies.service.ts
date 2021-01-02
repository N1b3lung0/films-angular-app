import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NowPlayingResponse } from '../interfaces/now-playing-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient ) { }

  getNowPlaying(): Observable<NowPlayingResponse> {
    return this.http.get<NowPlayingResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=2e346672c9a8fabe0617b6e63d14e885&language=es-ES&page=1');
  }
}
