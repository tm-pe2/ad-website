import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError, forkJoin, of  } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Faq } from './support/faq';

@Injectable({
  providedIn: 'root'
})
export class SupportService {
  baseUrl = 'https://jsonplaceholder.typicode.com/posts/'; // temporary test api 

  constructor(private http: HttpClient) { }

  getFaqs(): Observable<Faq[]>
  {
    return this.http.get<Faq[]>(this.baseUrl)
    .pipe(
      catchError(this.handleError<Faq[]>('getFaqs', []))
    );
  }
  
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
