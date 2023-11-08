import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PopularFilmsResponse } from '../models/movieObject-list.interface';
import { environment } from 'src/enviroments/enviroment';



const MOVIE_BASE_URL = 'movie';

@Injectable({
        providedIn:'root'
})
export class moviesObjectService {


    constructor(private http: HttpClient) { }

    getPopularFilmsList(): Observable<PopularFilmsResponse> {
      return this.http.get<PopularFilmsResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/popular?api_key=${environment.apiKey}`);
    }
}