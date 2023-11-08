import { Component } from '@angular/core';
import { Cast } from 'src/app/models/people-list-credits.interface';
import { People } from 'src/app/models/people-list.interface';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-horizontal-actors-list',
  templateUrl: './horizontal-actors-list.component.html',
  styleUrls: ['./horizontal-actors-list.component.css']
})
export class HorizontalActorsListComponent {

  peopleList: Cast[] = [];

  constructor(private actorService: ActorService) {}

  ngOnInit(): void {
    this.actorService.getPeopleByMovie(507089).subscribe(resp => {
      this.peopleList = resp.cast;
      console.log(resp.cast)
    })
  }
}
