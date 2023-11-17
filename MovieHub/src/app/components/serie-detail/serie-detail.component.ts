import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Cast } from 'src/app/models/people-list-credits.interface';
import { SeasonDetailReponse } from 'src/app/models/season-details.interface';
import { Genre, ProductionCompany, ProductionCountry, Season, SerieDetailResponse } from 'src/app/models/serie-details.interface';
import { AccountService } from 'src/app/services/account.service';
import { ActorService } from 'src/app/services/actor.service';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit{

  @Input() serieToShow!: SerieDetailResponse;
  listCast: Cast[] = [];
  seasonNum = 1;
  currentRate = 5;
  listGenre: Genre[] = [];
  listCompany: ProductionCompany[] = [];
  imgBackground = '';
  id = 1;
  estaEnFavoritos = false;
  estaEnWatchList = false;

  constructor(private route: ActivatedRoute, private serieService: SerieService, private actorService: ActorService, private accountService: AccountService) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      const serieRequest = this.serieService.findById(this.id);
      const castserieRequest = this.actorService.getPeopleByTVSerie(this.id);
      const favoritesserieRequest = this.accountService.getFavouritesSeries();
      const watchListserieRequest = this.accountService.getWatchListSeries();
      forkJoin([serieRequest, castserieRequest, favoritesserieRequest, watchListserieRequest]).subscribe(
        ([serieResp, castResp, favoritesResp, watchListResp]) => {
          this.serieToShow = serieResp;
          this.listGenre = serieResp.genres;
          this.listCompany = serieResp.production_companies;
          if (serieResp.backdrop_path != null) {
            this.imgBackground = `https://image.tmdb.org/t/p/original${serieResp.backdrop_path}`;
          }
          this.listCast = castResp.cast;
          for (let i = 0; i < favoritesResp.results.length; i++) {
            if (favoritesResp.results[i].id == this.serieToShow.id) {
              this.estaEnFavoritos = true;
            }
          }
          for (let i = 0; i < watchListResp.results.length; i++) {
            if (watchListResp.results[i].id == this.serieToShow.id) {
              this.estaEnWatchList = true;
            }
          }
        }
      );
    });
  }

  getSerieImg() {
    return `https://image.tmdb.org/t/p/w500${this.serieToShow.poster_path}`;
  }

  addToFavorite() {
    this.accountService.addSerieToFavourite(this.id).subscribe(resp => {
      if (resp.status_code == 1) {
        this.estaEnFavoritos = true;
      } else {
        this.accountService.removeSerieToFavourite(this.id).subscribe(resp => {
          if (resp.status_code == 13) {
            this.estaEnFavoritos = false;
          } else {
            this.estaEnFavoritos = true;
          }
        });
      }
    });
  }

  addToWatchList() {
    this.accountService.addSerieToWatchList(this.id).subscribe(resp => {
      if (resp.status_code == 1) {
        this.estaEnWatchList = true;
      } else {
        this.accountService.removeSerieToWatchList(this.id).subscribe(resp => {
          if (resp.status_code == 13) {
            this.estaEnWatchList = false;
          } else {
            this.estaEnWatchList = true;
          }
        });
      }
    });
  }

}
