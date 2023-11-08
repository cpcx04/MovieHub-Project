import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from 'src/app/models/video-list.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-vertical-movie-videos-list',
  templateUrl: './vertical-movie-videos-list.component.html',
  styleUrls: ['./vertical-movie-videos-list.component.css']
})
export class VerticalMovieVideosListComponent implements OnInit{
  
  listVideos: Video[] = [];
  
  constructor(private movieService: MovieService, private sanitazer: DomSanitizer){}

  ngOnInit(): void {
    //Uso un id de prueba
    this.movieService.getVideosByMovieId(994).subscribe(resp => {
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
