import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genre, ProductionCompany, ProductionCountry, SerieDetailResponse } from 'src/app/models/serie-details.interface';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit{

  serieToShow!: SerieDetailResponse;
  currentRate = 5;
  listGenre: Genre[] = [];
  listCompany: ProductionCompany[] = [];
  imgBackground = '';
  id = 1;

  constructor(private route: ActivatedRoute, private serieService: SerieService) { }
  
  ngOnInit(): void {
    //Se coloca un id de prueba para comprobar que funciona el componente
    this.route.params.subscribe(p => this.id = +p['id'])
    this.serieService.findById(1396).subscribe(resp => {
      this.serieToShow = resp;
      this.listGenre = resp.genres;
      this.listCompany = resp.production_companies;
      if (resp.backdrop_path != null) {
        this.imgBackground = `https://image.tmdb.org/t/p/original${resp.backdrop_path}`;
      }
    });
  }

  getSerieImg() {
    return `https://image.tmdb.org/t/p/w500${this.serieToShow.poster_path}`;
  }
  ariaValueText(current: number, max: number) {
		return `${current} out of ${max} hearts`;
	}
}
