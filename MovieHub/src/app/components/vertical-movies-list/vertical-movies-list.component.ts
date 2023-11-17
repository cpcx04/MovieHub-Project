import { Component, Input } from '@angular/core';
import { Film } from 'src/app/models/movieObject-list.interface';
import { moviesObjectService } from 'src/app/services/moviesObject.service';

@Component({
  selector: 'app-vertical-movies-list',
  templateUrl: './vertical-movies-list.component.html',
  styleUrls: ['./vertical-movies-list.component.css']
})
export class VerticalMoviesListComponent {
  @Input() popularList: Film[] = [];
}
