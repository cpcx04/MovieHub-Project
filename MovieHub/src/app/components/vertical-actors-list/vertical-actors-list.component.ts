import { Component, Input, OnInit } from '@angular/core';
import { People, PeopleListResponse } from 'src/app/models/people-list.interface';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-vertical-actors-list',
  templateUrl: './vertical-actors-list.component.html',
  styleUrls: ['./vertical-actors-list.component.css']
})
export class VerticalActorsListComponent implements OnInit{
  
  @Input() peopleList: People[] = [];

  constructor(private actorService: ActorService) {}

  ngOnInit(): void {
    this.actorService.getAllPeople().subscribe(resp => {
      this.peopleList = resp.results;
    })
  }
  
}
