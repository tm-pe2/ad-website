import { Component, OnInit,Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostConfigService } from 'src/app/services/post-config.service';
import { environment } from 'src/environments/environment';
import { Customer } from '../../interfaces/customer';

//get addresses, select address to change and change the values

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  
  form!: FormGroup;
  
  constructor(
    private postService:PostConfigService,
    private formB: FormBuilder,
    private dialRef: MatDialogRef<CustomerDetailComponent>,
    
    @Inject(MAT_DIALOG_DATA) public data: Customer) {
      this.form=this.formB.group({
      firstName: data.first_name,
      lastName: data.last_name,
      email: data.email,
      phone: data.phone_number,
      password: data.password,
      registryId: data.national_registry_number,
      birthDate: data.birth_date,
      type: data.customer_type,
      });      
     }

  ngOnInit() {}

  onSubmit(c:Customer)
  {
    console.log(c.id);
    if(c.id)
    {
      this.postService.editCustomer(c.id,c).subscribe({
      next:(response: any) => console.log(response),
      error: (error: any) => console.log(error),
      });
    }
    
  }
  cancel() {
    this.dialRef.close();
}

validateConfirmPassword(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.root.get('password');
    const confirmPassword = control.root.get('confirmPassword');
    if (password && confirmPassword) {
      return password.value === confirmPassword.value ? null : { passwordMismatch: true };
    }
    return null;
  }
}

}



