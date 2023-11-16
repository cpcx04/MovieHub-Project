import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoListResponse } from '../models/video-list.interface';

const MOVIE_BASE_URL = 'https://api.themoviedb.org/3/movie'
const TOKEN = 'c69873949130194e8bc389f3e0cf7420';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getVideosByMovieId(idMovie: number) : Observable<VideoListResponse> {
    return this.http.get<VideoListResponse>(`${MOVIE_BASE_URL}/${idMovie}/videos?api_key=${TOKEN}`)
  }

  
}
