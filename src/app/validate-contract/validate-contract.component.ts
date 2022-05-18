import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder, FormArray } from '@angular/forms'
import { environment } from 'src/environments/environment';
import { CustomerComponent } from '../customers/customers.component';
import { Customer ,Estimation} from '../interfaces/customer';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-validate-contract',
  templateUrl: './validate-contract.component.html',
  styleUrls: ['./validate-contract.component.css']
})
export class ValidateContractComponent implements OnInit {

  consumptionDetailsForm!: FormGroup;
  meterTypeForm!:FormGroup;
  
  meterType_step=false;
  consumption_step = false;
  step = 1;
  
  customerData!: Customer ;
  customer_ID!:number;
  
  selectedMeterNr:number=1;
  estimationData!:Estimation;
  meterTypesVal!: string;
  metersValueVal!: number;
  meterTypes2Val!: string;
  metersValue2Val!: number;
  meterTypes3Val!: string;
  metersValue3Val!: number;
    

  constructor(private formBuilder: FormBuilder,
              private httpClient:HttpClient,
              private customer_user: UserdataService) {}

  ngOnInit() 
  {
    this.meterTypeForm = this.formBuilder.group({
      metersNumber: [ '' , Validators.required],
      meterTypes: [ '' ,Validators.required],
      metersValue:[ '' ,Validators.required],
      meterTypes2: [ '' ],
      metersValue2:[ '' ],
      meterTypes3: [ '' ],
      metersValue3:[ '' ]
    });

    this.getCustomers();
    this.getCustomerInput();
    
  }
  get meterType() {return this.meterTypeForm.controls;}
  get consumption() { return this.consumptionDetailsForm.controls; }


  getCustomers()
  {
    this.customer_ID=this.customer_user.user.user_id;
    this.httpClient.get<any>(environment.apiUrl+'/customers/user/' + this.customer_ID).subscribe(
      (response) =>{
      this.customerData = response.customer;
  });
  }

  getCustomerInput()
  {
    this.httpClient.get<any>(environment.apiUrl+'/estimations/customers/' + this.customer_ID).subscribe(
      (response) =>{
      this.estimationData = response.estimation;
      console.log("inside:",this.estimationData);
  }); 
  console.log("ouside:",this.estimationData);
  //this.selectedMeterNr=this.estimationData.meters_number;
  //this.meterTypesVal=this.estimationData.meter_type;
  //this.metersValueVal=this.estimationData.meter_value;
  console.log(this.metersValueVal);
  //this.meterTypes2Val=this.estimationData.meter_type2;
  //this.metersValue2Val=this.estimationData.meter_value2;
  //this.meterTypes3Val=this.estimationData.meter_type3;
  //this.metersValue3Val=this.estimationData.meter_value3;

  }
 

next()
{
  if(this.step==1)
  {
    this.meterType_step=true;
    if(this.meterTypeForm.invalid){return}
    this.step++;
    console.log(this.step);
  }
  if(this.step==2)
  {
    
  }
  
}
previous()
{
  this.step--;
  console.log(this.step);
  if(this.step==1)
  {
    this.meterType_step=false;
    console.log(this.step);
  }
  if(this.step==2)
  {
    
  }
}



submit()
{
  if(this.step==3)
  {
    
  //   const meters_number=this.meterTypeForm.value.metersNumber;
  //   const meter_type=this.meterTypeForm.value.meterTypes;
  //   const meter_value=this.meterTypeForm.value.metersValue;

  //   if(this.meterTypeForm.value.metersNumber.value==2)
  //   {
  //     const meter_type2=this.meterTypeForm.value.meterTypes2;
  //     const meter_value2=this.meterTypeForm.value.metersValue2;
  //   }
  //   else if(this.meterTypeForm.value.metersNumber.value==3)
  //  {
  //   const meter_type3=this.meterTypeForm.value.meterTypes3;
  //   const meter_value3=this.meterTypeForm.value.metersValue3;
  //  }

  }

}

}