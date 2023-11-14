import { Component } from '@angular/core';
import { FilmDetailResponse } from 'src/app/models/filmDetail.interface';
import { moviesObjectService } from 'src/app/services/moviesObject.service';

@Component({
  selector: 'app-movie-carrousel-list',
  templateUrl: './movie-carrousel-list.component.html',
  styleUrls: ['./movie-carrousel-list.component.css']
})
export class MovieCarrouselListComponent {
  film !: FilmDetailResponse;
  movieId=	575264;

  constructor(private filmService: moviesObjectService){}
  
  getMoviePoster(){
    return"https://image.tmdb.org/t/p/original" + this.film.backdrop_path;
  }
  getMovieImage(){
    return"https://image.tmdb.org/t/p/original" + this.film.poster_path;
  }
  

  ngOnInit(): void {
    this.filmService.getFilmById(this.movieId).subscribe(resp => {
      this.film=resp;
      
    })
  }
}
