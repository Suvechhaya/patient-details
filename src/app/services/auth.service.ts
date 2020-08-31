import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = environment.apiurl + 'user';

  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    return this.http.post(`${this.baseUrl}` + '/login', data);
  }

  register(data): Observable<any> {
    return this.http.post(`${this.baseUrl}` + '/register', data);
  }
}
