import { Component, Input } from '@angular/core';
import { TopRated } from 'src/app/models/movie-list-rated.interface';
import { Film } from 'src/app/models/movieObject-list.interface';
import { Upcoming } from 'src/app/models/moive-list-upcoming.interface'; // Asegúrate de importar el modelo Upcoming
import { Router } from '@angular/router';
import { Peliculas } from 'src/app/models/actor-film.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() film!: Film;
  @Input() topRated!: TopRated;
  @Input() upComing!: Upcoming; 
  @Input() actorFilms!: Peliculas;

  constructor(private router: Router) {} 
  
  getMovieImage() {
    if (this.film) {
      return "https://image.tmdb.org/t/p/w500" + this.film.poster_path;
    } else if (this.topRated) {
      return "https://image.tmdb.org/t/p/w500" + this.topRated.poster_path;
    } else if (this.upComing) {
      return "https://image.tmdb.org/t/p/w500" + this.upComing.poster_path;
    }else if(this.actorFilms){
      return "https://image.tmdb.org/t/p/w500" + this.actorFilms.poster_path;
    } else {
      return ""; 
    }
  }

  getTitle() {
    if (this.film) {
      return this.film.original_title;
    } else if (this.topRated) {
      return this.topRated.original_title;
    } else if (this.upComing) {
      return this.upComing.original_title;
    } else if (this.actorFilms) {
      return this.actorFilms.original_title;
    } else {
      return ""; 
    }
  }
  getMovieRated() {
    if (this.film) {
      return parseFloat(this.film.vote_average.toFixed(1));
    } else if (this.upComing) {
      return parseFloat(this.upComing.vote_average.toFixed(1));
    } else if (this.topRated) {
      return parseFloat(this.topRated.vote_average.toFixed(1));
    } else {
      return 0; // O cualquier otro valor por defecto que desees
    }
  }
  onCardClick() {
    const movieId = this.film?.id || this.topRated?.id || this.upComing?.id || this.actorFilms?.id;
    
    if (movieId) {
      console.log('Card clicked!', movieId);
      this.router.navigate(['/movie-details', movieId]); 
    }
  }
}
