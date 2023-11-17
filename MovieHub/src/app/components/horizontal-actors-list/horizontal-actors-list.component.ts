import { Component, Input } from '@angular/core';
import { Cast } from 'src/app/models/people-list-credits.interface';

@Component({
  selector: 'app-horizontal-actors-list',
  templateUrl: './horizontal-actors-list.component.html',
  styleUrls: ['./horizontal-actors-list.component.css']
})
export class HorizontalActorsListComponent {
  
  @Input() peopleList!: Cast[];  
}
