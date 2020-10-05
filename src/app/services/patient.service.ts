import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private readonly baseUrl = environment.apiurl;

  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('bearerToken')
    })
  };

  constructor(private http: HttpClient) { }

  addPatient(data): Observable<any> {
    return this.http.post(`${this.baseUrl}addPatient`, data, this.httpOptions);
  }

  public getPatient(): Observable<any> {
    return this.http.get(`${this.baseUrl}getPatients`, this.httpOptions);
  }

  getPatientById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}getPatient/${id}`, this.httpOptions);
  }

  editPatient(id: number, data): Observable<any> {
    return this.http.put(`${this.baseUrl}editPatient/${id}`, data, this.httpOptions);
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}deletePatient/${id}`, this.httpOptions);
  }

}
