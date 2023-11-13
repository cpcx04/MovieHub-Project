import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { AccountDetailResponse } from '../models/account-detail.interface';
import { PopularFilmsResponse } from '../models/movieObject-list.interface';
import { MovieListRatedResponse } from '../models/movie-list-rated.interface';
import { SerieListRatedResponse } from '../models/serie-list-rated.interface';
import { EpisodeListRatedResponse } from '../models/serie-episode-list-rated.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccountDetails(): Observable<AccountDetailResponse>{
    return this.http.get<AccountDetailResponse>(`${environment.apiBaseUrl}/account?session_id=${localStorage.getItem('session_id')}&?api_key=${environment.apiKey}`)
  }

  getRatedMovies(): Observable<MovieListRatedResponse>{
    return this.http.get<MovieListRatedResponse>(`${environment.apiBaseUrl}/account/:account_id/rated/movies?session_id=${localStorage.getItem('session_id')}&?api_key=${environment.apiKey}`)
  }

  getRatedSeries(): Observable<SerieListRatedResponse>{
    return this.http.get<SerieListRatedResponse>(`${environment.apiBaseUrl}/account/:account_id/rated/tv?session_id=${localStorage.getItem('session_id')}&?api_key=${environment.apiKey}`)
  }

  getRatedEpisodes(): Observable<EpisodeListRatedResponse>{
    return this.http.get<EpisodeListRatedResponse>(`${environment.apiBaseUrl}/account/:account_id/rated/tv/episodes?session_id=${localStorage.getItem('session_id')}&?api_key=${environment.apiKey}`)
  }
}
