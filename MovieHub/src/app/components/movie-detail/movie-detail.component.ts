import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmDetailResponse, Genre, ProductionCompany } from 'src/app/models/filmDetail.interface';
import { Cast } from 'src/app/models/people-list-credits.interface';
import { SerieDetailResponse } from 'src/app/models/serie-details.interface';
import { ActorService } from 'src/app/services/actor.service';
import { moviesObjectService } from 'src/app/services/moviesObject.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  film!: FilmDetailResponse;
  listCast: Cast[] = [];
  listGenre: Genre[] = [];
  listCompany: ProductionCompany[] = [];
  serieToShow!: SerieDetailResponse;

  constructor(
    private filmService: moviesObjectService,
    private actorService: ActorService,
    private route: ActivatedRoute
  ) {}

  getMoviePoster() {
    return "https://image.tmdb.org/t/p/original" + this.film.backdrop_path;
  }

  getMovieImage() {
    return "https://image.tmdb.org/t/p/original" + this.film.poster_path;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieId = params['id'];
      this.filmService.getFilmById(movieId).subscribe(resp => {
        this.film = resp;
        this.listGenre = resp.genres;
        this.listCompany = resp.production_companies;
      });
      this.actorService.getPeopleByMovie(movieId).subscribe(resp => {
        this.listCast = resp.cast;
      });
    });
  }
}
