import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Peliculas } from 'src/app/models/actor-film.interface';
import { PeopleDetailsResponse } from 'src/app/models/people-details.interface';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent {

  actorToShow!: PeopleDetailsResponse;
  filmsActors !: Peliculas [];
  id = 1;

  constructor(private route: ActivatedRoute, private actorService: ActorService) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(p => this.id = +p['id'] )
    this.actorService.getPeopleById(this.id).subscribe(resp => {
      this.actorToShow = resp;
    })
    this.actorService.getFilmsByActor(this.id).subscribe(resp => {
      this.filmsActors=resp.cast;
    })
  }
  
  getPeopleImg() {
    return `https://image.tmdb.org/t/p/w500${this.actorToShow.profile_path}`;
  }
}
