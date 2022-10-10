import { filter, map, switchMap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  public mockUrl = '../assets/db/data.json';

  constructor(private http: HttpClient) {}

  getAllMovies() {
    return this.http.get<any>(this.mockUrl);
  }

  // searchMovies(query: string): Observable<any[]> {
  //   return this.http.get(this.mockUrl).pipe(map((data:any) => this.filterMovies(query, data as any[])));
  // }
}
