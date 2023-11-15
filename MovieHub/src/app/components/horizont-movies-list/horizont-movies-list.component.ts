import { Component } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { Film } from 'src/app/models/movieObject-list.interface';
import { moviesObjectService } from 'src/app/services/moviesObject.service';

@Component({
  selector: 'app-horizont-movies-list',
  templateUrl: './horizont-movies-list.component.html',
  styleUrls: ['./horizont-movies-list.component.css']
})
export class HorizontMoviesListComponent {
  popularList: Film[] = [];
  page = 1;
  totalPages = 1;

  constructor(private filmsService: moviesObjectService, private config: NgbPaginationConfig) {
    config.size = 'lg';
    config.boundaryLinks = true;
  }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage() {
    this.filmsService.getFilmPage(this.page).subscribe(resp => {
      this.popularList = resp.results;
    })
    this.filmsService.getPopularFilmsList().subscribe(resp => {
      this.totalPages = resp.total_pages;
      this.popularList = resp.results;
    });
  }
}
