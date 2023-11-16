import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmDetailResponse, Genre, ProductionCompany } from 'src/app/models/filmDetail.interface';
import { Cast } from 'src/app/models/people-list-credits.interface';
import { SerieDetailResponse } from 'src/app/models/serie-details.interface';
import { AccountService } from 'src/app/services/account.service';
import { ActorService } from 'src/app/services/actor.service';
import { moviesObjectService } from 'src/app/services/moviesObject.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  film!: FilmDetailResponse;
  id = 0;
  listCast: Cast[] = [];
  listGenre: Genre[] = [];
  listCompany: ProductionCompany[] = [];
  serieToShow!: SerieDetailResponse;
  estaEnFavoritos = false;

  constructor(
    private filmService: moviesObjectService,
    private actorService: ActorService,
    private route: ActivatedRoute,
    private accountService: AccountService
  ) {}

  getMoviePoster() {
    return "https://image.tmdb.org/t/p/original" + this.film.backdrop_path;
  }

  getMovieImage() {
    return "https://image.tmdb.org/t/p/original" + this.film.poster_path;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.filmService.getFilmById(this.id).subscribe(resp => {
        this.film = resp;
        this.listGenre = resp.genres;
        this.listCompany = resp.production_companies;
      });
      this.actorService.getPeopleByMovie(this.id).subscribe(resp => {
        this.listCast = resp.cast;
      });
    });
  }

  addToFavorite() {
    this.accountService.addMovieToFavorite(this.id).subscribe(resp => {
      if (resp.status_code == 1) {
        localStorage.setItem('movieIsFavorite', "true");
      } else {
        localStorage.setItem('movieIsFavorite', "false");
      }
      if (localStorage.getItem('movieIsFavorite') != "true") {
        this.estaEnFavoritos = false;
      } else {
        this.estaEnFavoritos = true;
      }
    });
  }

  removeToFavorite() {
    this.accountService.removeMovieToFavourite(this.id).subscribe(resp => {
      if (resp.status_code == 1) {
        localStorage.setItem('movieIsFavorite', "false");
      } else {
        localStorage.setItem('movieIsFavorite', "true");
      }
      if (localStorage.getItem('movieIsFavorite') != "true") {
        this.estaEnFavoritos = false;
      } else {
        this.estaEnFavoritos = true;
      }
    });
  }
  addToWatchList() {
    this.accountService.addMovieToWatchList(this.id).subscribe(resp => {
      if (resp.status_code == 1) {
        localStorage.setItem('movieIsWL', "true");
      } else {
        localStorage.setItem('movieIsWL', "false");
      }
      if (localStorage.getItem('movieIsWL') != "true") {
        this.estaEnFavoritos = false;
      } else {
        this.estaEnFavoritos = true;
      }
    });
  }

  removeToWatchList() {
    this.accountService.removeMovieToWatchList(this.id).subscribe(resp => {
      if (resp.status_code == 1) {
        localStorage.setItem('movieIsWL', "false");
      } else {
        localStorage.setItem('movieIsWL', "true");
      }
      if (localStorage.getItem('movieIsWL') != "true") {
        this.estaEnFavoritos = false;
      } else {
        this.estaEnFavoritos = true;
      }
    });
  }
}
