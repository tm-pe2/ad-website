import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { Customer } from '../../interfaces/customer';
//TODO fix the dialog

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  
  name:string;
  id?:number;
  customers!:Customer[];
  

  constructor(
    private dialRef: MatDialogRef<CustomerDetailComponent>,
    private httpClient:HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: Customer) {
      this.name=data.first_name;
      this.id=data.user_id;
    }
  

  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers()
  {
    this.httpClient.get<any>(environment.apiUrl+'/customers').subscribe(
      (    response: Customer[])=>{
      console.log(response);
      this.customers=response;
    }
    );
  }
  deleteCustomer(idToDel?: number) {
    console.log(idToDel);
        const options = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
          body: {
            id: idToDel,
          },
        };
      console.log(options);
        this.httpClient.delete(environment.apiUrl+'/customers/'+idToDel,options)
          .subscribe((s: any) => {
            console.log(s);
          });

      this.dialRef.close();

    
  } 

  cancel() {
    this.dialRef.close();
}
}
