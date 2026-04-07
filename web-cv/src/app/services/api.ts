import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MainInfo } from '../models/mainInfo';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private readonly baseUrl = '/api'; // proxy.conf.json redirige los llamados

  constructor(private readonly http: HttpClient) {}

  getMainData(): Observable<MainInfo> {
    return this.http.get<MainInfo>(this.baseUrl + '/profiles'); // Cambia el endpoint según tu API
  }
}
