import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeasonDetailReponse } from 'src/app/models/season-details.interface';
import { SerieDetailResponse } from 'src/app/models/serie-details.interface';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-serie-detail-page',
  templateUrl: './serie-detail-page.component.html',
  styleUrls: ['./serie-detail-page.component.css']
})
export class SerieDetailPageComponent implements OnInit{
  
  serie!: SerieDetailResponse;
  id = 1;
  seasonNumber = 0;
  listImgs: String[] = [];
  listSeason: SeasonDetailReponse[]=[];

  constructor(private route: ActivatedRoute, private serieService: SerieService){}

  ngOnInit(): void {
    this.route.params.subscribe(p => this.id = +p['id']);
    this.serieService.findById(this.id).subscribe(resp => {
      this.serie = resp;
      this.seasonNumber = resp.number_of_seasons;
      this.serieService.getImagesBySerieId(this.id).subscribe(resp => {
        resp.posters.forEach(img => {
          this.listImgs.push('https://image.tmdb.org/t/p/w500' + img.file_path);
        });
      });
      for (let i = 0; i < this.seasonNumber; i++) {
        this.serieService.getSeasonBySerieId(this.id, i).subscribe(resp => {
          this.listSeason[i]=resp;
        });
      }
    });
  }
}
