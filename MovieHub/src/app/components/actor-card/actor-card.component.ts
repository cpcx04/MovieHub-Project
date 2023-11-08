import { Component, Input } from '@angular/core';
import { PeopleDetailsResponse } from 'src/app/models/people-details.interface';
import { People } from 'src/app/models/people-list.interface';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css']
})
export class ActorCardComponent {

  @Input() people!: People;

  getPeopleImg() {
    return `https://image.tmdb.org/t/p/w500${this.people.profile_path}`;
  }
}
