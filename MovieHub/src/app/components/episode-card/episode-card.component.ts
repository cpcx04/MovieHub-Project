import { Component, Input } from '@angular/core';
import { Episode } from 'src/app/models/season-details.interface';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.css']
})
export class EpisodeCardComponent {

  @Input() episode!: Episode;

  getEpisodeImg() {
    return `https://image.tmdb.org/t/p/w500${this.episode.still_path}`;
  }

}
