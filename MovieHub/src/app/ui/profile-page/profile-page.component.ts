
import { Component, OnInit } from '@angular/core';
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

  constructor(private movieService: MovieService, private serieService: SerieService, private accService: AccountService){}

  ngOnInit(): void {
    
  }

  getWatchListSeries() {
    this.accService.
  }

  getWatchListMovies() {
    
  }
}
