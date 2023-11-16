import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmDetailResponse } from 'src/app/models/filmDetail.interface';
import { moviesObjectService } from 'src/app/services/moviesObject.service';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.css']
})
export class MovieDetailPageComponent implements OnInit {

  movie!: FilmDetailResponse;
  imgList: String[] = [];
  id = 1;

  constructor(private route: ActivatedRoute, private movieService: moviesObjectService) {}

  ngOnInit() {
    this.route.params.subscribe(p => this.id = +p['id']);
    this.movieService.getFilmById(this.id).subscribe(resp => {
      this.movie = resp;
      this.movieService.getFilmImageById(this.id).subscribe(resp => {
        resp.posters.forEach(img => {
          this.imgList.push('https://image.tmdb.org/t/p/w500' + img.file_path);
        });
      });
    });
  }
}
