import { Component, OnInit } from '@angular/core';
import { PeopleDetailsResponse } from 'src/app/models/people-details.interface';
import { PeopleListResponse } from 'src/app/models/people-list.interface';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-vertical-actors-list',
  templateUrl: './vertical-actors-list.component.html',
  styleUrls: ['./vertical-actors-list.component.css']
})
export class VerticalActorsListComponent implements OnInit{
  peopleList: PeopleDetailsResponse[] = [];

  constructor(private actorService: ActorService) {}

  ngOnInit(): void {
    this.actorService.getAllPeople().subscribe(resp => {
      this.peopleList = resp;
    })
  }
  
}
