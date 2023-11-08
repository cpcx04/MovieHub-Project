import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoListResponse } from '../models/video-list.interface';

const PEOPLE_BASE_URL = 'https://api.themoviedb.org/3/person'
const MOVIE_BASE_URL = 'https://api.themoviedb.org/3/movie'
const TVSERIE_BASE_URL = 'https://api.themoviedb.org/3/tv'
const TOKEN = 'c69873949130194e8bc389f3e0cf7420';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http: HttpClient) { }

  getVideosBySerieId(idSerie: number) : Observable<VideoListResponse>{
    return this.http.get<VideoListResponse>(`${TVSERIE_BASE_URL}/${idSerie}/videos?api_key=${TOKEN}`)
  }
}
