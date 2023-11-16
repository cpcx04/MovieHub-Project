import { Component } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { Film } from 'src/app/models/movieObject-list.interface';
import { moviesObjectService } from 'src/app/services/moviesObject.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent {

  listaPopular : Film[] = [];
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
      this.listaPopular = resp.results;
    })
    this.filmsService.getPopularFilmsList().subscribe(resp => {
      this.totalPages = resp.total_pages;
      this.listaPopular = resp.results;
    });
  }
  searchingFilm(name: string) {
    this.filmsService.getFilmByName(name).subscribe(resp => {
      this.listaPopular = resp.results;
      console.log(resp)
    }); 
  }
}
