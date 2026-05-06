import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MainInfo } from '../models/mainInfo';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private readonly baseUrl = '/api'; // proxy.conf.json redirige los llamados
  private readonly http = inject(HttpClient);

  getMainData(): Observable<MainInfo> {
    return this.http.get<MainInfo>(this.baseUrl + '/profiles'); // Cambia el endpoint según tu API
  }
}
