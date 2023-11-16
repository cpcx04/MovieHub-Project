import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { People } from 'src/app/models/people-list.interface';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css']
})
export class ActorCardComponent {

  @Input() people!: People;

  constructor(private router: Router){}

  getPeopleImg() {
    return `https://image.tmdb.org/t/p/w500${this.people.profile_path}`;
  }
  onCardClick() {
    const movieId = this.people?.id;
    
    if (movieId) {
      console.log('Card clicked!', movieId);
      this.router.navigate(['/actors-details', movieId]); 
    }
  }
}
