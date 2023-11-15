import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoListResponse } from '../models/video-list.interface';
import { SerieListResponse } from '../models/serie-list.interface';
import { SerieDetailResponse } from '../models/serie-details.interface';
import { Image, ImageListResponse } from '../models/image-list.interface';
import { SeasonDetailReponse } from '../models/season-details.interface';
import { SerieListFilterGenreResponse } from '../models/serie-list-genre.interface';

const PEOPLE_BASE_URL = 'https://api.themoviedb.org/3/person'
const MOVIE_BASE_URL = 'https://api.themoviedb.org/3/movie'
const TVSERIE_BASE_URL = 'https://api.themoviedb.org/3/tv'
const TOKEN = 'c69873949130194e8bc389f3e0cf7420';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http: HttpClient) { }

  getPopularSeries(page: number): Observable<SerieListResponse>{
    return this.http.get<SerieListResponse>(`${TVSERIE_BASE_URL}/popular?api_key=${TOKEN}&page=${page}`)
  }

  getTopRatedSeries(page: number): Observable<SerieListResponse>{
    return this.http.get<SerieListResponse>(`${TVSERIE_BASE_URL}/top_rated?api_key=${TOKEN}&page=${page}`)
  }

  getLatestSeries(page: number): Observable<SerieListResponse>{
    return this.http.get<SerieListResponse>(`${TVSERIE_BASE_URL}/latest?api_key=${TOKEN}&page=${page}`)
  }

  getVideosBySerieId(idSerie: number) : Observable<VideoListResponse>{
    return this.http.get<VideoListResponse>(`${TVSERIE_BASE_URL}/${idSerie}/videos?api_key=${TOKEN}`)
  }

  findById(idSerie: number): Observable<SerieDetailResponse>{
    return this.http.get<SerieDetailResponse>(`${TVSERIE_BASE_URL}/${idSerie}?api_key=${TOKEN}`)
  }

  getImagesBySerieId(idSerie: number): Observable<ImageListResponse>{
    return this.http.get<ImageListResponse>(`${TVSERIE_BASE_URL}/${idSerie}/images?api_key=${TOKEN}`)
  }

  getSeasonBySerieId(idSerie: number, numSeason: number): Observable<SeasonDetailReponse>{
    return this.http.get<SeasonDetailReponse>(`${TVSERIE_BASE_URL}/${idSerie}/season/${numSeason}?api_key=${TOKEN}`)
  }

  getSerieByGenreId(genreId: number): Observable<SerieListFilterGenreResponse> {
    return this.http.get<SerieListFilterGenreResponse>(`${TVSERIE_BASE_URL}/discover/movie?api_key=${TOKEN}&with_genres=${genreId}`)
  }

}
