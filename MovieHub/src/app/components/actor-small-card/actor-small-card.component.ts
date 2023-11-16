import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cast } from 'src/app/models/people-list-credits.interface';

@Component({
  selector: 'app-actor-small-card',
  templateUrl: './actor-small-card.component.html',
  styleUrls: ['./actor-small-card.component.css']
})
export class ActorSmallCardComponent {

  @Input() cast!: Cast;


  constructor(private router: Router){}

  getPeopleImg() {
    if (this.cast.profile_path != null) {
      return `https://image.tmdb.org/t/p/w500${this.cast.profile_path}`;
    }else {
      return '../../../assets/img/placeholder_w500.jpg'
    }
    
  }
  onCardClick() {
    const cast = this.cast?.credit_id;
    
    if (cast) {
      console.log('Card clicked!', cast);
      this.router.navigate(['/serieDetalle', cast]); 
    }
  }
}
