import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Customer } from '../../interfaces/customer';
import { PostConfigService } from 'src/app/services/post-config.service';

@Component({
  selector: 'app-add-customer-dialog',
  templateUrl: './add-customer-dialog.component.html',
  styleUrls: ['./add-customer-dialog.component.css']
})
export class AddCustomerDialogComponent implements OnInit {

  constructor(private postService : PostConfigService,
              private dialRef: MatDialogRef<AddCustomerDialogComponent> ){}

  ngOnInit(): void {}  

  cancel() {
    this.dialRef.close();
  }
  
  onSubmit(e:Customer)
  {
    this.postService.addCustomer(e).subscribe(
    response => {
      alert(response);
      this.cancel();
    });
   
  }

}
