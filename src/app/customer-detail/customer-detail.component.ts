import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CUSTOMERS } from '../mock-customers';


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  
  form!: FormGroup;
  id:number;
  name:string;
  lastname:string;
  type:string;

  constructor(
    private formB: FormBuilder,
    private dialRef: MatDialogRef<CustomerDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.id=data.id;
      this.name=data.name;
      this.lastname=data.lastname;
      this.type=data.type;
     }

  ngOnInit() {

  this.form=this.formB.group({
    id:[this.id,[]],
    name:[this.name,[]],
    lastname:[this.lastname,[]],
    type:[this.type,[]],

  })
  }

  updateCustomer(idToUpd:number) {
    this.dialRef.close(this.form.value);
    console.log(this.form.value);
    console.log(idToUpd);
    
    CUSTOMERS.forEach((value,index)=>{
      if(value.id==idToUpd) 
      {
        CUSTOMERS[index].name=this.form.value.name;
        CUSTOMERS[index].lastname=this.form.value.lastname;
        CUSTOMERS[index].type=this.form.value.type;
      }
  });
   
  }

  cancel() {
    this.dialRef.close();
}

}

