import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder, FormArray } from '@angular/forms'

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  personalDetailsForm!:FormGroup;
  familyAdressCompoundForm!: FormGroup;
  meterDetailsForm!:FormGroup;
  personalDetails_step = false;
  familyAdress_step = false;
  meterDetails_step=false;
  
  step = 1;
  selectedMeterNr=1;
  estimation!:number;


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() 
  {
    this.personalDetailsForm = this.formBuilder.group({
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      dob:['', Validators.required],
      rijksreg:['', Validators.required],
      email:['', Validators.required],
      phone:['', Validators.required]
      
    });
    this.familyAdressCompoundForm = this.formBuilder.group({
      street: ['',Validators.required],
      house_nr:['', Validators.required],
      city: ['', Validators.required],
      postcode: ['',Validators.required],
      members:['', Validators.required],
      houseType: ['',Validators.required]
    });
    this.meterDetailsForm = this.formBuilder.group({
      metersNumber: ['', Validators.required],
      meterTypes: [[''] ,Validators.required],
      meterID: [[''],Validators.required],
      metersValue:[[''],Validators.required]
    });
    
  }
  get personalDetails() { return this.personalDetailsForm.controls; }
  get familyAddress() { return this.familyAdressCompoundForm.controls; }
  get meterDetails() {return this.meterDetailsForm.controls;}

 
next()
{
  if(this.step==1)
  {
    this.personalDetails_step=true;
    if(this.personalDetailsForm.invalid){return}
    this.step++;
    console.log(this.step);
  }
  if(this.step==2)
  {
    console.log(this.step);
    this.familyAdress_step=true;
    if(this.familyAdressCompoundForm.invalid)
    {
      console.error();
      return
    }
    this.step++;
    console.log(this.step);
  }
  if(this.step==3)
  {
    console.log(this.step);
    this.meterDetails_step=true;
    if(this.meterDetailsForm.invalid)
    {
      console.error();
      return
    }
    this.step++;
    console.log(this.step);
  }
}
previous()
{
  this.step--;
  console.log(this.step);
  if(this.step==1)
  {
    this.personalDetails_step=false;
    console.log(this.step);
  }
  if(this.step==2)
  {
    this.familyAdress_step=false;
    console.log(this.step);
  }
  if(this.step==3)
  {
    this.meterDetails_step=false;
    console.log(this.step);
  }
  
}

submit()
{
  if(this.step==3)
  {
    this.meterDetails_step=true;
    if(this.meterDetailsForm.invalid)
    {
    console.log("error");
    console.error();
    return
    }
    console.log(this.personalDetailsForm.value,this.familyAdressCompoundForm.value,this.meterDetailsForm.value);
    

  }
}
}

