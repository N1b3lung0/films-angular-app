import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Movie, NowPlayingResponse } from '../interfaces/now-playing-response';

@Injectable({
  	providedIn: 'root'
})
export class MoviesService {

	private baseUrl    = 'https://api.themoviedb.org/3';
	private pageNumber = 1;
	private loading = false;

  	constructor( private http: HttpClient ) { }

	get params() {
		return {
			api_key: '2e346672c9a8fabe0617b6e63d14e885',
			language: 'es-ES',
			page: this.pageNumber.toString(),
		}
	}

	getNowPlaying(): Observable<Movie[]> {

		if (this.loading) { return of([]); }
		this.loading = true;

		return this.http.get<NowPlayingResponse>(`${ this.baseUrl }/movie/now_playing`, { params: this.params })
					.pipe(
						map( (resp) => resp.results ), 
						tap( () => {
						this.pageNumber += 1;
						this.loading = false;
					}));
	}
}
