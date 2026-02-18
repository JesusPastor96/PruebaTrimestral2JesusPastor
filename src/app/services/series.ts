import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface Series {
  id?: number;
  title: string;
  channel: string;
  rating: number;
}

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private readonly _http = inject(HttpClient);
  private readonly _apiUrl = 'https://peticiones.online/api/series';

  getAll(): Observable<Series[]> {
    return this._http.get<Series[]>(this._apiUrl);
  }

  create(series: Series): Observable<any> {
    return this._http.post<any>(this._apiUrl, series);
  }
}