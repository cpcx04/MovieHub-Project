import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyDetailResponse } from '../models/company-detail.interface';
import { Observable } from 'rxjs';
import { PopularFilmsResponse } from '../models/movieObject-list.interface';
import { SerieListResponse } from '../models/serie-list.interface';
import { environment } from 'src/enviroments/enviroment';

const PEOPLE_BASE_URL = 'https://api.themoviedb.org/3/person'
const MOVIE_BASE_URL = 'https://api.themoviedb.org/3/movie'
const TVSERIE_BASE_URL = 'https://api.themoviedb.org/3/tv'
const COMPANY_BASE_URL = 'https://api.themoviedb.org/3/company'
const TOKEN = 'c69873949130194e8bc389f3e0cf7420';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getCompanyById(idComp: number) :Observable<CompanyDetailResponse>{
    return this.http.get<CompanyDetailResponse>(`${COMPANY_BASE_URL}/${idComp}?api_key=${TOKEN}`)
  }
  getMoviesByCompanyId(idComp: number) :Observable<PopularFilmsResponse>{
    return this.http.get<PopularFilmsResponse>(`${COMPANY_BASE_URL}/${idComp}/movies?api_key=${TOKEN}`)
  }
  getSeriesByCompanyId(idComp: number) :Observable<SerieListResponse>{
    return this.http.get<SerieListResponse>(`${environment.apiBaseUrl}/discover/tv?api_key=${TOKEN}&with_companies=${idComp}`)
  }
}
