import { Component, Input } from '@angular/core';
import { FilmDetailResponse, Genre } from 'src/app/models/filmDetail.interface';
import { moviesObjectService } from 'src/app/services/moviesObject.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {

  film !: FilmDetailResponse;
  movieId=	575264
  listGenre: Genre[] = [];
  getMoviePoster(){
    return"https://image.tmdb.org/t/p/original" + this.film.backdrop_path;
  }
  getMovieImage(){
    return"https://image.tmdb.org/t/p/original" + this.film.poster_path;
  }
  constructor(private filmService: moviesObjectService){}
  ngOnInit(): void {
    this.filmService.getFilmById(this.movieId).subscribe(resp => {
      this.film=resp;
      this.listGenre = resp.genres;
    })
  }
}
