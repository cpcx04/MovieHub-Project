import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genre, SerieDetailResponse } from 'src/app/models/serie-details.interface';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit{

  serieToShow!: SerieDetailResponse;
  listGenre: Genre[] = [];
  imgBackground = '';
  id = 1;

  constructor(private route: ActivatedRoute, private serieService: SerieService) { }
  
  ngOnInit(): void {
    //Se coloca un id de prueba para comprobar que funciona el componente
    this.route.params.subscribe(p => this.id = +p['id'])
    this.serieService.findById(1396).subscribe(resp => {
      this.serieToShow = resp;
      this.listGenre = resp.genres;
      if (resp.backdrop_path != null) {
        this.imgBackground = `https://image.tmdb.org/t/p/w500${resp.backdrop_path}`;
      }
    });
  }

  getSerieImg() {
    return `https://image.tmdb.org/t/p/w500${this.serieToShow.poster_path}`;
  }
}
