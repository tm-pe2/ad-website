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

// calculateConsumption()
// {
//   let estimation:number=0;
//   let nrOfPeople : number = this.familyAdressCompoundForm.get('members')?.value;
//   console.log("ppl",nrOfPeople);
//   if(nrOfPeople==1){
//       estimation=18;
//   }
//   else if(nrOfPeople==2)
//   {
//     estimation=28;
//   }
//   else if(nrOfPeople==3) 
//   { 
//     estimation=40;
//   }
//   else
//   {
//   estimation=60;}
     
//   console.log("est",estimation);
  
//   let building : number = this.familyAdressCompoundForm.get('houseType')?.value;
//   console.log("bTy",building);
//   if(building==1){
//     estimation-=5;
//   }
//   else if(building==2)
//   {
//     estimation-=2;
//   }
//   else if(building==3) 
//   { 
//     estimation+=5;
//   }

//   console.log("est",estimation);

//   let appliances: [number]=(this.consumptionDetailsForm.get('selectedEquipments')?.value);
//   console.log(appliances);
//   appliances.forEach(app => {
//     if(app==1)
//     {estimation+=1}
//     if(app==2)
//     {estimation+=0.20}
//     if(app==3)
//     {estimation+=0.36}
//     if(app==4)
//     {estimation+=0.30}
//     if(app==5)
//     {estimation+=1.07}
//   });
//   console.log(estimation);

  
//   return estimation;
// }

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
    // this.estimation=this.calculateConsumption() 
    // let monthlyEst:number= this.estimation*30;
    // let annual:number=this.estimation*365;
    console.log(this.personalDetailsForm.value,this.familyAdressCompoundForm.value,this.meterDetailsForm.value);
    

  }
}
}

