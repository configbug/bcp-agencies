import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/response.interface';
import { environment } from 'src/environments/environment';
import { IAgencie } from '../interfaces/agencies.interface';

@Injectable({
  providedIn: 'root'
})
export class AgenciesService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('JWT-TOKEN')}`
  });

  path: string = 'api/campaigns/';
  url: string = environment.apiUrl ?? 'assets/jsons/agencies.json';

  constructor(private http: HttpClient) { }

  list(): Observable<IResponse> {
    return this.http.get<IResponse>(`${this.url}`).pipe();
  }

  get(idAgencie?: string): Observable<IResponse> {
    return this.http.get<IResponse>(`${this.url}?idAgencie=${idAgencie}`).pipe();
  }

  add(agencie: IAgencie): Observable<IResponse> {
    const request = {
      agencia: agencie.agencia,
      departamento: agencie.departamento,
      provincia: agencie.provincia,
      distrito: agencie.distrito,
      direccion: agencie.direccion,
      lat: Number(agencie.lat),
      lon: Number(agencie.lon),
    }

    return this.http.post<IResponse>(`${this.url}`, request, { headers: this.headers }).pipe();
  }

  update(agencie: IAgencie): Observable<IResponse> {
    const request = {
      agencia: agencie.agencia,
      departamento: agencie.departamento,
      provincia: agencie.provincia,
      distrito: agencie.distrito,
      direccion: agencie.direccion,
      lat: Number(agencie.lat),
      lon: Number(agencie.lon),
    }
    return this.http.post<IResponse>(`${this.url}`, request, { headers: this.headers }).pipe();
  }
}
