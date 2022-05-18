import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder, FormArray } from '@angular/forms'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { environment } from 'src/environments/environment';
import { CustomerComponent } from '../customers/customers.component';
import { Customer ,EstimatedContract,Estimation, Meter} from '../interfaces/customer';
import { UserdataService } from '../services/userdata.service';
import {PostConfigService} from '../services/post-config.service'
import { Address } from '../interfaces/customer';


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
  
  customerData: Customer[]=[] ;  
  fullAddresses: Address[]=[];

  selectedAddressID:number=-1;
  selectedMeterNr:number=1;
  answerRadio:number=0;
  
  meters: Meter[]=[];
  contract: EstimatedContract=
  {
      start_date: new Date(),
      end_date: new Date(),
      customer_type: '',
      tariff_id: -1 ,
      estimation_id:-1,
      address_id:-1,
      service_type:-1,
      status:"inactive",
      building_type: -1,
      family_size: -1 ,
      equipments: '',
      past_consumption: -1,
      estimated_consumption:-1
  
  };

  estimation:number=0;
  annualEstimation:number=0;
  annualCustomerInput:number=0;
  past_consumtionV:number=0;



  equipments: Array<any> = [
    { name: 'Oven/Stove', value: '1' },
    { name: 'Dishwasher', value: '2' },
    { name: 'Washing Machine', value: '3' },
    { name: 'Drying Machine', value: '4' },
    { name: 'Hair Dryer', value: '5' }
  ];

  

  constructor(
    private formBuilder: FormBuilder,
              private httpClient:HttpClient,
              private customer_user: UserdataService,
              private postService: PostConfigService) {}

  ngOnInit() 
  {
    this.serviceChoiceForm = this.formBuilder.group({
      service_type: new FormControl('', Validators.required),
      
    });
    this.familyAdressCompoundForm = this.formBuilder.group({
        address_id: new FormControl('', Validators.required),
        family_size: new FormControl('',Validators.required),
        building_type: new FormControl('',Validators.required)
    });
    this.meterTypeForm = this.formBuilder.group({
      metersNumber: new FormControl(['' , Validators.required]),
      type: new FormControl('',Validators.required),
      value: new FormControl('',Validators.required),
      type2: new FormControl(''),
      value2: new FormControl(''),
      type3: new FormControl(''),
      value3: new FormControl('')
    });
    this.consumptionDetailsForm = this.formBuilder.group({
        answer: new FormControl(''),
        annualConsumption: new FormControl(''),
        equipments : new FormArray([])
    });

    this.onGetCustomers();
    
  }
  get service() { return this.serviceChoiceForm.controls; }
  get familyAddress() { return this.familyAdressCompoundForm.controls; }
  get meterType() {return this.meterTypeForm.controls;}
  get consumption() { return this.consumptionDetailsForm.controls; }

  onCheckboxChange(event: any) {
    const selectedEquipments = (this.consumption['equipments'] as FormArray);
    if (event.target.checked) {
      selectedEquipments.push(new FormControl(event.target.value));
    } else {
      const index = selectedEquipments.controls.findIndex(x => x.value === event.target.value);
      selectedEquipments.removeAt(index);
    }
  }


  onGetCustomers()
  {
    /*
    
    this.postService.getCustomers(this.customer_user.getUser().id).subscribe(
      (response) =>{
        console.log("received customer: ", response.customer);
        this.customerData=response.customer;
        this.customerData.forEach((add) => {
        let a:Address=
        {
          address_id : add.address_id,
          street : add.street,
          house_number : add.house_number,
          city : add.city,
          postal_code : add.postal_code,
          country : add.country
        }
        this.fullAddresses.push(a);
        console.log("one add:",a);
        console.log("all adds:",this.fullAddresses);
        });
      },
      (error)=>console.log('error: ',error),
      ()=> console.log('ready!')
    );    
    */  
  }

next()
{
  if(this.step==1)
  {
    console.log(this.step);
    this.service_step=true;
    if(this.serviceChoiceForm.invalid){return}
    this.step++;
  }
  if(this.step==2)
  {
    console.log(this.step);
    this.familyAdress_step=true;
    /*
    if(this.familyAdressCompoundForm.invalid)
    {
      console.error();
      return
    } */
    this.step++;
   
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
   
  }
}
previous()
{
  this.step--;
 
  if(this.step==1)
  {
    this.service_step=false;
   
  }
  if(this.step==2)
  {
    this.familyAdress_step=false;
   
  }
  if(this.step==3)
  {
    this.meterType_step=false;
   
  }
  if(this.step==4)
  {
    this.consumption_step =false;
   
  }
  
}
calculateConsumption()
{
  
  switch(this.contract.family_size)
  {
    //daily electricity consumption in kWh of 'x' person(s) in an apartment:
    case 1:
      {
        this.estimation=18;
        
        break;
      }
    case 2:
      {
        this.estimation=28;
        break;
      }
    case 3:
      {
        this.estimation=40;
        break;
      }
    case 4:
      {
        this.estimation=60;
        break;
      }
  }
  
  //electricity consumption is adjusted depending on building type. e.g: closed house can get warmer easier than an open building, etc:
  
  switch(this.contract.building_type)
  {
    case 1:
      {
        this.estimation-=5;
        break;
      }
    case 2:
      {
        this.estimation-=2;
        break;
      }
    case 3:
      {
        this.estimation+=5;
        break;
      }
  }
  
  let appliances: [number]=(this.consumptionDetailsForm.get('equipments')?.value);
  //the amount of kWh consumed in a day from an appliance is added to the estimated consumption
  appliances.forEach(app => {
    if(app==1)
    {this.estimation+=1}
    if(app==2)
    {this.estimation+=0.20}
    if(app==3)
    {this.estimation+=0.36}
    if(app==4)
    {this.estimation+=0.30}
    if(app==5)
    {this.estimation+=1.07}
  });
  
  return this.estimation;
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
    

    this.annualEstimation=this.calculateConsumption()*365;
    const meters_numberV=this.meterTypeForm.value.metersNumber;
   
    if(meters_numberV==1)
    {
        let m:Meter ={
          meter_id:-1,
          contract_id:-1,
          type:this.meterTypeForm.value.type,
          value:this.meterTypeForm.value.value,
          physic_id:-1,
          }
        this.meters.push(m);
    }
    else if(meters_numberV == 2)
      {
        let m:Meter ={
          meter_id:-1,
          contract_id:-1,
          type:this.meterTypeForm.value.type,
          value:this.meterTypeForm.value.value,
          physic_id:-1,
          }
        this.meters.push(m);

        let m2:Meter ={
          meter_id:-1,
          contract_id:-1,
          type:this.meterTypeForm.value.type2,
          value:this.meterTypeForm.value.value2,
          physic_id:-1,
          }
        this.meters.push(m2);
      }
      else if(meters_numberV==3)
      {
        let m:Meter ={
          meter_id:-1,
          contract_id:-1,
          type:this.meterTypeForm.value.type,
          value:this.meterTypeForm.value.value,
          physic_id:-1,
          }
        this.meters.push(m);

        let m2:Meter ={
          meter_id:-1,
          contract_id:-1,
          type:this.meterTypeForm.value.type2,
          value:this.meterTypeForm.value.value2,
          physic_id:-1,
          }
        this.meters.push(m2);
        
        let m3:Meter ={
          meter_id:-1,
          contract_id:-1,
          type:this.meterTypeForm.value.type3,
          value:this.meterTypeForm.value.value3,
          physic_id:-1,
          }
        this.meters.push(m3);
      }
      
    }

    const equipmentListV=this.consumptionDetailsForm.value.equipments;
    const eqListString=equipmentListV.toString();

    if (this.consumptionDetailsForm.value.answer==1)
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
    
  
  
    this.contract={
      start_date: new Date(),
      end_date: new Date(),
      customer_type: "private", //this.customerData[0].customer_type,
      tariff_id: 1 ,
      estimation_id:0,
      address_id: Number(this.familyAdressCompoundForm.value.address_id),
      service_type:Number(this.serviceChoiceForm.value.service_type),
      status:"inactive",
      building_type: Number(this.familyAdressCompoundForm.value.building_type),
      family_size: Number(this.familyAdressCompoundForm.value.family_size),
      equipments: eqListString,
      past_consumption: Number(this.past_consumtionV),
      estimated_consumption:Number(this.annualEstimation)
    }
    
    this.onAddContract();
  
  
}

  addSmartMeter() {
    this.meters.forEach((m) => {
      if (m.type == "smartMeter") {
        let body = {
          "occupants" : this.contract.family_size,
          "day_consumption" : m.value,
          "night_consumption" : 0,
          "latitude": 50.5039,
          "longitude": 4.4699
        }

        let headers = { "headers" : { "header" : ['Content-Type: application/json']}};


        this.httpClient.post("http://10.97.0.100:3000/meter", body, headers).subscribe(
          (response) => {
            console.log("meter added", response)
          },
          (error) => console.log("error", error)
        )
        
      }
    })
  }

  onAddContract()
  {
    console.log(this.contract);
     this.postService.addContract(this.contract).subscribe(
      (response: any)=>{
        console.log('Contract added:',response);
        this.addSmartMeter();
      },
      (error: any)=>console.log('error:',error)
     )
  }
} 
