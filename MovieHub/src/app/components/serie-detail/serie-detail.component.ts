import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cast } from 'src/app/models/people-list-credits.interface';
import { SeasonDetailReponse } from 'src/app/models/season-details.interface';
import { Genre, ProductionCompany, ProductionCountry, Season, SerieDetailResponse } from 'src/app/models/serie-details.interface';
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

  constructor(private route: ActivatedRoute, private serieService: SerieService, private actorService: ActorService) { }
  
  ngOnInit(): void {
    //Se coloca un id de prueba para comprobar que funciona el componente
    this.route.params.subscribe(p => this.id = +p['id'])
    this.serieService.findById(this.id).subscribe(resp => {
      this.serieToShow = resp;
      this.listGenre = resp.genres;
      this.listCompany = resp.production_companies;
      if (resp.backdrop_path != null) {
        this.imgBackground = `https://image.tmdb.org/t/p/original${resp.backdrop_path}`;
      }
    });
    this.actorService.getPeopleByTVSerie(this.id).subscribe(resp => {
      this.listCast = resp.cast;
    });
  }

  getSerieImg() {
    return `https://image.tmdb.org/t/p/w500${this.serieToShow.poster_path}`;
  }

}
