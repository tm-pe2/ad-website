import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Customer, EstimationRegistration, Meter } from '../interfaces/customer';
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
    return this.httpClient.get<any>(environment.apiUrl+"/customers/" + id );
  }

  getAllCustomers():Observable<Customer[]>
  {
    return this.httpClient.get<Customer[]>(environment.apiUrl+"/customers")
  }

  addEstimation(e:EstimationRegistration)
    {
       return this.httpClient.post(environment.apiUrl+"/estimations", e, {responseType: 'text'});
       
    }
  
  addCustomer(c:Customer)
  {
      return this.httpClient.post(environment.apiUrl+"/customers", c, {responseType: 'text'});
       
  }

  editCustomer(id:number,c:Customer)
  {
      return this.httpClient.put(environment.apiUrl + "/customers/" + id ,c);
  }
 
  deactivateCustomer(activeCustomer: {active:boolean}, id:number): Observable<Customer>
  {
    return this.httpClient.patch<Customer>(environment.apiUrl+ "/users/status/"+id, activeCustomer);
  }
}