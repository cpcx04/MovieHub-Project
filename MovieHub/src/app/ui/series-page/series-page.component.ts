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

  page = 1;
  numMoviesByPage = 0;
  totalMovies = 0;
  totalPages = 0;
  cantPageShow = 10;

  constructor(private serieService: SerieService, private genreService: GenreService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(p => this.genreId = +p['id'])
    this.genreService.getAllTvSeriesGenres().subscribe(resp => {
      this.genreList = resp.genres;
    })
    this.serieService.getPopularSeries(this.page).subscribe(resp => {
      this.serieList = resp.results;
      this.totalMovies = resp.total_results;
      this.totalPages = resp.total_pages;
      this.numMoviesByPage = resp.results.length;
    })
    /*
    this.serieService.getSerieByGenreId(this.genreId).subscribe(resp => {
        for (let i = 0; i < resp.results.length; i++) {
          
        }
    })
    */
  }

  loadPage() {
    this.serieService.getPopularSeries(this.page).subscribe(resp => {
      this.serieList = resp.results;
      this.totalMovies = resp.total_results;
      this.totalPages = resp.total_pages;
      this.numMoviesByPage = resp.results.length;
    })
  }
  searchingSerie(name: string) {
    this.serieService.getSeriesByName(name).subscribe(resp => {
      this.serieList = resp.results;
      console.log(resp)
    }); 
  }
}
