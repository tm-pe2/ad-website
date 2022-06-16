import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder, FormArray } from '@angular/forms'
import { Customer,EstimationRegistration, Meter,MeterType,User} from '../interfaces/customer';
import { UserdataService } from '../services/userdata.service';
import {PostConfigService} from '../services/post-config.service'
import { Address,BuildingType,EquipmentType } from '../interfaces/customer';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

//TODO code cleanups

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

  selectedAddressID:number=0;
  selectedMeterNr:number=1;
  answerRadio:number=0;
  loggedInUser!: User;

  estimationRegistration:EstimationRegistration =
  {
    service_type : 0, 
    building_type : 0, 
    family_size: 0, 
    equipment: [],
    past_consumption: 0, 
    meters: []
  };
  
  meters: Meter[]=[];

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
              private postService: PostConfigService,
              public dialog: MatDialog) {}

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
      // value: new FormControl('',Validators.required),
      type2: new FormControl(''),
      // value2: new FormControl(''),
      type3: new FormControl(''),
      // value3: new FormControl('')
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
    const selectedEquipment = (this.consumption['equipments'] as FormArray);
    if (event.target.checked) {
      selectedEquipment.push(new FormControl(event.target.value));
    } else {
      const index = selectedEquipment.controls.findIndex(x => x.value === event.target.value);
      selectedEquipment.removeAt(index);
    }
  }
  
  

  async onGetCustomers()
  {
    await this.customer_user.loadUser();
    if(this.customer_user.user.id){
    this.postService.getCustomers(this.customer_user.user.id).subscribe(
      (response) =>{
        this.customerData=response.customer;
        response.addresses.forEach((add:Address) => {
        let a:Address=
        {
          id : add.id,
          street : add.street,
          house_number : add.house_number,
          city_name : add.city_name,
          postal_code : add.postal_code,
          country : add.country
        }
        this.fullAddresses.push(a);
        });
      },
      (error)=>console.log('error: ',error),
      ()=> console.log('ready!')
    );    
    console.log(this.fullAddresses);
   }
  }

next()
{
  if(this.step==1)
  {
    this.service_step=true;
    if(this.serviceChoiceForm.invalid){return}
    this.step++;
  }
  if(this.step==2)
  {
    this.familyAdress_step=true;
    if(this.familyAdressCompoundForm.invalid)
    {
      console.error();
      return
    } 
    this.step++;
   
  }
  if(this.step==3)
  {
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
  switch(this.familyAdressCompoundForm.value.family_size)
  {
    
    //daily electricity consumption in kWh of 'x' person(s) in an apartment:
    case "1":
      {
        this.estimation+=18;
        
        break;
      }
    case "2":
      {
        this.estimation+=28;
        break;
      }
    case "3":
      {
        this.estimation+=40;
        break;
      }
    case "4":
      {
        this.estimation+=60;
        break;
      }
  }
  
  //electricity consumption is adjusted depending on building type. e.g: closed house can get warmer easier than an open building, etc:
  
  switch(this.familyAdressCompoundForm.value.building_type)
  {
    case "1":
      {
        this.estimation-=5;
        break;
      }
    case "2":
      {
        this.estimation-=2;
        break;
      }
    case "3":
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
    
    this.annualEstimation=this.calculateConsumption();
    this.annualEstimation=this.annualEstimation*365;
    const meters_numberV=this.meterTypeForm.value.metersNumber;
   
    if(meters_numberV==1)
    {
        let m:Meter ={
          meter_type:this.meterTypeForm.value.type,
          //index_value:Number(this.meterTypeForm.value.value),
          }
        this.meters.push(m);
    }
    else if(meters_numberV == 2)
      {
        let m:Meter ={
          meter_type:this.meterTypeForm.value.type,
          //index_value:Number(this.meterTypeForm.value.value),
          }
        this.meters.push(m);

        let m2:Meter ={
          meter_type:this.meterTypeForm.value.type2,
          //index_value:Number(this.meterTypeForm.value.value2),
          }
        this.meters.push(m2);
      }
      else if(meters_numberV==3)
      {
        let m:Meter ={
          meter_type:this.meterTypeForm.value.type,
          //index_value:Number(this.meterTypeForm.value.value),
          }
        this.meters.push(m);

        let m2:Meter ={
          meter_type:this.meterTypeForm.value.type2,
          //index_value:Number(this.meterTypeForm.value.value2),
          }
        this.meters.push(m2);
        
        let m3:Meter ={
          meter_type:this.meterTypeForm.value.type3,
          //index_value:Number(this.meterTypeForm.value.value3),          
          }
        this.meters.push(m3);
      } 
    }

    if (this.consumptionDetailsForm.value.answer==1)
    {   
        this.annualCustomerInput=this.consumptionDetailsForm.value.annualConsumption;
        if(this.annualCustomerInput < (this.annualEstimation - (this.annualEstimation*0.1)) || this.annualCustomerInput > (this.annualEstimation + (this.annualEstimation*0.1)) )
        {
          this.past_consumtionV=this.annualEstimation;
        }
        else 
        {
           this.past_consumtionV=this.annualCustomerInput;
        }
    }
    else
    {
      this.past_consumtionV=this.annualEstimation;
    }

      this.estimationRegistration= {
      service_type: Number(this.serviceChoiceForm.value.service_type),
      address_id: Number(this.familyAdressCompoundForm.value.address_id),
      building_type: Number(this.familyAdressCompoundForm.value.building_type),
      family_size: Number(this.familyAdressCompoundForm.value.family_size),
      equipment: this.consumptionDetailsForm.value.equipments,
      past_consumption: Number(this.past_consumtionV),
      meters : this.meters,
    }

    console.log(this.estimationRegistration);
    
    this.onAddEstimation();

}

  addSmartMeter() {
    this.meters.forEach((m) => {
      if (m.meter_type == MeterType.SMART) {
        let body = {
          "occupants" : this.estimationRegistration.family_size,
          //"day_consumption" : m.index_value,
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
   onAddEstimation()
    {
      this.postService.addEstimation(this.estimationRegistration).subscribe((res)=>
        {
          console.log(res);
        }
      )
      this.openDialog();
    }
  
    openDialog()
    {
        const dialogRef = this.dialog.open(SubmitEstimationDialogComponent, {
          width: '250px',
          data: {estimationFromApi: this.annualEstimation},
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
    }
} 

@Component({
  selector: 'submit-estimation-dialog',
  templateUrl: 'submit-estimation-dialog.html',
})
export class SubmitEstimationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SubmitEstimationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onOkClick(): void {
    this.dialogRef.close();
  }
}
export interface DialogData
{
estimationFromApi:number;
}
