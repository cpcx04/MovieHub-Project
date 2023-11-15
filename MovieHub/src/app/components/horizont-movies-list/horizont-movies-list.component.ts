import { Component, Input } from '@angular/core';
import { Film } from 'src/app/models/movieObject-list.interface';
import { moviesObjectService } from 'src/app/services/moviesObject.service';
@Component({
  selector: 'app-horizont-movies-list',
  templateUrl: './horizont-movies-list.component.html',
  styleUrls: ['./horizont-movies-list.component.css']
})
export class HorizontMoviesListComponent {
  
  @Input() popularList: Film[] = [];

}
