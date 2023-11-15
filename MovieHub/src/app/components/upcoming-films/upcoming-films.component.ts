import { Component } from '@angular/core';
import { Upcoming } from 'src/app/models/moive-list-upcoming.interface';
import { moviesObjectService } from 'src/app/services/moviesObject.service';

@Component({
  selector: 'app-upcoming-films',
  templateUrl: './upcoming-films.component.html',
  styleUrls: ['./upcoming-films.component.css']
})
export class UpcomingFilmsComponent {
  upComing: Upcoming [] = []

  constructor(private filmsService: moviesObjectService){}

  ngOnInit(): void {
    this.filmsService.getUpcomingFilmsList().subscribe(resp => {
      this.upComing = resp.results;
    })  
  }
}
