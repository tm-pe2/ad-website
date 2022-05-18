import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Customer, EstimatedContract, Meter } from '../interfaces/customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostConfigService {
  constructor(private httpClient : HttpClient,) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getCustomers(id:number):Observable<any>
  {
    return this.httpClient.get<any>(environment.apiUrl+"/customers/"+id+"/addresses");
  }

  getAllCustomers():Observable<any>
  {
    return this.httpClient.get<any>(environment.apiUrl+"/customers/contracts")
  }

  addContract(e:EstimatedContract): Observable <EstimatedContract>
    {
       return this.httpClient.post<EstimatedContract>( environment.apiUrl+"/contracts", e )

       
    }
  
  addMeters(e:Meter): Observable <Meter>
    {
       return this.httpClient.post<Meter>( environment.apiUrl+"/meters", e )

       
    }
  
}
