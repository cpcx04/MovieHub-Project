import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../models/serie-details.interface';
import { environment } from 'src/enviroments/enviroment';
import { GenreListResponse } from '../models/genre-list.interface';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }

  getAllTvSeriesGenres():Observable<GenreListResponse> {
    return this.http.get<GenreListResponse>(`${environment.apiBaseUrl}/genre/tv/list?api_key=${environment.apiKey}`)
  }

  getAllMoviesGenres():Observable<GenreListResponse> {
    return this.http.get<GenreListResponse>(`${environment.apiBaseUrl}/genre/movie/list?api_key=${environment.apiKey}`)
  }
}
