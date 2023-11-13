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
    return this.http.get<RequestTokenResponse>(`${environment.apiBaseUrl}/authentication/token/new?api_key=${environment.apiKey}`)
  }

  createSession(token: string): Observable<SessionResponse>{
    return this.http.post<SessionResponse>(`${environment.apiBaseUrl}/authentication/session/new?api_key=${environment.apiKey}`, {
      request_token: token
    })
  }
}
