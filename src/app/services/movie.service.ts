import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }

  /**
   * search movie by title on OmdbAPI
   */
  search(title: string): Observable<any> {
    // http://omdbapi.com/?apiKey=azertyu&s=title&type=movie
    const requestUrl = `${environment.apiBaseUrl}?apikey=${environment.apiKey}&type=movie&s=${title}`;
    // return an Observable object
    return this.http.get(requestUrl).pipe(
      map(results => results['Search'])
    );
  }

  /**
   * get movie's details
   */
  details(id: string) {

  }
}
