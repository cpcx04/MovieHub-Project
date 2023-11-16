import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { ReviewListResponse } from '../models/reviews-list.interface';
import { Observable } from 'rxjs';



const MOVIE_BASE_URL = 'movie';

@Injectable({
        providedIn:'root'
})
export class ReviewService {


    constructor(private http: HttpClient) { }

    getFilmReviewById(idMovie: number): Observable<ReviewListResponse>{
      return this.http.get<ReviewListResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/${idMovie}/reviews?api_key=${environment.apiKey}`)
    }
}