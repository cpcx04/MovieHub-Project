import { Component, Input } from '@angular/core';
import { Cast } from 'src/app/models/people-list-credits.interface';
import { ActorService } from 'src/app/services/actor.service';
import { SerieDetailResponse } from 'src/app/models/serie-details.interface';

@Component({
  selector: 'app-horizontal-actors-list',
  templateUrl: './horizontal-actors-list.component.html',
  styleUrls: ['./horizontal-actors-list.component.css']
})
export class HorizontalActorsListComponent {
  
  @Input() peopleList!: Cast[];  
}
