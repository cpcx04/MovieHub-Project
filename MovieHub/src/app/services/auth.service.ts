import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestTokenResponse } from '../models/request-token.interface';
import { environment } from 'src/enviroments/enviroment';
import { SessionResponse } from '../models/session.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getRequestToken(): Observable<RequestTokenResponse>{
    return this.http.get<RequestTokenResponse>(`${environment.apiBaseUrl}/authentication/token/new`, {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }

  createSession(token: string): Observable<SessionResponse>{
    return this.http.post<SessionResponse>(`${environment.apiBaseUrl}/authentication/session/new`, {
      request_token: token
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }
}
