import { Component, Input } from '@angular/core';
import { Cast } from 'src/app/models/people-list-credits.interface';
import { People } from 'src/app/models/people-list.interface';

@Component({
  selector: 'app-actor-small-card',
  templateUrl: './actor-small-card.component.html',
  styleUrls: ['./actor-small-card.component.css']
})
export class ActorSmallCardComponent {

  @Input() cast!: Cast;

  getPeopleImg() {
    if (this.cast.profile_path != null) {
      return `https://image.tmdb.org/t/p/w500${this.cast.profile_path}`;
    }else {
      return '../../../assets/img/placeholder_w500.jpg'
    }
    
  }
}
