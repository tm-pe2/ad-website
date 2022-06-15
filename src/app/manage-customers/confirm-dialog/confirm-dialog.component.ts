import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { Customer } from '../../interfaces/customer';
import { PostConfigService } from 'src/app/services/post-config.service';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  
  name:string;
  id?:number;
  
  constructor(
    private dialRef: MatDialogRef<CustomerDetailComponent>,
    private postService:PostConfigService,
    @Inject(MAT_DIALOG_DATA) public data: Customer) {
      this.name=data.first_name;
      this.id=data.id;
    }
  
  ngOnInit(): void {
    console.log()
  }
  
  deactivate(id?: number) {
    console.log(id);
    if(id)
    {
      this.postService.deactivateCustomer({active:false},id).subscribe((s: any) => {
      console.log(s);
      alert("Customer edited!");
      });
      this.dialRef.close();
    }   
  } 

  cancel() {
    this.dialRef.close();
}
}
