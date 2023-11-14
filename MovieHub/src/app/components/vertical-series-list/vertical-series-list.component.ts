import { Component, Input, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie-list.interface';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-vertical-series-list',
  templateUrl: './vertical-series-list.component.html',
  styleUrls: ['./vertical-series-list.component.css']
})
export class VerticalSeriesListComponent{

  @Input() serieList: Serie[] = [];

}
