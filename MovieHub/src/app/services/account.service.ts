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
import { SessionResponse } from '../models/session.interface';
import { FavouriteOKResponse } from '../models/favourite-ok.interface';

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
  addMovieToFavorite(idMovie: number): Observable<FavouriteOKResponse>{
    return this.http.post<FavouriteOKResponse>(`${environment.apiBaseUrl}/account/:account_id/favorite?session_id=${localStorage.getItem('session_id')}`, {
      media_type: "movie",
      media_id: idMovie,
      favorite: true
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }
  removeMovieToFavourite(idMovie: number): Observable<FavouriteOKResponse>{
    return this.http.post<FavouriteOKResponse>(`${environment.apiBaseUrl}/account/:account_id/favorite?session_id=${localStorage.getItem('session_id')}`, {
      media_type: "movie",
      media_id: idMovie,
      favorite: false
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }
  removeSerieToFavourite(idSerie: number): Observable<FavouriteOKResponse>{
    return this.http.post<FavouriteOKResponse>(`${environment.apiBaseUrl}/account/:account_id/favorite?session_id=${localStorage.getItem('session_id')}`, {
      media_type: "tv",
      media_id: idSerie,
      favorite: false
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }
  addSerieToFavourite(idSerie: number): Observable<FavouriteOKResponse>{
    return this.http.post<FavouriteOKResponse>(`${environment.apiBaseUrl}/account/:account_id/favorite?session_id=${localStorage.getItem('session_id')}`, {
      media_type: "tv",
      media_id: idSerie,
      favorite: true
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }

  addSerieToWatchList(idSerie: number): Observable<FavouriteOKResponse>{
    return this.http.post<FavouriteOKResponse>(`${environment.apiBaseUrl}/account/:account_id/watchlist?session_id=${localStorage.getItem('session_id')}`, {
      media_type: "tv",
      media_id: idSerie,
      watchlist: true
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }
  removeSerieToWatchList(idSerie: number): Observable<FavouriteOKResponse>{
    return this.http.post<FavouriteOKResponse>(`${environment.apiBaseUrl}/account/:account_id/watchlist?session_id=${localStorage.getItem('session_id')}`, {
      media_type: "tv",
      media_id: idSerie,
      watchlist: false
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }
  addMovieToWatchList(idMovie: number): Observable<FavouriteOKResponse>{
    return this.http.post<FavouriteOKResponse>(`${environment.apiBaseUrl}/account/:account_id/watchlist?session_id=${localStorage.getItem('session_id')}`, {
      media_type: "movie",
      media_id: idMovie,
      watchlist: true
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }
  removeMovieToWatchList(idMovie: number): Observable<FavouriteOKResponse>{
    return this.http.post<FavouriteOKResponse>(`${environment.apiBaseUrl}/account/:account_id/watchlist?session_id=${localStorage.getItem('session_id')}`, {
      media_type: "movie",
      media_id: idMovie,
      watchlist: false
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }
}
