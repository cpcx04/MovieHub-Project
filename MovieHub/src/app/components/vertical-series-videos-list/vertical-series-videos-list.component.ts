import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from 'src/app/models/video-list.interface';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-vertical-series-videos-list',
  templateUrl: './vertical-series-videos-list.component.html',
  styleUrls: ['./vertical-series-videos-list.component.css']
})
export class VerticalSeriesVideosListComponent {

  listVideos: Video[] = [];
  
  constructor(private serieService: SerieService, private sanitazer: DomSanitizer){}

  ngOnInit(): void {
    //Uso un id de prueba
    this.serieService.getVideosBySerieId(94605).subscribe(resp => {
      this.listVideos = resp.results;
    })
  }

  getURLVideo(video: Video) {
    if (video.site == 'YouTube') {
      return this.sanitazer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.key}`);
    } else {
      return this.sanitazer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${video.key}`);
    }
  }
}
