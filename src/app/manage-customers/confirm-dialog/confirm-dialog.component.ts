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
      this.name=data['fname'];
      this.id=data.id;
    }
  
  ngOnInit(): void {}
  
  deactivate(id?: number) {
    if(id)
    {
      this.postService.deactivateCustomer({active:false},id).subscribe((s: any) => {
      console.log(s);
      alert("Customer is deactivated!");
      });
      this.dialRef.close();
    }   
  } 

  cancel() {
    this.dialRef.close();
}
}
