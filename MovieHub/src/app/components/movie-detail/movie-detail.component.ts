import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
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
  estaEnWatchList = false;

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
      const filmRequest = this.filmService.getFilmById(this.id);
      const castRequest = this.actorService.getPeopleByMovie(this.id);
      const favoritesRequest = this.accountService.getFavouritesMovies();
      const watchListRequest = this.accountService.getWatchListMovies();
      forkJoin([filmRequest, castRequest, favoritesRequest, watchListRequest]).subscribe(
        ([filmResp, castResp, favoritesResp, watchListResp]) => {
          this.film = filmResp;
          this.listGenre = filmResp.genres;
          this.listCompany = filmResp.production_companies;
          this.listCast = castResp.cast;
          for (let i = 0; i < favoritesResp.results.length; i++) {
            if (favoritesResp.results[i].id == this.film.id) {
              this.estaEnFavoritos = true;
            }
          }
          for (let i = 0; i < watchListResp.results.length; i++) {
            if (watchListResp.results[i].id == this.film.id) {
              this.estaEnWatchList = true;
            }
          }
        }
      );
    }); 
  }

  addToFavorite() {
    this.accountService.addMovieToFavorite(this.id).subscribe(resp => {
      if (resp.status_code == 1) {
        this.estaEnFavoritos = true;
        console.log("añadido a fav")
      } else {
        this.accountService.removeMovieToFavourite(this.id).subscribe(resp => {
          if (resp.status_code == 13) {
            this.estaEnFavoritos = false;
            console.log("añadido a fav"); 
          } else {
            this.estaEnFavoritos = true;
          }
        });
      }
    });
  }

  addToWatchList() {
    this.accountService.addMovieToWatchList(this.id).subscribe(resp => {
      if (resp.status_code == 1) {
        this.estaEnWatchList = true;
        console.log("añadido a wl"); 
      } else {
        this.accountService.removeMovieToWatchList(this.id).subscribe(resp => {
          if (resp.status_code == 13) {
            this.estaEnWatchList = false;
            console.log("eliminado a wl"); 
          } else {
            this.estaEnWatchList = true;
          }
        });
      }
    });
  }
}
