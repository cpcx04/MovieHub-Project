
import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/movieObject-list.interface';
import { Serie } from 'src/app/models/serie-list.interface';
import { AccountService } from 'src/app/services/account.service';
import { MovieService } from 'src/app/services/movie.service';
import { SerieService } from 'src/app/services/serie.service';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],

})
export class ProfilePageComponent implements OnInit{

  showMovies = true;
  serieList: Serie[] = [];
  movieList: Film[] = [];

  constructor(private accService: AccountService){}

  ngOnInit(): void {
    this.getFavouriteMovies();
  }

  getWatchListSeries() {
    this.accService.getWatchListSeries().subscribe(resp => {
      this.serieList = resp.results;
      this.showMovies = false;
    })
  }

  getFavouriteSeries() {
    this.accService.getFavouritesSeries().subscribe(resp => {
      this.serieList = resp.results;
      this.showMovies = false;

    })
  }

  getRatedSeries() {
    this.accService.getRatedSeries().subscribe(resp => {
      this.serieList = resp.results;
      this.showMovies = false;
    })
  }

  getWatchListMovies() {
    this.accService.getWatchListMovies().subscribe(resp => {
      this.movieList = resp.results;
      this.showMovies = true;
    })
  }

  getFavouriteMovies() {
    this.accService.getFavouritesMovies().subscribe(resp => {
      this.movieList = resp.results;
      this.showMovies = true;
    })
  }

  getRatedMovies() {
    this.accService.getRatedMovies().subscribe(resp => {
      this.movieList = resp.results;
      this.showMovies = true;
    })
  }
}
