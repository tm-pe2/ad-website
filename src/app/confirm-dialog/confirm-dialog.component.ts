import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { Customer } from '../customers/customer';
//import { CUSTOMERS } from '../mock-customers';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  
  name:string;
  id:number;
  customers!:Customer[];
  baseUrl: String = "http://192.168.0.209:6060/api/";

  constructor(
    private dialRef: MatDialogRef<CustomerDetailComponent>,
    private httpClient:HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.name=data.name;
      this.id=data.id;
    }
  

  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers()
  {
    this.httpClient.get<any>(this.baseUrl+'customers').subscribe(
    response=>{
      console.log(response);
      this.customers=response;
    }
    );
  }
  deleteCustomer(idToDel: number) {
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
        this.httpClient.delete(this.baseUrl+'customers/'+idToDel,options)
          .subscribe((s) => {
            console.log(s);
          });

      this.dialRef.close();

    
  } 

  cancel() {
    this.dialRef.close();
}
}
