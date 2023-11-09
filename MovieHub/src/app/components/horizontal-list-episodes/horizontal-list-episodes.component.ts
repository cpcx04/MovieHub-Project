import { Component, Input } from '@angular/core';
import { Episode, SeasonDetailReponse } from 'src/app/models/season-details.interface';
import { Season } from 'src/app/models/serie-details.interface';

@Component({
  selector: 'app-horizontal-list-episodes',
  templateUrl: './horizontal-list-episodes.component.html',
  styleUrls: ['./horizontal-list-episodes.component.css']
})
export class HorizontalListEpisodesComponent {
  @Input() season!: SeasonDetailReponse;
}
