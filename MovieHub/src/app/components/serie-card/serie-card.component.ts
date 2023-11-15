import { Component, Input, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie-list.interface';

@Component({
  selector: 'app-serie-card',
  templateUrl: './serie-card.component.html',
  styleUrls: ['./serie-card.component.css']
})
export class SerieCardComponent{

  @Input() serie!: Serie;

  getSerieImg() {
    return `https://image.tmdb.org/t/p/w500${this.serie.poster_path}`;
  }
}
