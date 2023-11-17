import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Series } from 'src/app/models/actor-serie.interface';
import { Serie } from 'src/app/models/serie-list.interface';

@Component({
  selector: 'app-serie-card',
  templateUrl: './serie-card.component.html',
  styleUrls: ['./serie-card.component.css']
})
export class SerieCardComponent{

  @Input() serie!: Serie;
  @Input() seriesActor!: Series;
 
  constructor(private router : Router){}

  getSerieImg() {
    if (this.serie) {
      return "https://image.tmdb.org/t/p/w500" + this.serie.poster_path;
    } else if (this.seriesActor) {
      return "https://image.tmdb.org/t/p/w500" + this.seriesActor.poster_path;
    } else {
      return "";
    }
  }
  

  getSerieName(){
  if(this.serie){
    return this.serie.original_name;
  }else if(this.seriesActor){
    return this.seriesActor.original_name;
  }else
    return "";
  }

  getSerieRated() {
    if (this.serie) {
      return Number(this.serie.vote_average).toFixed(1);
    } else if (this.seriesActor) {
      return Number(this.seriesActor.vote_average).toFixed(1);
    } else {
      return "";
    }
  }
  onCardClick() {
    const serieId = this.serie?.id || this.seriesActor?.id;
    
    if (serieId) {
      console.log('Card clicked!', serieId);
      this.router.navigate(['/serieDetalle', serieId]); 
    }
  }
}
