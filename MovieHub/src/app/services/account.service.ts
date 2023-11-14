import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { AccountDetailResponse } from '../models/account-detail.interface';
import { PopularFilmsResponse } from '../models/movieObject-list.interface';
import { MovieListRatedResponse } from '../models/movie-list-rated.interface';
import { SerieListRatedResponse } from '../models/serie-list-rated.interface';
import { EpisodeListRatedResponse } from '../models/serie-episode-list-rated.interface';
import { SerieListResponse } from '../models/serie-list.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccountDetails(): Observable<AccountDetailResponse>{
    return this.http.get<AccountDetailResponse>(`${environment.apiBaseUrl}/account?session_id=${localStorage.getItem('session_id')}`, {
       headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }

  getRatedMovies(): Observable<MovieListRatedResponse>{
    return this.http.get<MovieListRatedResponse>(`${environment.apiBaseUrl}/account/:account_id/rated/movies?session_id=${localStorage.getItem('session_id')}`, {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }

  getRatedSeries(): Observable<SerieListRatedResponse>{
    return this.http.get<SerieListRatedResponse>(`${environment.apiBaseUrl}/account/:account_id/rated/tv?session_id=${localStorage.getItem('session_id')}`, {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }

  getRatedEpisodes(): Observable<EpisodeListRatedResponse>{
    return this.http.get<EpisodeListRatedResponse>(`${environment.apiBaseUrl}/account/:account_id/rated/tv/episodes?session_id=${localStorage.getItem('session_id')}`, {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }

  getFavouritesMovies(): Observable<PopularFilmsResponse>{
    return this.http.get<PopularFilmsResponse>(`${environment.apiBaseUrl}/account/:account_id/favorite/movies?session_id=${localStorage.getItem('session_id')}`, {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }
  getFavouritesSeries(): Observable<SerieListResponse>{
    return this.http.get<SerieListResponse>(`${environment.apiBaseUrl}/account/:account_id/favorite/tv?session_id=${localStorage.getItem('session_id')}`, {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }
  getWatchListMovies(): Observable<PopularFilmsResponse>{
    return this.http.get<PopularFilmsResponse>(`${environment.apiBaseUrl}/account/:account_id/watchlist/movies?session_id=${localStorage.getItem('session_id')}`, {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }
  getWatchListSeries(): Observable<SerieListResponse>{
    return this.http.get<SerieListResponse>(`${environment.apiBaseUrl}/account/:account_id/watchlist/tv?session_id=${localStorage.getItem('session_id')}`, {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }
}
