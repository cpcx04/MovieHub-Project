import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeopleListResponse } from '../models/people-list.interface';
import { Observable, forkJoin } from 'rxjs';
import { PeopleDetailsResponse } from '../models/people-details.interface';
import { PeopleListCreditsResponse } from '../models/people-list-credits.interface';


const PEOPLE_BASE_URL = 'https://api.themoviedb.org/3/person'
const MOVIE_BASE_URL = 'https://api.themoviedb.org/3/movie'
const TVSERIE_BASE_URL = 'https://api.themoviedb.org/3/tv'
const TOKEN = 'c69873949130194e8bc389f3e0cf7420';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) { }

  getAllPeople(): Observable<PeopleListResponse> {
    return this.http.get<PeopleListResponse>(`${PEOPLE_BASE_URL}/popular?api_key=${TOKEN}`)
  }

  getPeopleByMovie(idMovie: number): Observable<PeopleListCreditsResponse>{
    return this.http.get<PeopleListCreditsResponse>(`${MOVIE_BASE_URL}/${idMovie}/credits?api_key=${TOKEN}`);
  }

  getPeopleByTVSerie(idTvSerie: number): Observable<PeopleListCreditsResponse>{
    return this.http.get<PeopleListCreditsResponse>(`${TVSERIE_BASE_URL}/${idTvSerie}/credits?api_key=${TOKEN}`);
  }

  getPeopleById(idPeople: number): Observable<PeopleDetailsResponse>{
    return this.http.get<PeopleDetailsResponse>(`${PEOPLE_BASE_URL}/${idPeople}?api_key=${TOKEN}`)
  }

}
