import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeopleListResponse } from '../models/people-list.interface';
import { Observable, forkJoin } from 'rxjs';
import { PeopleDetailsResponse } from '../models/people-details.interface';
import { PeopleListCreditsResponse } from '../models/people-list-credits.interface';
import { environment } from 'src/enviroments/enviroment';
import { ActorsFilmsResponse } from '../models/actor-film.interface';
import { ActorSerieResponse } from '../models/actor-serie.interface';
import { ActorImageResponse } from '../models/people-image.interface';


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

  getActorByName(name: string): Observable<PeopleListResponse>{
    return this.http.get<PeopleListResponse>(`${environment.apiBaseUrl}/search/people?query=${name}&api_key=${environment.apiKey}`)
  }

  getPeoplePage(pag: number): Observable<PeopleListResponse> {
    return this.http.get<PeopleListResponse>(
      `${PEOPLE_BASE_URL}/popular?api_key=${environment.apiKey}&page=${pag}`
    );
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

  getFilmsByActor(idPeople: number): Observable<ActorsFilmsResponse>{
    return this.http.get<ActorsFilmsResponse>(`${PEOPLE_BASE_URL}/${idPeople}/combined_credits?api_key=${environment.apiKey}`)
  }

  getSerieByActor(idPeople: number): Observable<ActorSerieResponse>{
    return this.http.get<ActorSerieResponse>(`${PEOPLE_BASE_URL}/${idPeople}/tv_credits?api_key=${environment.apiKey}`)
  }
  
  getActorImages(idPeople : number): Observable <ActorImageResponse>{
    return this.http.get<ActorImageResponse>(`${PEOPLE_BASE_URL}/${idPeople}/images?api_key=${environment.apiKey}`)
  }

}
