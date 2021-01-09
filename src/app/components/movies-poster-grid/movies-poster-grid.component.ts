import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/now-playing-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  	selector: 'app-movies-poster-grid',
  	templateUrl: './movies-poster-grid.component.html',
  	styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit {

	@Input() movies: Movie[];
	@Input() moviesSlideshow: Movie[];

  	@HostListener('window:scroll', ['$event'])

	onScroll() {
		const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1200;
		const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
		
		if (pos > max) {
			this.moviesService.getNowPlaying().subscribe( movies => {
				this.movies.push(...movies);
			})
		}
	
	}

	constructor( private moviesService: MoviesService ) { }

  	ngOnInit(): void {
    	this.moviesService.getNowPlaying()
      		.subscribe( movies => {
				this.movies = movies;
				this.moviesSlideshow = movies;
    		})
  	}

}
