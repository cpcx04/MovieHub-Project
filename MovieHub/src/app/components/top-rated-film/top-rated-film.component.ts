import { Component } from '@angular/core';
import {TopRated } from 'src/app/models/movie-list-rated.interface';
import { moviesObjectService } from 'src/app/services/moviesObject.service';

@Component({
  selector: 'app-top-rated-film',
  templateUrl: './top-rated-film.component.html',
  styleUrls: ['./top-rated-film.component.css']
})
export class TopRatedFilmComponent {

  topRated : TopRated [] = []

  constructor(private filmsService: moviesObjectService){}

  ngOnInit(): void {
    this.filmsService.getTopRatedFilmsList().subscribe(resp => {
      this.topRated = resp.results;
    })  
  }
}
