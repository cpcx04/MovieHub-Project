import { Component, Input } from '@angular/core';
import { Film } from 'src/app/models/movieObject-list.interface';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent {

  @Input() film !: Film

  getMovieImage(){
    return"https://image.tmdb.org/t/p/w500" + this.film.backdrop_path;
  }
}
