import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genre } from 'src/app/models/serie-details.interface';
import { Serie, SerieListResponse } from 'src/app/models/serie-list.interface';
import { GenreService } from 'src/app/services/genre.service';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-series-page',
  templateUrl: './series-page.component.html',
  styleUrls: ['./series-page.component.css']
})
export class SeriesPageComponent implements OnInit{

  serieList: Serie[] = [];
  genreList: Genre[] = [];
  genreId = 0;

  constructor(private serieService: SerieService, private genreService: GenreService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(p => this.genreId = +p['id'])
    this.genreService.getAllTvSeriesGenres().subscribe(resp => {
      this.genreList = resp.genres;
    })
    this.serieService.getSerieByGenreId(this.genreId).subscribe(resp => {
        for (let i = 0; i < resp.results.length; i++) {
          
        }
    })
    /*
    if (this.genreId != 0) {
      this.serieService.getPopularSeries().subscribe(resp => {
      this.serieList = resp.results;
      })
    } else {
      
    }
    */
  }
}
