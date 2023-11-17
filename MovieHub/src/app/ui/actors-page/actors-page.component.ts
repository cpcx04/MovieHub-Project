import { Component } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { People } from 'src/app/models/people-list.interface';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actors-page',
  templateUrl: './actors-page.component.html',
  styleUrls: ['./actors-page.component.css']
})
export class ActorsPageComponent {

  actors : People [] = []
  page = 1;
  totalPages = 1;

  constructor(private actorService : ActorService, private config: NgbPaginationConfig){
    config.size = 'lg';
    config.boundaryLinks = true;
  }

  ngOnInit(): void {
    this.loadNewPage();
  }
  loadNewPage() {
    this.actorService.getPeoplePage(this.page).subscribe(resp => {
      this.actors = resp.results;
    })
    this.actorService.getAllPeople().subscribe(resp => {
      this.totalPages = resp.total_pages;
      this.actors = resp.results;
    });
  }
}
