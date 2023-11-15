import { Component } from '@angular/core';
import { Serie } from 'src/app/models/serie-list.interface';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-horizontal-series-list',
  templateUrl: './horizontal-series-list.component.html',
  styleUrls: ['./horizontal-series-list.component.css']
})
export class HorizontalSeriesListComponent {

  serieList: Serie[] = [];

  constructor(private serieService: SerieService) { }

}
