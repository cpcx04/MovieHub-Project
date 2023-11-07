import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeopleListResponse } from '../models/people-list.interface';
import { Observable, forkJoin } from 'rxjs';
import { PeopleDetailsResponse } from '../models/people-details.interface';


const PEOPLE_BASE_URL = 'https://api.themoviedb.org/3/person'
const MOVIE_BASE_URL = 'https://api.themoviedb.org/3/movie'
const TVSERIE_BASE_URL = 'https://api.themoviedb.org/3/tv'
const TOKEN = 'c69873949130194e8bc389f3e0cf7420';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  peopleList: Observable<PeopleDetailsResponse>[] = [];

  constructor(private http: HttpClient) { }

  getAllPeople(): Observable<PeopleDetailsResponse[]> {
    let lastId = 0;
    
    this.http.get<PeopleDetailsResponse>(`${PEOPLE_BASE_URL}/latest?api_key=${TOKEN}`).subscribe(resp => {
      lastId = resp.id;
    });
    for (let i = 0; i < lastId; i++) {
      this.peopleList.push(this.http.get<PeopleDetailsResponse>(`${PEOPLE_BASE_URL}/${i}?api_key=${TOKEN}`))
    }
    //ForkJoin para esperar a que todas las solicitudes se completen antes de devolver un Observable
    return forkJoin(this.peopleList);
  }

  getPeopleByMovie(idMovie: number): Observable<PeopleListResponse>{
    return this.http.get<PeopleListResponse>(`${MOVIE_BASE_URL}/credits?api_key=${TOKEN}`);
  }

  getPeopleByTVSerie(idTvSerie: number): Observable<PeopleListResponse>{
    return this.http.get<PeopleListResponse>(`${TVSERIE_BASE_URL}/credits?api_key=${TOKEN}`);
  }

  getPeopleById(idPeople: number): Observable<PeopleDetailsResponse>{
    return this.http.get<PeopleDetailsResponse>(`${PEOPLE_BASE_URL}/${idPeople}?api_key=${TOKEN}`)
  }


}
