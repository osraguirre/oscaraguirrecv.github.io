import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MainInfo, ProfilesResponse } from '../models/mainInfo';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private readonly baseUrl = '/api'; // proxy.conf.json redirige los llamados
  private readonly http = inject(HttpClient);

  getMainData(): Observable<ProfilesResponse> {
    const headers = new HttpHeaders({
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache'
    });
    
    return this.http.get<ProfilesResponse>(this.baseUrl + '/profiles', { headers });
  }
}
