// movie-carrousel-list.component.ts
import { Component, OnInit } from '@angular/core';
import { FilmDetailResponse } from 'src/app/models/filmDetail.interface';
import { moviesObjectService } from 'src/app/services/moviesObject.service';

@Component({
  selector: 'app-movie-carrousel-list',
  templateUrl: './movie-carrousel-list.component.html',
  styleUrls: ['./movie-carrousel-list.component.css']
})
export class MovieCarrouselListComponent implements OnInit {
  films: FilmDetailResponse[] = [];
  movieIds = [575264,872585,385687];
  

  constructor(private filmService: moviesObjectService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.movieIds.forEach((movieId) => {
      this.filmService.getFilmById(movieId).subscribe((resp) => {
        this.films.push(resp);
      });
    });
  }

  getMoviePoster(film: FilmDetailResponse): string {
    return "https://image.tmdb.org/t/p/original" + film.backdrop_path;
  }
}
