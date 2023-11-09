import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PopularFilmsResponse } from '../models/movieObject-list.interface';
import { environment } from 'src/enviroments/enviroment';
import { FilmDetailResponse } from '../models/filmDetail.interface';



const MOVIE_BASE_URL = 'movie';

@Injectable({
        providedIn:'root'
})
export class moviesObjectService {


    constructor(private http: HttpClient) { }

    getPopularFilmsList(): Observable<PopularFilmsResponse> {
      return this.http.get<PopularFilmsResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/popular?api_key=${environment.apiKey}`);
    }

    getFilmById(movieId: number):Observable <FilmDetailResponse>{
      return this.http.get<FilmDetailResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/${movieId}?api_key=${environment.apiKey}`)
    }
    //https://api.themoviedb.org/3/movie/507089?api_key=e3d23f2096498dbb777cd454a348e001
}