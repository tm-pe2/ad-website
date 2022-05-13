import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder, FormArray } from '@angular/forms'
import { environment } from 'src/environments/environment';
import { CustomerComponent } from '../customers/customers.component';
import { Customer ,Estimation} from '../interfaces/customer';
import { UserdataService } from '../services/userdata.service';


@Component({
  selector: 'app-consumption-estimation',
  templateUrl: './consumption-estimation.component.html',
  styleUrls: ['./consumption-estimation.component.css']
})
export class ConsumptionEstimationComponent implements OnInit {

  serviceChoiceForm!:FormGroup;
  familyAdressCompoundForm!: FormGroup;
  consumptionDetailsForm!: FormGroup;
  meterTypeForm!:FormGroup;
  
  service_step = false;
  familyAdress_step = false;
  meterType_step=false;
  consumption_step = false;
  step = 1;
  
  customerData!: Customer ;
  customer_ID!:number;
  
  fullAddresses: string[]=[];
  addressesIDs: number[]=[];
  
  selectedAddressID!:number;
  selectedMeterNr:number=1;
  selectedAnswer:number=0;
    
  
  estimationData!: Estimation;
  estimation!:number;
  annualEstimation!:number;
  annualCustomerInput!:number;
  past_consumtionV!:number;

  equipments: Array<any> = [
    { name: 'Oven/Stove', value: '1' },
    { name: 'Dishwasher', value: '2' },
    { name: 'Washing Machine', value: '3' },
    { name: 'Drying Machine', value: '4' },
    { name: 'Hair Dryer', value: '5' }
  ];
  

  constructor(private formBuilder: FormBuilder,
              private httpClient:HttpClient,
              private customer_user: UserdataService) {}

  ngOnInit() 
  {
    this.serviceChoiceForm = this.formBuilder.group({
      choice:['', Validators.required],
      
    });
    this.familyAdressCompoundForm = this.formBuilder.group({
        addressID: ['',Validators.required],
        members: ['',Validators.required],
        houseType: ['',Validators.required]
    });
    this.meterTypeForm = this.formBuilder.group({
      metersNumber: [ '' , Validators.required],
      meterTypes: [ '' ,Validators.required],
      metersValue:[ '' ,Validators.required],
      meterTypes2: [ '' ],
      metersValue2:[ '' ],
      meterTypes3: [ '' ],
      metersValue3:[ '' ]
    });
    this.consumptionDetailsForm = this.formBuilder.group({
        answer: [''],
        annualConsumption: ['',Validators.required],
        selectedEquipments : new FormArray([])
    });

    this.getCustomers();
    
  }
  get service() { return this.serviceChoiceForm.controls; }
  get familyAddress() { return this.familyAdressCompoundForm.controls; }
  get meterType() {return this.meterTypeForm.controls;}
  get consumption() { return this.consumptionDetailsForm.controls; }

  onCheckboxChange(event: any) {
    const selectedEquipments = (this.consumption['selectedEquipments'] as FormArray);
    if (event.target.checked) {
      selectedEquipments.push(new FormControl(event.target.value));
    } else {
      const index = selectedEquipments.controls.findIndex(x => x.value === event.target.value);
      selectedEquipments.removeAt(index);
    }
  }

  getCustomers()
  {
    this.customer_ID=this.customer_user.getUser().id;
    this.httpClient.get<any>(environment.apiUrl+'/customers/' + this.customer_ID).subscribe(
      (response) =>{
      this.customerData = response.customer;
      console.log(this.customerData);
      console.log(response.customer.street);
      this.selectedAddressID=this.customerData.address_id;
      this.fullAddresses.push(this.customerData.street + ", "+this.customerData.house_number);
      this.addressesIDs.push(this.customerData.address_id)
      console.log(this.customer_ID, this.fullAddresses);
  });
  
}

next()
{
  if(this.step==1)
  {
    this.service_step=true;
    if(this.serviceChoiceForm.invalid){return}
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
    this.meterType_step=true;
    if(this.meterTypeForm.invalid)
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
    this.service_step=false;
    console.log(this.step);
  }
  if(this.step==2)
  {
    this.familyAdress_step=false;
    console.log(this.step);
  }
  if(this.step==3)
  {
    this.meterType_step=false;
    console.log(this.step);
  }
  
}

calculateConsumption()
{
  let estimation:number=0;
  let nrOfPeople : number = this.familyAdressCompoundForm.get('members')?.value;
  console.log("ppl",nrOfPeople);
  if(nrOfPeople==1){
      estimation=18;
  }
  else if(nrOfPeople==2)
  {
    estimation=28;
  }
  else if(nrOfPeople==3) 
  { 
    estimation=40;
  }
  else
  {
  estimation=60;}
     
  console.log("est",estimation);
  
  let building : number = this.familyAdressCompoundForm.get('houseType')?.value;
  console.log("bTy",building);
  if(building==1){
    estimation-=5;
  }
  else if(building==2)
  {
    estimation-=2;
  }
  else if(building==3) 
  { 
    estimation+=5;
  }

  console.log("est",estimation);

  let appliances: [number]=(this.consumptionDetailsForm.get('selectedEquipments')?.value);
  console.log(appliances);
  appliances.forEach(app => {
    if(app==1)
    {estimation+=1}
    if(app==2)
    {estimation+=0.20}
    if(app==3)
    {estimation+=0.36}
    if(app==4)
    {estimation+=0.30}
    if(app==5)
    {estimation+=1.07}
  });
  console.log(estimation);

  
  return estimation;
}

submit()
{
  if(this.step==4)
  {
    this.consumption_step=true;
    if(this.consumptionDetailsForm.invalid)
    {
      console.error();
    return
    }
    this.estimation=this.calculateConsumption();
    this.annualEstimation=this.estimation*365;
    let monthlyEst:number= this.estimation*30;

    console.log(this.serviceChoiceForm.value,this.familyAdressCompoundForm.value,this.meterTypeForm.value,this.consumptionDetailsForm.value);
    
    const service_typeV=this.serviceChoiceForm.value;
    const address_idV=this.familyAdressCompoundForm.value.address_id;
    const building_typeV=this.familyAdressCompoundForm.value.houseType;
    const family_sizeV=this.familyAdressCompoundForm.value.family_size;
    const meters_numberV=this.meterTypeForm.value.metersNumber;
    const meter_typeV=this.meterTypeForm.value.meterTypes;
    const meter_valueV=this.meterTypeForm.value.metersValue;

    const meter_type2V=this.meterTypeForm.value.meterTypes2;
    const meter_value2V=this.meterTypeForm.value.metersValue2;
       
    const meter_type3V=this.meterTypeForm.value.meterTypes3;
    const meter_value3V=this.meterTypeForm.value.metersValue3;
   

    const equipmentListV=this.consumptionDetailsForm.value.selectedEquipments;
    
    if (this.selectedAnswer==1)
    {   
        this.annualCustomerInput=this.consumptionDetailsForm.value.annualConsumption;
        if(this.annualCustomerInput < this.annualEstimation)
        {
          this.past_consumtionV=this.annualEstimation;
        }
        else 
        {
           this.past_consumtionV=this.annualCustomerInput;
        }
    }
    
    this.estimationData={
      estimation_id:-1,
      service_type:service_typeV,
      address_id: address_idV,
      building_type: building_typeV,
      family_size: family_sizeV,
      meters_number:meters_numberV,
      meter_type:meter_typeV,
      meter_value: meter_valueV,
      meter_type2:meter_type2V,
      meter_value2:meter_value2V,
      meter_type3:meter_type2V,
      meter_value3:meter_value3V,
      equipments: equipmentListV,
      past_consumption: this.past_consumtionV,
      estimated_consumption:this.annualEstimation,

    }
    console.log(this.estimationData);

  }

}
}
