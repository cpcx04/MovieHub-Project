import { Component, Input, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie-list.interface';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-vertical-series-list',
  templateUrl: './vertical-series-list.component.html',
  styleUrls: ['./vertical-series-list.component.css']
})
export class VerticalSeriesListComponent implements OnInit{

  @Input() serieList: Serie[] = [];

  constructor(private serieService: SerieService) { }
  
  ngOnInit(): void {
    this.serieService.getPopularSeries().subscribe(resp => {
      this.serieList = resp.results;
    });
  }

}
